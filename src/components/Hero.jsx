import React, { useEffect, useState } from "react";
import { profile, stats } from "../data";
import Icon from "./Icons";

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = profile.typedRoles[roleIndex];
    const speed = deleting ? 30 : 55;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % profile.typedRoles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-inner">
        <div className="hero-text">
          <span className="pill pill-live">
            <span className="live-dot"></span> {profile.availability}
          </span>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero-role mono">
            {text}
            <span className="caret">|</span>
          </p>

          <p className="hero-sub">{profile.summary}</p>

          <div className="hero-stats">
            {stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <span className="hero-stat-num gradient-text">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">See the log</a>
            <a href="#contact" className="btn btn-ghost">Let's talk</a>
            <a href={profile.github} target="_blank" rel="noopener" className="btn btn-icon" aria-label="GitHub">
              <Icon name="github" size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="btn btn-icon" aria-label="LinkedIn">
              <Icon name="linkedin" size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          {/* REMOVED PROFILE IMAGE */}
          <div className="avatar-ring">
            <div className="avatar-inner">
              {/* Profile image removed */}
            </div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-gold"></span>
              <span className="dot dot-blue"></span>
              <span className="terminal-title mono">nazim@toronto:~</span>
            </div>
            <div className="terminal-body mono">
              <pre><code>
<span className="tk-com">// profile.json</span>{"\n"}
<span className="tk-brace">{"{"}</span>{"\n"}
{"  "}<span className="tk-key">"name"</span>: <span className="tk-str">"Nazim Gafarli"</span>,{"\n"}
{"  "}<span className="tk-key">"title"</span>: <span className="tk-str">"Full Stack Engineer"</span>,{"\n"}
{"  "}<span className="tk-key">"location"</span>: <span className="tk-str">"Toronto, ON"</span>,{"\n"}
{"  "}<span className="tk-key">"stack"</span>: <span className="tk-brack">[</span><span className="tk-str">"Java"</span>, <span className="tk-str">"Spring"</span>, <span className="tk-str">"React"</span><span className="tk-brack">]</span>,{"\n"}
{"  "}<span className="tk-key">"openToWork"</span>: <span className="tk-num">true</span>{"\n"}
<span className="tk-brace">{"}"}</span>;
              </code></pre>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll down"><span></span></a>
    </header>
  );
}