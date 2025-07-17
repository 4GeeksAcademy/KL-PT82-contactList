import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="navbar navbar-expand px-4 py-3 shadow-sm d-flex justify-content-between align-items-center">
      {/* Left-aligned brand/logo */}
      <span className="navbar-brand fw-bold text-primary">📇Contacts</span>

      {/* Right-aligned navigation + theme toggle */}
      <div className="nav-items d-flex align-items-center gap-3">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add" className="nav-link">Add Contact</Link>
        <button className="btn btn-outline-secondary btn-sm" onClick={toggleTheme}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
};
