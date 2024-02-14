import React, { useState } from "react";
import rywwLogo from "../assets/ryww_logo.png";
import Interview from "./partials/Interview";

function Header() {
  const [navActive, setNavActive] = useState(false);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const offsetPosition = elementRect - bodyRect - offset;

    window.scrollTo({
      top: offsetPosition,
    });
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav-responsive">
            <a href="#">
              <img id="nav-logo" src={rywwLogo} alt="logo ryww" />
            </a>

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
            <li className="nav-item">
              <a
                onClick={() => (
                  setNavActive(false), handleClick("about-section")
                )}
              >
                à propos
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => (
                  setNavActive(false), handleClick("skill-section")
                )}
              >
                compétences
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => (
                  setNavActive(false), handleClick("project-section")
                )}
              >
                projets
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => (
                  setNavActive(false), handleClick("contact-section")
                )}
              >
                contact
              </a>
            </li>
            <li className="nav-item ">
              <Interview />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
