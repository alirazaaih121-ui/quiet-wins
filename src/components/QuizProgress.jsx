import React from "react";

export default function QuizProgress({current, total}) {
  const pct = Math.round(100 * (current / total));
  return (
    <div>
      <div className="mb-2 d-flex justify-content-between">
        <small>Question {current} / {total}</small>
        <small>{pct}%</small>
      </div>
      <div className="progress">
        <div className="progress-bar" style={{width: `${pct}%`}}/>
      </div>
    </div>
  );
}
