import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="bg-light mt-auto py-4 border-top">
      <div className="container d-flex justify-content-between">
        <div className="text-muted">© Quiet Wins</div>
        <div>
          <Link to="/" className="me-3 text-decoration-none">Home</Link>
          <Link to="/quiz/start" className="me-3 text-decoration-none">Quiz</Link>
          <Link to="/stories" className="me-3 text-decoration-none">Stories</Link>
        </div>
      </div>
    </footer>
  );
}
