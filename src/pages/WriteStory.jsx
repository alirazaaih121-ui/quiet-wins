// src/pages/WriteStory.jsx
import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // install uuid or use crypto.randomUUID()
import { AuthContext } from "../App";
import Swal from "sweetalert2";

export default function WriteStory(){
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(true);
  const auth = useContext(AuthContext);
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    // If user wants to save under account, require login
    if (!auth.user && !anonymous) {
      Swal.fire({
        icon: 'info',
        title: 'Login required',
        text: 'Please login to post under your account.',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Sign up'
      }).then(res => {
        if (res.isConfirmed) auth.openLogin();
        else auth.openRegister();
      });
      return;
    }

    const stories = JSON.parse(localStorage.getItem('qw_stories') || "[]");
    const newStory = {
      id: uuidv4(),
      title,
      content,
      author: anonymous ? "Anonymous" : (auth.user ? auth.user.name : "Anonymous"),
      authorEmail: auth.user ? auth.user.email : null,
      createdAt: new Date().toISOString()
    };
    stories.unshift(newStory);
    localStorage.setItem('qw_stories', JSON.stringify(stories));

    Swal.fire("Published", "Your story was posted.", "success");
    nav('/stories');
  };

  return (
    <div className="card p-4">
      <h2>Share Your Story</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Story</label>
          <textarea className="form-control" rows={6} value={content} onChange={e=>setContent(e.target.value)} required/>
        </div>

        <div className="mb-3 form-check">
          <input id="anon" className="form-check-input" type="checkbox" checked={anonymous} onChange={e=>setAnonymous(e.target.checked)} />
          <label className="form-check-label" htmlFor="anon">Post anonymously</label>
        </div>

        <button className="btn btn-primary" type="submit">Publish</button>
      </form>
    </div>
  );
}
