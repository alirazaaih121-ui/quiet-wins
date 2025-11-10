// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../App";

export default function Navbar(){
  const auth = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand me-auto" to="/">QUIET WINS</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/quiz/start">Quiz</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/stories">Stories</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/resources">Resources</NavLink></li>

            {auth.user ? (
              <>
                <li className="nav-item"><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
                <li className="nav-item ms-3"><button className="btn btn-outline-secondary" onClick={auth.logout}>Logout</button></li>
              </>
            ) : (
              <>
                <li className="nav-item ms-2"><button className="btn btn-primary" onClick={auth.openLogin}>Login</button></li>
                <li className="nav-item ms-2"><button className="btn btn-primary" onClick={auth.openRegister}>Sign Up</button></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
