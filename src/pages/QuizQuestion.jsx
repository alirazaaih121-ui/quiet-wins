import React, {useState, useEffect} from "react";
import { QUESTIONS } from "../data/quiz";
import QuizProgress from "../components/QuizProgress";
import { useNavigate } from "react-router-dom";

export default function QuizQuestion(){
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const nav = useNavigate();
  const total = QUESTIONS.length;

  useEffect(()=>{
    // restore answers if any
    const saved = JSON.parse(localStorage.getItem('qw_quiz_answers') || "[]");
    if(saved[index]) setSelected(saved[index]);
  }, [index]);

  const saveAnswer = (choice) => {
    const saved = JSON.parse(localStorage.getItem('qw_quiz_answers') || "[]");
    saved[index] = choice;
    localStorage.setItem('qw_quiz_answers', JSON.stringify(saved));
    setSelected(choice);
  };

  const next = () => {
    if(index < total - 1) setIndex(i => i + 1);
    else nav('/quiz/result');
  };

  const prev = () => {
    if(index > 0) setIndex(i => i - 1);
  };

  const q = QUESTIONS[index];

  return (
    <div className="card p-4">
      <QuizProgress current={index+1} total={total} />
      <h4 className="mt-3">{q.text}</h4>
      <div className="mt-3 d-grid gap-2">
        {q.options.map(o => (
          <button
            key={o.id}
            className={`btn ${selected === o.id ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => saveAnswer(o.id)}
          >
            {o.text}
          </button>
        ))}
      </div>

      <div className="mt-4 d-flex justify-content-between">
        <button className="btn btn-link" onClick={prev} disabled={index===0}>Previous</button>
        <button className="btn btn-primary" onClick={next} disabled={!selected}>Next</button>
      </div>
    </div>
  );
}
