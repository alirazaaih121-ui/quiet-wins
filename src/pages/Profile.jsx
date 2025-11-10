// src/pages/Profile.jsx
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";

export default function Profile(){
  const { user } = useContext(AuthContext);
  const [quiz, setQuiz] = useState(null);
  const [myStories, setMyStories] = useState([]);

  useEffect(()=>{
    if (!user) return;

    const qKey = `qw_quiz_user_${user.email}`;
    const savedQuiz = localStorage.getItem(qKey);
    if (savedQuiz) setQuiz(JSON.parse(savedQuiz));

    const allStories = JSON.parse(localStorage.getItem('qw_stories') || "[]");
    const mine = allStories.filter(s => s.authorEmail === user.email);
    setMyStories(mine);
  }, [user]);

  if (!user) {
    return (
      <div className="card p-4">
        <h2>Your Profile</h2>
        <div className="alert alert-info">You are not logged in. Login to save quiz results and stories to your account.</div>
      </div>
    );
  }

  return (
    <div className="card p-4">
      <h2>Your Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <hr/>

      <h4>Your Quiz Result</h4>
      {!quiz ? <p className="text-muted">No saved quiz result.</p> : (
        <div>
          <p><strong>Type:</strong> {quiz.phoenixType}</p>
          <p className="text-muted">Saved: {new Date(quiz.updatedAt).toLocaleString()}</p>
        </div>
      )}

      <hr/>

      <h4>Your Stories</h4>
      {myStories.length === 0 ? (
        <p className="text-muted">You haven't published any stories under this account.</p>
      ) : (
        <ul className="list-unstyled">
          {myStories.map(s => (
            <li key={s.id} className="mb-2">
              <strong>{s.title}</strong> <small className="text-muted">({new Date(s.createdAt).toLocaleDateString()})</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
