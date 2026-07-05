import React from "react";
import { projects } from "../data";
import Icon from "./Icons";

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="section-inner">
        <p className="eyebrow">04. Projects</p>
        <h2 className="section-title">Projects that prove it.</h2>
        <p className="section-lead">Real systems, real constraints. Not toy demos.</p>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="card project-card" key={p.title}>
              <div className="project-top">
                <span className="project-icon"><Icon name={p.icon} size={22} /></span>
                <span className={`project-tag tag-${p.tone}`}>{p.tag}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => <span className="pill" key={t}>{t}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noopener" className="project-link">
                View on GitHub <Icon name="arrow" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}