// src/components/SignupModal.jsx
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../App";

export default function SignupModal({ show, onClose, onSwitch }) {
  const auth = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=> {
    if (!show) { setName(""); setEmail(""); setPassword(""); }
  }, [show]);

  const handleSignup = (e) => {
    e?.preventDefault();
    const allUsers = JSON.parse(localStorage.getItem("qw_users") || "[]");

    if (allUsers.some(u => u.email === email)) {
      return alert("Email already exists");
    }

    const newUser = { name, email, password, createdAt: Date.now() };
    allUsers.push(newUser);
    localStorage.setItem("qw_users", JSON.stringify(allUsers));
    localStorage.setItem("qw_user", JSON.stringify(newUser));
    auth.setUser(newUser);
    onClose && onClose();
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ background: "#0008" }}>
      <div className="modal-dialog">
        <form className="modal-content p-3" onSubmit={handleSignup}>
          <div className="modal-header">
            <h5 className="modal-title">Create Account</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input className="form-control mb-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} required/>
            <input className="form-control mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
            <input className="form-control mb-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
            <div className="text-center">
              <small>Already have an account? <button type="button" className="btn btn-link p-0" onClick={onSwitch}>Login</button></small>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            <button className="btn btn-primary" type="submit">Create account</button>
          </div>
        </form>
      </div>
    </div>
  );
}
