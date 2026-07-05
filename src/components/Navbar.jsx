import React, { useState, useEffect } from "react";
import logo from "../assets/NazimGafarliLogo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <img 
            src={logo} 
            alt="Nazim Gafarli" 
            className="nav-logo-img"
            style={{
              height: "40px",
              width: "auto",
              display: "block",
              maxWidth: "120px"
            }}
          />
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
        <button className="nav-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}