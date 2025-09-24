import React, { useState } from "react";
import "./AuthForms.css";

const API_ROOT = "http://127.0.0.1:5000";

export default function RegisterForm({ onRegistered }) {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
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
      const res = await fetch(`${API_ROOT}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Registration failed");
      setMsg("Registered successfully. Please login.");
      setForm({ username: "", email: "", password: "" });
      setTimeout(() => onRegistered(), 1000);
    } catch (err) {
      setMsg(err.message || "Registration error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="auth-form">
      <label>Username</label>
      <input name="username" value={form.username} onChange={update} required />

      <label>Email</label>
      <input name="email" value={form.email} onChange={update} type="email" required />

      <label>Password</label>
      <input name="password" value={form.password} onChange={update} type="password" required />

      {msg && <div className="info">{msg}</div>}

      <div className="form-actions">
        <button type="submit" className="btn-primary">{loading ? "Registering..." : "Create account"}</button>
      </div>
    </form>
  );
}
