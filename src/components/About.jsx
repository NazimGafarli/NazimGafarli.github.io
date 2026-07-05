import React from "react";
import { profile, aboutCards } from "../data";
import Icon from "./Icons";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner about-grid">
        <div>
          <p className="eyebrow">01. About</p>
          <h2 className="section-title">Engineer at heart,<br />shipper by habit.</h2>
          <p className="about-text">
            Hey, I'm <strong>{profile.name}</strong>, a full stack software engineer based in{" "}
            {profile.location}. I've delivered cloud-native solutions across fintech and
            automotive, working on systems where correctness and performance both matter:
            payment integrations, supply-chain databases, and enterprise APIs used every day
            by real teams.
          </p>
          <p className="about-text">
            My core strength is the Java ecosystem: Spring Boot, Hibernate, JPA, paired with
            modern front-end frameworks like React, Angular, and Node.js. I care about clean
            code, measurable performance gains, and Agile teams that actually ship.
          </p>
          <p className="about-text about-cta">
            <strong>Looking for full-stack and backend-heavy roles</strong> where I can own
            problems end-to-end.
          </p>
        </div>

        <div className="about-cards">
          {aboutCards.map((c) => (
            <div className="card about-card" key={c.title}>
              <span className="about-card-icon"><Icon name={c.icon} size={20} /></span>
              <h3>{c.title}</h3>
              <p>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}