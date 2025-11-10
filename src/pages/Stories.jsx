import React, {useEffect, useState} from "react";
import StoryCard from "../components/StoryCard";
import { Link } from "react-router-dom";

export default function Stories(){
  const [stories, setStories] = useState([]);

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('qw_stories') || "[]");
    setStories(saved);
  },[]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Community Stories</h2>
        <Link to="/stories/write" className="btn btn-primary">Write Story</Link>
      </div>

      <div className="row g-3">
        {stories.length === 0 && <div className="alert alert-info">No stories yet — be the first to share one.</div>}
        {stories.map(s => (
          <div className="col-md-4" key={s.id}>
            <StoryCard story={s} />
          </div>
        ))}
      </div>
    </div>
  );
}
