import React, { useState, useEffect } from "react";
import Spinner from "../../components/common/Spinner";
import progressService from "../../services/progressService";
import toast from "react-hot-toast";
import {
  FileText,
  BookOpen,
  BrainCircuit,
  TrendingUp,
  Clock,
} from "lucide-react";

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await progressService.getDashboardData();
        console.log("Data___getDashboardData", data);

        setDashboardData(data.data);
      } catch (error) {
        toast.error("Failed to fetch dashboard data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!dashboardData || !dashboardData.overview) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-4">
            <TrendingUp className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-slate-600 text-sm">No dashboard data available.</p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      label: "Total Documents",
      value: dashboardData.overview.totalDocuments,
      icon: FileText,
      gradient: "from-blue-400 to-cyan-500",
      shadowColor: "shadow-blue-500/25",
    },
    {
      label: "Total Flashcards",
      value: dashboardData.overview.totalFlashcards,
      icon: BookOpen,
      gradient: "from-purple-400 to-pink-500",
      shadowColor: "shadow-purple-500/25",
    },
    {
      label: "Total Quizzes",
      value: dashboardData.overview.totalQuizzes,
      icon: BrainCircuit,
      gradient: "from-emerald-400 to-teal-500",
      shadowColor: "shadow-emerald-500/25",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="p-6 md:p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

            <p className="text-slate-500 text-sm mt-1">
              Track your learning progress and activity
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    {stat.label}
                  </span>

                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.gradient} shadow group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
                  >
                    <stat.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                </div>

                <div className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                <Clock className="w-4 h-4 text-slate-600" strokeWidth={2} />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                Recent Activity
              </h3>
            </div>

            {dashboardData.recentActivity &&
            (dashboardData.recentActivity.documents.length > 0 ||
              dashboardData.recentActivity.quizzes.length > 0) ? (
              <div className="space-y-3">
                {[
                  ...(dashboardData.recentActivity.documents || []).map(
                    (doc) => ({
                      id: doc._id,
                      description: doc.title,
                      timestamp: doc.lastAccessed,
                      link: `/documents/${doc._id}`,
                      type: "document",
                    }),
                  ),

                  ...(dashboardData.recentActivity.quizzes || []).map(
                    (quiz) => ({
                      id: quiz._id,
                      description: quiz.title,
                      timestamp: quiz.completedAt,
                      link: `/quizzes/${quiz._id}`,
                      type: "quiz",
                    }),
                  ),
                ]
                  .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                  .map((activity, index) => (
                    <div
                      key={activity.id || index}
                      className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all duration-200"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-2 h-2 rounded-full flex-shrink-0 ${
                              activity.type === "document"
                                ? "bg-blue-400"
                                : "bg-emerald-400"
                            }`}
                          />

                          <p className="text-sm font-medium text-slate-800">
                            {activity.type === "document"
                              ? "Accessed Document: "
                              : "Attempted Quiz: "}
                            <span className="font-semibold">
                              {activity.description}
                            </span>
                          </p>
                        </div>
                        <p className="text-xs text-slate-400 pl-4">
                          {new Date(activity.timestamp).toLocaleString()}
                        </p>
                      </div>

                      {activity.link && (
                        <a
                          href={activity.link}
                          className="text-sm font-semibold text-emerald-500 hover:text-emerald-600 transition-colors duration-200 ml-4 flex-shrink-0"
                        >
                          View
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-slate-400" />
                </div>

                <p className="text-sm font-medium text-slate-600">
                  No recent activity yet.
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Start learning to see your progress here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
