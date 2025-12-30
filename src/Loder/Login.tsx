// import React, { useState } from "react";
// import "./Login.css";


// type Mode = "login" | "register" | "forgot";

// const Login: React.FC = () => {
//   const [mode, setMode] = useState<Mode>("login");

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (mode === "login") {
//       console.log("Login:", { username, password });
//     } else if (mode === "register") {
//       console.log("Register:", { username, email, password });
//     } else {
//       console.log("Forgot Password:", { email });
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>
//           {mode === "login" && "Login"}
//           {mode === "register" && "Create New User"}
//           {mode === "forgot" && "Forgot Password"}
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {(mode === "login" || mode === "register") && (
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           )}

//           {(mode === "register" || mode === "forgot") && (
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           )}

//           {(mode === "login" || mode === "register") && (
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           )}

//           <button type="submit">
//             {mode === "login" && "Login"}
//             {mode === "register" && "Register"}
//             {mode === "forgot" && "Reset Password"}
//           </button>
//         </form>

//         <div className="auth-links">
//           {mode !== "login" && (
//             <span onClick={() => setMode("login")}>Login</span>
//           )}
//           {mode !== "register" && (
//             <span onClick={() => setMode("register")}>Create New User</span>
//           )}
//           {mode !== "forgot" && (
//             <span onClick={() => setMode("forgot")}>Forgot Password?</span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
