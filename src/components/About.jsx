import React from "react";
import profilPic from "../assets/presentation_picture.png";

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

              <a
                className="btn btn-primary"
                target="_blank"
                href="https://calendly.com/equipe-3wa/prise-de-contact-entreprise-eleve?utm_content=Laurent%20Chaitas&utm_campaign=recoyeryaro1KsMR1&utm_source=%2033649789050&month=2024-02"
              >
                réserver un entretien
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
