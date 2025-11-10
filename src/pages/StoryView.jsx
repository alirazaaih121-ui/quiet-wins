import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function StoryView(){
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const nav = useNavigate();

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('qw_stories') || "[]");
    const found = saved.find(s => s.id === id);
    if(!found) { nav('/stories'); return; }
    setStory(found);
  }, [id]);

  if(!story) return null;
  return (
    <div className="card p-4">
      <h2>{story.title}</h2>
      <p className="text-muted">By {story.author || "Anonymous"} on {new Date(story.createdAt).toLocaleDateString()}</p>
      <div className="mt-3">{story.content}</div>
    </div>
  );
}
