import React from "react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <p className="eyebrow">03 · Experience</p>
        <h2 className="section-title">The commit log.</h2>
        <p className="section-lead mono">$ git log --stat --oneline</p>

        <div className="git-log">
          {experience.map((job, i) => (
            <div className="commit" key={job.hash}>
              <div className="commit-rail">
                <span className="commit-dot"></span>
                {i < experience.length - 1 && <span className="commit-line"></span>}
              </div>
              <div className="commit-body card">
                <div className="commit-meta mono">
                  <span className="commit-hash">#{job.hash}</span>
                  <span className="commit-date">{job.date}</span>
                </div>
                <h3 className="commit-title">
                  {job.title} <span className="at">@ {job.company}</span>
                </h3>
                <p className="commit-location">{job.location}</p>
                <ul className="commit-notes">
                  {job.notes.map((n) => <li key={n}>{n}</li>)}
                </ul>
                <div className="commit-stats">
                  {job.tags.map((t) => (
                    <span className={`stat-tag stat-${t.tone}`} key={t.label}>{t.label}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}