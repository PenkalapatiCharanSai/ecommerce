import React, { useState } from "react";
import "./AuthForms.css";

const API_ROOT = "http://127.0.0.1:5000";

export default function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  function update(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function submit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);
    try {
      const res = await fetch(`${API_ROOT}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          password: form.password
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Login failed");
      onLogin(data.user, data.access_token);
    } catch (err) {
      setMsg(err.message || "Login error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="auth-form">
      <label>Username or Email</label>
      <input name="username" value={form.username} onChange={update} required />

      <label>Password</label>
      <input name="password" value={form.password} onChange={update} type="password" required />

      {msg && <div className="error">{msg}</div>}

      <div className="form-actions">
        <button type="submit" className="btn-primary">{loading ? "Logging in..." : "Login"}</button>
      </div>
    </form>
  );
}
