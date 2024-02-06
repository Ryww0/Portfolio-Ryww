import React from "react";

function SoftSkill({ name, content }) {
  return (
    <div className="skill-item">
      <h4>{name}</h4>
      <p>{content}</p>
    </div>
  );
}

export default SoftSkill;
