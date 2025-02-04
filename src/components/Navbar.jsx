import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const [activeSection, setActiveSection] = useState("#home");
  const activeBox = useRef(null);

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Contact", link: "#contact" }
  ];

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.link));

    const handleScroll = () => {
      let currentSection = "#home";

      for (let section of sections) {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = `#${section.id}`;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeLink = document.querySelector(`.nav-link[href="${activeSection}"]`);
    if (activeLink && activeBox.current) {
      activeBox.current.style.top = `${activeLink.offsetTop}px`;
      activeBox.current.style.left = `${activeLink.offsetLeft}px`;
      activeBox.current.style.width = `${activeLink.offsetWidth}px`;
      activeBox.current.style.height = `${activeLink.offsetHeight}px`;
    }
  }, [activeSection]);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link }) => (
        <a
          href={link}
          key={link}
          className={`nav-link ${activeSection === link ? "active" : ""}`}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
