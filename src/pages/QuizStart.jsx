import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuizStart(){
  const nav = useNavigate();
  const start = () => {
    // reset progress
    localStorage.removeItem('qw_quiz_answers');
    nav('/quiz/question');
  };

  return (
    <div className="card p-4 d-flex flex-column align-items-center w-75 mx-auto shadow-lg">
      <h2>Take the Phoenix Quiz</h2>
      <p>Short, fun quiz to discover your Phoenix type.</p>
      <button className="btn btn-primary w-25" onClick={start}>Start Quiz</button>
    </div>
  );
}
