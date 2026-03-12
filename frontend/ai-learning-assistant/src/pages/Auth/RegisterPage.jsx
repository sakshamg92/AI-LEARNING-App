// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import authService from "../../services/authService";
// import { BrainCircuit, Mail, Lock, ArrowRight } from "lucide-react";
// import toast from "react-hot-toast";

// const RegisterPage = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }
//     setError("");
//     setLoading(true);
//     try {
//       await authService.register(username, email, password);
//       toast.success("Registeration successful! Please Login.");
//       navigate("/login");
//     } catch (err) {
//       setError(err.message || "Failed to register. Please try again.");
//       toast.error(err.message || "Failed to Register");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return;
//   <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-100 to-slate-200">
//     <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]" />
//     <div className="relative w-full max-w-md px-6">
//       <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-900 text-white">
//             <BrainCircuit className="w-7 h-7 text-white" strokeWidth={2} />
//           </div>
//           <h1 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">
//             Create an account
//           </h1>
//           <p className="text-slate-500 text-sm">
//             Start your AI-powered learning experience
//           </p>
//         </div>

//           {/* Form */}
//           <div className="">
//             <div className="">
//               {/* Username Field */}
//   <label className="">
//     Username
//   </label>
//   <div className="">
//     <div
//       className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${
//         focusedField === "username"
//           ? "text-emerald-500"
//           : "text-slate-400"
//       }`}
//     >
//       <User className="" strokeWidth={2} />
//     </div>
//     <input
//       type="text"
//       value={username}
//       onChange={(e) => setUsername(e.target.value)}
//       onFocus={() => setFocusedField("username")}
//       onBlur={() => setFocusedField(null)}
//       className=""
//       placeholder="yourusername"
//     />
//   </div>

//   {/* Email Field */}
// <div className="">
//   <label className="">
//     Email
//   </label>
//   <div className="">
//     <div
//       className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${
//         focusedField === "email"
//           ? "text-emerald-500"
//           : "text-slate-400"
//       }`}
//     >
//       <Mail className="" strokeWidth={2} />
//     </div>
//     <input
//       type="email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       onFocus={() => setFocusedField("email")}
//       onBlur={() => setFocusedField(null)}
//       className=""
//       placeholder="you@example.com"
//     />
//   </div>
// </div>
// {/* Password Field */}
// <div className="">
//   <label className="">
//     Password
//   </label>
//   <div className="">
//     <div
//       className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
//     >
//       focusedField === "password"
//         ? "text-emerald-500"
//         : "text-slate-400"
//     </div>
//     <Lock className="" strokeWidth={2} />
//   </div>
//   <input
//     type="password"
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//     onFocus={() => setFocusedField("password")}
//     onBlur={() => setFocusedField(null)}
//     className=""
//   />
// </div>
// </div>
// {/* Error Message */}
// {error && (
//   <div className="">
//     <p className="">
//       {error}
//     </p>
//   </div>
// )}

// {/* Submit Button */}
// <button
//   onClick={handleSubmit}
//   disabled={loading}
//   className=""
// >
//   <span className="">
//     {loading ? (
//   <>
//     <div className="">
//       Creating account...
//     </div>
//   </>
// ) : (
//   <>
//     Create account
//     <ArrowRight className="" strokeWidth={2.5} />
//   </>
// )}
//   </span>
//   <div className=""/>
// </button>
// </div>

//         {/* Footer */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-500 text-sm">
//             Already an account?{" "}
//             <Link
//               to="/login"
//               className="text-emerald-500 hover:text-emerald-600 font-semibold transition-colors duration-200"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>

//       {/* Subtl footer text */}
//       <p className="absolute bottom-4 text-center w-full text-gray-400 text-xs">
//         By continuing, you agree to our Terms & Privacy Policy
//       </p>
//     </div>
//   </div>;
// };

// export default RegisterPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { BrainCircuit, Mail, Lock, ArrowRight, User } from "lucide-react";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await authService.register(username, email, password);
      toast.success("Registeration successful! Please Login.");
      navigate("/login");
    } catch (err) {
      setError(err.message || "Failed to register. Please try again.");
      toast.error(err.message || "Failed to Register");
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
              Create an account
            </h1>
            <p className="text-gray-500 text-base mt-2">
              Start your AI-powered learning experience
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div className="space-y-5">
              {/* Username Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Username
                </label>
                <div className="relative">
                  <div
                    className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${
                      focusedField === "username"
                        ? "text-emerald-500"
                        : "text-slate-400"
                    }`}
                  >
                    <User className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setFocusedField("username")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                    placeholder="yourusername"
                  />
                </div>
              </div>

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
              className="mt-2 w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl py-3.5 px-4 text-base transition-all duration-200 active:scale-[0.98]"
            >
              <span className="flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create account
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </>
                )}
              </span>
              <div className="" />
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-emerald-500 hover:text-emerald-600 font-semibold transition-colors duration-200"
              >
                Sign in
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

export default RegisterPage;
