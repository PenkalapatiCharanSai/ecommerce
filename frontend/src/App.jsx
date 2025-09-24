import React, { useEffect, useState } from "react";
import AuthPanel from "./components/AuthPanel";
import WelcomePanel from "./components/WelcomePanel";

/*
 App responsibilities:
 - Keep top-level auth state (user + token)
 - Choose whether to show AuthPanel or WelcomePanel
*/

export default function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user")); }
    catch { return null; }
  });
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    // Optional place to verify token on load by calling /api/auth/me
    // We'll rely on localStorage for this simple demo.
  }, []);

  function handleLogin(userObj, tokenStr) {
    localStorage.setItem("user", JSON.stringify(userObj));
    localStorage.setItem("token", tokenStr);
    setUser(userObj);
    setToken(tokenStr);
  }

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  }

  return token && user ? (
    <WelcomePanel user={user} onLogout={handleLogout} />
  ) : (
    <AuthPanel onLogin={handleLogin} />
  );
}
