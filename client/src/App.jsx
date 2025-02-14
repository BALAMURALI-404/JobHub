import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from "./pages/Login";
import Search from "./pages/Search";
import Home from "./pages/home";
import Required from "./pages/Required";
import Profile from "./pages/Profile";
import './App.css'; // Import a CSS file for styling

function Dashboard() {
  return (
    <nav className="dashboard">
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Search">Search</Link></li>
        <li><Link to="/Required">Required</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/required" element={<Required />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && (
          <div className="sidebar bg-amber-200 align-left m-3 p-10 w-[10vw] round-lg shadow-lg">
            <Dashboard />
          </div>
        )}
        <div className={`main-content ${isLoggedIn ? 'with-sidebar' : ''}`}>
          <Routes>
            <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            {isLoggedIn ? (
              <Route path="*" element={<AuthenticatedRoutes />} />
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
