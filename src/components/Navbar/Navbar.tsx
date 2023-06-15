import { useState } from "react";
import { RenderNavLink } from ".";
import hamburguerIcon from "@/assets/Icons/icon-menu.svg";
import closeHamburguerIcon from "@/assets/Icons/x.svg";
import linkedinIcon from "@/assets/Icons/linkedin.svg";
import instagramIcon from "@/assets/Icons/instagram.svg";

const Navbar = () => {
  const [navClass, setNavClass] = useState("navigation-menu expanded");

  const toggleNav = () => {
    setNavClass(
      navClass === "navigation-menu"
        ? "navigation-menu expanded"
        : "navigation-menu"
    );
  };

  return (
    <>
      <nav className="navigation">
        <button className="hamburguer-icon" onClick={toggleNav}>
          {navClass === "navigation-menu" ? (
            <img
              src={hamburguerIcon}
              alt="hamburguer icon"
              className="hamburguer-icon"
            />
          ) : (
            <img
              src={closeHamburguerIcon}
              alt="hamburguer icon close"
              className="hamburguer-icon-close"
            />
          )}
        </button>

        <div className={navClass}>
          <ul>
            <RenderNavLink
              to="/services"
              label="Services"
              toggleNav={toggleNav}
            />
            <RenderNavLink to="/about" label="About" toggleNav={toggleNav} />
            <RenderNavLink to="/cases" label="Cases" toggleNav={toggleNav} />
            <RenderNavLink to="/jobs" label="Jobs" toggleNav={toggleNav} />
            <RenderNavLink
              to="/contact"
              label="Contact"
              toggleNav={toggleNav}
            />
            <div className="social-media-container">
              <li>
                <a
                  href="https://www.linkedin.com/in/ache-uno-design-16988a205/"
                  className="social-media"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinIcon} alt="linkedin icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ache1.design/"
                  className="social-media"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramIcon} alt="instagram icon" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
