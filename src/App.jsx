// src/App.jsx
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import QuizStart from "./pages/QuizStart";
import QuizQuestion from "./pages/QuizQuestion";
import QuizResult from "./pages/QuizResult";
import Stories from "./pages/Stories";
import StoryView from "./pages/StoryView";
import WriteStory from "./pages/WriteStory";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import Admin from "./pages/Admin";

import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

export const AuthContext = createContext();

export default function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("qw_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // logout helper
  const logout = () => {
    localStorage.removeItem("qw_user");
    setUser(null);
    Swal.fire("Logged out", "", "info");
  };

  // For convenience, expose functions to open modals
  const contextValue = {
    user,
    setUser,
    logout,
    openLogin: () => setShowLogin(true),
    openRegister: () => setShowRegister(true),
    closeModals: () => { setShowLogin(false); setShowRegister(false); }
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <div className="app-root d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-grow-1 container my-5">
          <Routes>
            {/* Note: NO ProtectedRoute wrappers here — pages are freely navigable */}
            <Route path="/" element={<Home />} />
            <Route path="/quiz/start" element={<QuizStart />} />
            <Route path="/quiz/question" element={<QuizQuestion />} />
            <Route path="/quiz/result" element={<QuizResult />} />

            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:id" element={<StoryView />} />
            <Route path="/stories/write" element={<WriteStory />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />

        {/* Render modals (controlled by state) */}
        <LoginModal show={showLogin} onClose={() => setShowLogin(false)} onSwitch={() => { setShowLogin(false); setShowRegister(true); }} />
        <SignupModal show={showRegister} onClose={() => setShowRegister(false)} onSwitch={() => { setShowRegister(false); setShowLogin(true); }} />
      </div>
    </AuthContext.Provider>
  );
}
