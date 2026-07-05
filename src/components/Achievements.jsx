import React from "react";
import { achievements } from "../data";
import Icon from "./Icons";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="section-inner">
        <p className="eyebrow">05 · Achievements</p>
        <h2 className="section-title">Education & certifications.</h2>

        <div className="achievements-grid">
          {achievements.map((a) => (
            <div className="card ach-card" key={a.title}>
              <span className="ach-icon"><Icon name={a.icon} size={22} /></span>
              <h3>{a.title}</h3>
              <p className="ach-org">{a.org}</p>
              <p className="ach-desc">{a.desc}</p>
              <span className="ach-date mono">{a.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}