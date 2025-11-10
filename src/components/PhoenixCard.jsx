import React from "react";

export default function PhoenixCard({name, trait}) {
  return (
    <div className="text-center">
      <div className="round-avatar mb-2">
        {name[0]}
      </div>
      <div><strong>{name}</strong></div>
      <small className="text-muted">{trait}</small>
    </div>
  );
}
