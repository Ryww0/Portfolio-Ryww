import React from "react";

function Project({ image, title, date, description, technos, link }) {
  const redirectTo = (link) => {
    window.open(link);
  };

  return (
    <div
      className="project-item"
      style={{ backgroundImage: "url(" + image + ")" }}
      onClick={() => redirectTo(link)}
    >
      <div className="filter"></div>
      <div className="content">
        <div className="content-header">
          <div>
            <h4>{title}</h4>
            <span>{date}</span>
          </div>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#fafafa"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-up-right"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <p>{description}</p>

        <ul className="tech-list">
          <span></span>
          {technos.map((techno) => (
            <li>{techno}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
