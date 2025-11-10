// src/components/LoginModal.jsx
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../App";

export default function LoginModal({ show, onClose, onSwitch }) {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // When this modal is closed, clear inputs
  useEffect(()=> {
    if (!show) {
      setEmail(""); setPassword("");
    }
  }, [show]);

  const handleLogin = (e) => {
    e?.preventDefault();
    const allUsers = JSON.parse(localStorage.getItem("qw_users") || "[]");
    const found = allUsers.find(u => u.email === email && u.password === password);
    if (!found) {
      // fallback - if no users list, allow quick login by creating a user (optional)
      // alert("Invalid login");
      return alert("Invalid email or password");
    }
    localStorage.setItem("qw_user", JSON.stringify(found));
    auth.setUser(found);
    onClose && onClose();
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ background: "#0008" }}>
      <div className="modal-dialog">
        <form className="modal-content p-3" onSubmit={handleLogin}>
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input className="form-control mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
            <input className="form-control mb-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
            <div className="text-center">
              <small>Don't have account? <button type="button" className="btn btn-link p-0" onClick={onSwitch}>Sign up</button></small>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
