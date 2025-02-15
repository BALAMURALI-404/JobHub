import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from "./pages/Login";
import Search from "./pages/Search";
import Home from "./pages/home";
import Required from "./pages/Required";
import Profile from "./pages/Profile";
import './App.css'; 

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App text-2xl ">
        {isLoggedIn ? (
          <>
            <nav className="bg-gradient-to-br from-amber-500 to-amber-300 shadow-lg w-screen p-2 flex justify-between items-center">
              <ul className="flex flex-row justify-start items-center space-x-4">
                <li className="mx-10 hover:bg-gradient-to-br from-orange-500 to-orange-300 hover:rounded-lg hover:p-2"><Link to="/">Home</Link></li>
                <li className="mx-10 hover:bg-gradient-to-br from-orange-500 to-orange-300 hover:rounded-lg hover:p-2"><Link to="/search">Search</Link></li>
                <li className="mx-10 hover:bg-gradient-to-br from-orange-500 to-orange-300 hover:rounded-lg hover:p-2"><Link to="/required">Required</Link></li>
                <li className="mx-10 hover:bg-gradient-to-br from-orange-500 to-orange-300 hover:rounded-lg hover:p-2"><Link to="/profile">Profile</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/required" element={<Required />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}
