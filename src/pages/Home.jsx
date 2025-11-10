import React from "react";
import { Link } from "react-router-dom";
import PhoenixCard from "../components/PhoenixCard";

const phoenixes = [
  {name:"Reza", trait:"Brave"},
  {name:"Jamie", trait:"Loyal"},
  {name:"Hannah", trait:"Creative"},
  {name:"Yani", trait:"Hopeful"},
  {name:"Garin", trait:"Wise"}
];

export default function Home(){
  return (
    <div>
      <div className="row align-items-center mb-5">
  <div className="col-md-7">
    <h1 className="display-5">Discover Your Inner Phoenix</h1>
    <p className="lead">A guide for introverted courage, quiet wins, and creative resilience.</p>
    <div className="mt-4">
      <Link to="/quiz/start" className="btn btn-primary me-3">Start Quiz</Link>
      <Link to="/stories" className="btn btn-outline-secondary">Explore Stories</Link>
    </div>
  </div>
  <div className="col-md-5 text-center">
    <div className="placeholder-image card p-4">
      {/* Replace with book cover image */}
      <img src="https://static.wixstatic.com/media/2e91d8_83a699031b734992916853ffc8525b00~mv2.png/v1/fill/w_380,h_549,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e91d8_83a699031b734992916853ffc8525b00~mv2.png" alt="Quiet Wins book" style={{maxWidth:'220px'}}/>
    </div>
  </div>
</div>


      <h3 className="mb-4">Meet the Phoenix Posse</h3>
      <div className="row g-3 mb-5">
        {phoenixes.map(p => (
          <div key={p.name} className="col-sm-6 col-md-2">
            <PhoenixCard name={p.name} trait={p.trait}/>
          </div>
        ))}
      </div>

      <h3 className="mb-3">Stories</h3>
      <div className="row gy-3">
        <div className="col-md-4"><div className="card p-3"> <h5>Finding My Voice</h5> <p>Short snippet from a user story...</p> </div></div>
        <div className="col-md-4"><div className="card p-3"> <h5>Facing My Fear</h5> <p>Short snippet from a user story...</p> </div></div>
        <div className="col-md-4"><div className="card p-3"> <h5>A Quiet Strength</h5> <p>Short snippet from a user story...</p> </div></div>
      </div>
    </div>
  );
}
