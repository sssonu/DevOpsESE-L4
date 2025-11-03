import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log("Backend URL:", apiUrl);
    fetch(`${apiUrl}/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>React + Vite Frontend</h1>
      <h2>Backend says:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
