import React from "react";
import { skillGroups } from "../data";
import Icon from "./Icons";

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="section-inner">
        <p className="eyebrow">02. Skills</p>
        <h2 className="section-title">Tools I ship with.</h2>
        <p className="section-lead">
          Grouped the way I actually reach for them: languages first, then the frameworks,
          data layers, and practices that turn code into a shipped product.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className={`card skill-card accent-${group.accent}`} key={group.title}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item.name}>
                    <Icon name={item.logo} size={15} />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}