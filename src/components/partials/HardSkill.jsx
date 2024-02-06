import React from "react";

function HardSkill({ logo, name }) {
  return (
    <div className="skill-item">
      <img src={logo} alt={`logo ${name}`} />
      <span>{name}</span>
    </div>
  );
}

export default HardSkill;
