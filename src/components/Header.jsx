import React, { useState } from "react";
import rywwLogo from "../assets/ryww_logo.png";

function Header() {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className="nav-responsive">
            <img id="nav-logo" src={rywwLogo} alt="logo ryww" />

            <div
              className="menu-burger"
              onClick={() => setNavActive(!navActive)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={`nav-menu ${navActive && "active"}`}>
            <li className="nav-item">à propos</li>
            <li className="nav-item">compétences</li>
            <li className="nav-item">projets</li>
            <li className="nav-item">contact</li>
            <li className="nav-item btn btn-primary">
              <a
                target="_blank"
                href="https://calendly.com/equipe-3wa/prise-de-contact-entreprise-eleve?utm_content=Laurent%20Chaitas&utm_campaign=recoyeryaro1KsMR1&utm_source=%2033649789050&month=2024-02"
              >
                réserver un entretien
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
