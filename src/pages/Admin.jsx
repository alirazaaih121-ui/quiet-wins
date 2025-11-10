import React, {useEffect, useState} from "react";

export default function Admin(){
  const [stats, setStats] = useState({users:0, quizCount:0, stories:0});

  useEffect(()=>{
    const profile = JSON.parse(localStorage.getItem('qw_profile') || "null");
    const stories = JSON.parse(localStorage.getItem('qw_stories') || "[]");
    const answers = JSON.parse(localStorage.getItem('qw_quiz_answers') || "[]");
    setStats({
      users: profile ? 1 : 0, // simple for MVP
      quizCount: answers.length > 0 ? 1 : 0,
      stories: stories.length
    });
  },[]);

  return (
    <div className="card p-4">
      <h2>Admin Dashboard (MVP)</h2>
      <div className="row">
        <div className="col-md-4"><div className="p-3 border rounded">Users<br/><strong>{stats.users}</strong></div></div>
        <div className="col-md-4"><div className="p-3 border rounded">Quiz Completions<br/><strong>{stats.quizCount}</strong></div></div>
        <div className="col-md-4"><div className="p-3 border rounded">Stories<br/><strong>{stats.stories}</strong></div></div>
      </div>
    </div>
  );
}
