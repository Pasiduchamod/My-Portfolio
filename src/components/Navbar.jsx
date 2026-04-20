import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";

const Navbar = ({ navOpen }) => {
  const lenis = useLenis();
  const [activeSection, setActiveSection] = useState("#home");
  const activeBox = useRef(null);

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#devops" },
    { label: "Impact", link: "#writing" }, // Merged Writing and Volunteering
    { label: "Contact", link: "#contact" }
  ];

  useEffect(() => {
    const trackedSections = [
      { id: "#home", navId: "#home" },
      { id: "#about", navId: "#about" },
      { id: "#devops", navId: "#devops" },
      { id: "#work", navId: "#devops" },
      { id: "#mobile-apps", navId: "#devops" },
      { id: "#writing", navId: "#writing" },
      { id: "#volunteering", navId: "#writing" },
      { id: "#contact", navId: "#contact" }
    ];

    const sections = trackedSections.map((item) => ({
      el: document.querySelector(item.id),
      navId: item.navId
    }));

    const handleScroll = () => {
      let currentNavId = "#home";

      for (let section of sections) {
        if (section.el && window.scrollY >= section.el.offsetTop - 150) {
          currentNavId = section.navId;
        }
      }

      setActiveSection(currentNavId);
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
          onClick={(e) => {
            e.preventDefault();
            lenis?.scrollTo(link);
          }}
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
