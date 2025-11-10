// src/pages/QuizResult.jsx
import React, {useEffect, useState, useContext} from "react";
import { RESULT_MAP } from "../data/quiz";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import Swal from "sweetalert2";

export default function QuizResult(){
  const [result, setResult] = useState(null);
  const nav = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(()=>{
    const answers = JSON.parse(localStorage.getItem('qw_quiz_answers') || "[]");
    if(answers.length === 0){
      nav('/quiz/start'); return;
    }
    const freq = answers.reduce((acc, a) => {acc[a] = (acc[a]||0)+1; return acc;},{});
    const winner = Object.keys(freq).sort((a,b)=>freq[b]-freq[a])[0];
    setResult(RESULT_MAP[winner] || RESULT_MAP['a']);
  }, []);

  const saveProfileToUser = () => {
    if (!auth.user) {
      // prompt login
      Swal.fire({
        icon: 'info',
        title: 'Login required',
        text: 'Please login or create an account to save your result.',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Sign up'
      }).then(res => {
        if (res.isConfirmed) auth.openLogin();
        else auth.openRegister();
      });
      return;
    }

    const payload = {
      phoenixType: result.type,
      desc: result.desc,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(`qw_quiz_user_${auth.user.email}`, JSON.stringify(payload));

    Swal.fire("Saved", "Quiz result saved to your account.", "success");
    nav('/profile');
  };

  if(!result) return null;
  return (
    <div className="card p-4">
      <h2>Your Result: {result.type}</h2>
      <p>{result.desc}</p>
      <div className="mt-3">
        <button className="btn btn-primary me-3" onClick={saveProfileToUser}>Save to profile</button>
        <button className="btn btn-outline-secondary" onClick={()=>nav('/')}>Back to home</button>
      </div>
    </div>
  );
}
