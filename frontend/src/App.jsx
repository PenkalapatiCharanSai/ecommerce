// frontend/src/App.jsx
import { useEffect, useState } from "react";
import './App.css';
export default function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => setMsg(data.message))
      .catch((err) => {
        console.error("Fetch error:", err);
        setMsg("Could not reach backend");
      });
  }, []);

  return (
    <div style={{ padding: 32, fontFamily: "system-ui, Arial" }}>
      <h1>React ↔ Flask Hello World</h1>
      <p>{msg}</p>
    </div>
  );
}
