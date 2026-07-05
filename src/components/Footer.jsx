import React from "react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <strong>{profile.name}</strong>. Built with React & shipped on GitHub Pages. ·{" "}
        <a href={profile.github} target="_blank" rel="noopener">GitHub</a> ·{" "}
        <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a> ·{" "}
        <a href={`mailto:${profile.email}`}>Email</a>
      </p>
    </footer>
  );
}