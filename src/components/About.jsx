import React from "react";
import profilPic from "../assets/presentation_picture.png";
import Interview from "./partials/Interview";

function About() {
  return (
    <>
      <div className="section" id="about-section">
        <div className="container">
          <img src={profilPic} alt="photo de présentation" />

          <div id="about-infos">
            <h3>chaitas laurent</h3>
            <h1>mon portfolio</h1>
            <p>
              Je suis actuellement en recherche d’une alternance dans le cadre
              d’une formation de Concepteur Développeur d’Applications.
            </p>
            <div className="about-links">
              <a className="btn btn-secondary" target="_blank" href="/cv.pdf">
                CV
              </a>

              <Interview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
