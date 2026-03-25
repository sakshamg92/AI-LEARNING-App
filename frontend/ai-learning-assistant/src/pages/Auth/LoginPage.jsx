import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import authService from "../../services/authService";
import { BrainCircuit, Mail, Lock, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { token, user } = await authService.login(email, password);
      login(user, token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.message ||
          "Failed to login. Please check your credentials and try again.",
      );
      toast.error(err.message || "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="" />

      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-lg px-10 py-12">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mb-6">
              <BrainCircuit className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Welcome back
            </h1>
            <p className="text-gray-500 text-base mt-2">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest">
                Email
              </label>
              <div className="relative">
                <div
                  className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${
                    focusedField === "email"
                      ? "text-emerald-500"
                      : "text-slate-400"
                  }`}
                >
                  <Mail className="w-4 h-4" strokeWidth={2} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest">
                Password
              </label>
              <div className="relative">
                <div
                  className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${
                    focusedField === "password"
                      ? "text-emerald-500"
                      : "text-slate-400"
                  }`}
                >
                  <Lock className="w-4 h-4" strokeWidth={2} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                  placeholder="........."
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <p className="text-red-500 text-sm text-center">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl py-3.5 px-4 text-base transition-all duration-200 active:scale-[0.98]"
          >
            <span className="flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </>
              )}
            </span>
            <div className="" />
          </button>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-emerald-500 hover:text-emerald-600 font-semibold transition-colors duration-200"
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* Subtle footer text */}
          <p className="mt-4 text-center text-gray-400 text-xs">
            By continuing, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
