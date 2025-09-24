import React, { useState } from "react";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import "./AuthPanel.css";

export default function AuthPanel({ onLogin }) {
  const [tab, setTab] = useState("login"); // "login" or "register"

  return (
    <div className="auth-layout">
      <div className="auth-left">
        <h1 className="brand">Ecommerce</h1>
        <p className="tagline">Build. Sell. Grow.</p>
      </div>

      <div className="auth-right card">
        <div className="tabs">
          <button className={tab === "login" ? "active" : ""} onClick={() => setTab("login")}>Login</button>
          <button className={tab === "register" ? "active" : ""} onClick={() => setTab("register")}>Register</button>
        </div>

        {tab === "login" ? (
          <LoginForm onLogin={onLogin} />
        ) : (
          <RegisterForm onRegistered={() => setTab("login")} />
        )}
      </div>
    </div>
  );
}
