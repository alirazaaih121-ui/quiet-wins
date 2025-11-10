import React from "react";
import { Link } from "react-router-dom";

export default function StoryCard({story}) {
  return (
    <div className="story-card h-100 shadow-lg">
      <h5 style={{marginBottom:'0.5rem'}}>{story.title}</h5>
      <p className="text-muted" style={{marginBottom:'1rem'}}>{story.content.slice(0,120)}{story.content.length>120?'…':''}</p>
      <Link to={`/stories/${story.id}`} className="text-decoration-none">Read more →</Link>
    </div>
  );
}
