"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    if (email === "selva@gmail.com" && password === "12345") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="logo">
          <div className="logo-icon">✦</div>
          <span>Nova</span>
        </div>

        <h1>Login</h1>

        <p className="welcome">
          Welcome back! Please login to your account.
        </p>

        <div className="input-box">
          <span className="input-icon">✉</span>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-box">
          <span className="input-icon">♙</span>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="eye-button"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? "◉" : "◌"}
          </button>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        <p className="signup">
          Don't have an account?
          <span> Sign Up</span>
        </p>

      </div>
    </div>
  );
}