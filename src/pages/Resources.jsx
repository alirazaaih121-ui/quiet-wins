import React from "react";

export default function Resources(){
  const items = [
    { title: "Lesson Plan: Quiet Wins", desc: "A teacher guide for classroom use"},
    { title: "Activity Sheet", desc: "Printable worksheets" }
  ];

  return (
    <div>
      <h2>Resources</h2>
      <div className="row g-3">
        {items.map((it, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card p-3">
              <h5>{it.title}</h5>
              <p className="text-muted">{it.desc}</p>
              <button className="btn btn-outline-secondary">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
