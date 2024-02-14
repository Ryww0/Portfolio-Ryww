import React from "react";
import rywwLogo from "../assets/ryww_logo.png";
import githubLogo from "../assets/socials/github.png";
import linkedinLogo from "../assets/socials/linkedin.png";

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={rywwLogo} alt="Logo Ryww" />
        <span>&copy; Ryww - Chaitas Laurent</span>
      </div>
      <div className="socials-links">
        <a target="_blank" href="https://github.com/Ryww0">
          <img
            src={githubLogo}
            alt="github logo, redirection vers mon github"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/lchaitas">
          <img
            src={linkedinLogo}
            alt="linkedin logo, redirection vers mon linkedin"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
