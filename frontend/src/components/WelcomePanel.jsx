import React from "react";
import "./WelcomePanel.css";

export default function WelcomePanel({ user, onLogout }) {
  return (
    <div className="welcome-root">
      <aside className="sidebar">
        <div className="user-info">
          <div className="avatar">{user?.username ? user.username[0].toUpperCase() : "U"}</div>
          <div>
            <div className="username">{user?.username}</div>
            <div className="email">{user?.email}</div>
          </div>
        </div>

        <nav className="side-nav">
          <button className="nav-item">Dashboard</button>
          <button className="nav-item">Products</button>
          <button className="nav-item">Orders</button>
          <button className="nav-item">Customers</button>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-logout" onClick={onLogout}>Logout</button>
        </div>
      </aside>

      <main className="main-area">
        <div className="main-card">
          <h1>Welcome to Ecommerce</h1>
          <p className="muted">You are logged in. Use the sidebar to navigate the demo.</p>

          <div className="grid">
            <div className="stat">
              <div className="stat-label">Total Products</div>
              <div className="stat-value">—</div>
            </div>
            <div className="stat">
              <div className="stat-label">Active Orders</div>
              <div className="stat-value">—</div>
            </div>
            <div className="stat">
              <div className="stat-label">Revenue</div>
              <div className="stat-value">—</div>
            </div>
          </div>

          <p className="muted small">This is a demo admin area. Product and order details will be added in future weeks.</p>
        </div>
      </main>
    </div>
  );
}
