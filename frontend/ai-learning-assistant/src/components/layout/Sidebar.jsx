// import React from "react";

// import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import {
//   LayoutDashboard,
//   FileText,
//   User,
//   LogOut,
//   BrainCircuit,
//   BookOpen,
//   X,
// } from "lucide-react";

// const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const navLinks = [
//     { to: "/dashboard", icon: LayoutDashboard, text: "Dashboard" },
//     { to: "/documents", icon: FileText, text: "Documents" },
//     { to: "/flashcards", icon: BookOpen, text: "Flashcards" },
//     { to: "/profile", icon: User, text: "Profile" },
//   ];

//   return (
//     <>
//       <div
//         className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-
//       ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
//     }`}
//         onClick={toggleSidebar}
//         aria-hidden="true"
//       ></div>

//       <aside
//         className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-lg border-r
//       ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//     `}
//       >
//         {/* Logo and Close button for mobile */}
//         <div className="">
//           <div className="">
//             <div className="">
//               <BrainCircuit className="" size={20} strokeWidth={2.5} />
//             </div>
//             <h1 className="">AI Learning Assistant</h1>
//           </div>
//           <button onClick={toggleSidebar} className="">
//             <X size={24} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.to}
//               to={link.to}
//               onClick={toggleSidebar}
//               className={({ isActive }) =>
//                 `group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
//                   isActive
//                     ? "bg-linear-to-r from-emarald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20"
//                     : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   <link.icon
//                     size={18}
//                     strokeWidth={2.5}
//                     className={`transition-transform duration-200 ${
//                       isActive ? "" : "group-hover:scale-110"
//                     }`}
//                   />
//                   {link.text}
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Logout Button */}
//         <div className="">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200"
//           >
//             <LogOut size={18} strokeWidth={2.5} />
//             Logout
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  FileText,
  User,
  LogOut,
  BrainCircuit,
  BookOpen,
  X,
} from "lucide-react";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = [
    { to: "/dashboard", icon: LayoutDashboard, text: "Dashboard" },
    { to: "/documents", icon: FileText, text: "Documents" },
    { to: "/flashcards", icon: BookOpen, text: "Flashcards" },
    { to: "/profile", icon: User, text: "Profile" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-200
          ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleSidebar}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-200 z-50 flex flex-col
          transition-transform duration-300 md:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo and Close button for mobile */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-200/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <BrainCircuit
                className="text-white"
                size={20}
                strokeWidth={2.5}
              />
            </div>
            <h1 className="text-sm font-bold text-slate-900">
              AI Learning Assistant
            </h1>
          </div>
          <button
            onClick={toggleSidebar}
            className="md:hidden inline-flex items-center justify-center w-8 h-8 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <link.icon
                    size={18}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${
                      isActive ? "" : "group-hover:scale-110"
                    }`}
                  />
                  {link.text}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="px-3 py-4 border-t border-slate-200/60">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-xl text-slate-700 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
          >
            <LogOut size={18} strokeWidth={2} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
