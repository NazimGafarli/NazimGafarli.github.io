import React from "react";

// A small hand-drawn icon set. Every icon is an inline SVG so nothing
// depends on external logo files — easy to recolor via currentColor.

const wrap = (children, size = 18) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);

const glyphs = {
  java: (
    <>
      <path d="M8 15c3 2 8 2 8-1-2 1-6 1-8-1z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M9 4c2 2-2 3 0 5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M7 17c0 1.5 4 2.4 8 1" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </>
  ),
  typescript: <path d="M5 5h14v14H5V5zm3.5 9.5h3M10 14.5v4M13.5 18.5c1.5.6 3 0 3-1.3 0-1.7-3-1.4-3-3 0-1 1-1.6 2.5-1.2" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  javascript: <path d="M5 5h14v14H5V5zM9 14v2.5c0 1-1.6 1-2 .3M13.5 12c-1.6-.6-3 0-3 1.2 0 1.6 3 1.3 3 3 0 1-1.4 1.6-3 1" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  python: <path d="M9 4h4a2 2 0 0 1 2 2v3H9a2 2 0 0 0-2 2v2M15 20h-4a2 2 0 0 1-2-2v-3h6a2 2 0 0 0 2-2V11" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  csharp: <path d="M9 7 4 12l5 5M15 7l5 5-5 5M13 5l-2 14" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  database: <path d="M12 5c3.9 0 7 1 7 2.3S15.9 9.5 12 9.5 5 8.5 5 7.3 8.1 5 12 5zM5 7.3V17c0 1.3 3.1 2.3 7 2.3s7-1 7-2.3V7.3M5 12c0 1.3 3.1 2.3 7 2.3s7-1 7-2.3" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  spring: <path d="M12 4a8 8 0 1 0 6 13c-3 0-4-1.5-4-4 3 1 6-1 6-4.5A8 8 0 0 0 12 4z" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  dotnet: (
    <>
      <circle cx="7" cy="16" r="1.4" fill="currentColor" />
      <circle cx="12" cy="16" r="1.4" fill="currentColor" />
      <path d="M15 12v8M19 12l-2 4 2 4" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </>
  ),
  node: <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3z" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  graphql: <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3zM12 3v18M4 7.5l16 9M20 7.5L4 16.5" stroke="currentColor" strokeWidth="1.2" fill="none" />,
  api: <path d="M8 9H5v6h3M16 9h3v6h-3M9 6v12M15 6v12" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  react: (
    <>
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
    </>
  ),
  angular: <path d="M12 3l8 3-1.2 11L12 21l-6.8-4L4 6l8-3z M8.5 16 12 7l3.5 9M9.6 13.5h4.8" stroke="currentColor" strokeWidth="1.3" fill="none" />,
  nextjs: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M9 8v8M9 8l6 8V8" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </>
  ),
  redux: (
    <>
      <ellipse cx="12" cy="15" rx="6" ry="3" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="7" cy="8" r="1.6" fill="currentColor" />
      <circle cx="17" cy="8" r="1.6" fill="currentColor" />
      <circle cx="12" cy="5" r="1.6" fill="currentColor" />
    </>
  ),
  tailwind: <path d="M5 9c1.5-4 5-4 7-1.5 2 2.5 3.5 2.5 5-1C15.5 10.5 12 10.5 10 8c-2-2.5-3.5-2.5-5 1zM7 15c1.5-4 5-4 7-1.5 2 2.5 3.5 2.5 5-1-1.5 4-5 4-7 1.5-2-2.5-3.5-2.5-5 1z" stroke="currentColor" strokeWidth="1.2" fill="none" />,
  postgres: <path d="M6 5c5-2 12 0 12 7s-4 9-8 9c-3 0-4-2-4-4M9 21c-2-3-3-6-2-11" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  mongo: <path d="M12 3c3 4 4 8 2 13-1 2.5-2 3.5-2 5-1.5-1.5-2-2.5-2-5-1-4.5 0-9 2-13z" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  aws: <path d="M5 15c2 2 12 2 14 0M8 12h8M9 8l3-2 3 2v6l-3 2-3-2V8z" stroke="currentColor" strokeWidth="1.3" fill="none" />,
  azure: <path d="M9 5h5l-6 11h9L11 20 4 16l5-11z" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  gcp: <path d="M8 16a4 4 0 1 1 1-8 5 5 0 0 1 9 1.5 3.5 3.5 0 0 1-1 6.9H8z" stroke="currentColor" strokeWidth="1.3" fill="none" />,
  redis: <path d="M4 12l8-3 8 3-8 3-8-3zM4 16l8 3 8-3M4 8l8 3 8-3" stroke="currentColor" strokeWidth="1.3" fill="none" />,
  cicd: <path d="M6 6a3 3 0 1 0 0 6h9a3 3 0 1 1 0 6M6 6v6" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  agile: <path d="M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5M15 4v4h-4M9 20v-4h4" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  junit: <path d="M8 4v6a4 4 0 0 0 8 0V4M6 20h12" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  jest: <path d="M12 3v4M12 17v4M4.5 7.5 8 9.5M16 14.5l3.5 2M4.5 16.5 8 14.5M16 9.5l3.5-2" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  git: (
    <>
      <circle cx="7" cy="6" r="1.7" fill="currentColor" />
      <circle cx="7" cy="18" r="1.7" fill="currentColor" />
      <circle cx="17" cy="12" r="1.7" fill="currentColor" />
      <path d="M7 7.7V16.3M7 8c3 0 5 1.5 8 3.3" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </>
  ),
  openai: <path d="M12 4l7 4v8l-7 4-7-4V8l7-4z M12 4v16M5 8l7 4 7-4" stroke="currentColor" strokeWidth="1.2" fill="none" />,
  prompt: <path d="M5 6h14v9H9l-4 4V6z" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  ai: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M18 6l-2 2M6 18l2-2M18 18l-2-2" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  grad: <path d="M12 4 3 8l9 4 9-4-9-4zM7 10v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M12 3v2.2M12 18.8V21M4.9 7l1.9 1.1M17.2 15.9l1.9 1.1M3 12h2.2M18.8 12H21M4.9 17l1.9-1.1M17.2 8.1l1.9-1.1" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  trophy: <path d="M7 4h10v3a5 5 0 0 1-10 0V4zM17 5h2a2 2 0 0 1-2 4M7 5H5a2 2 0 0 0 2 4M9 14v2h6v-2M8 20h8" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M20 20H4" stroke="currentColor" strokeWidth="1.5" fill="none" />,
  cert: (
    <>
      <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M9 13.5 8 20l4-2 4 2-1-6.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </>
  ),
  bank: <path d="M4 10 12 4l8 6M5 10v9M19 10v9M9 10v9M15 10v9M3 19h18" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  pipeline: <path d="M4 7h6v6H4V7zM14 11h6v6h-6v-6zM7 13v3a2 2 0 0 0 2 2h5" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  mail: <path d="M4 6h16v12H4V6zm0 0 8 7 8-7" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  phone: <path d="M6 4h4l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v4a1 1 0 0 1-1 1c-8 0-14-6-14-14a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  pin: <path d="M12 21s7-6.5 7-11.5A7 7 0 1 0 5 9.5C5 14.5 12 21 12 21z M12 11a1.8 1.8 0 1 0 0-3.6A1.8 1.8 0 0 0 12 11z" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  github: <path d="M12 3a9 9 0 0 0-2.8 17.6c.4.1.6-.2.6-.4v-1.7c-2.6.5-3.1-1.1-3.1-1.1-.4-1-1-1.3-1-1.3-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.4-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9 1-2.5-.1-.2-.5-1.2.1-2.5 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .6 1.3.2 2.3.1 2.5.6.6 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.9.6 1.8v2.6c0 .2.2.5.6.4A9 9 0 0 0 12 3z" fill="currentColor" />,
  linkedin: <path d="M5 5h1.9v14H5V5zm.95-3a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM10 9.6h1.9v1.6c.5-1 1.6-1.8 3.2-1.8 3 0 3.5 1.9 3.5 4.4V19h-2v-4.6c0-1.1 0-2.6-1.7-2.6s-1.9 1.2-1.9 2.5V19H10V9.6z" fill="currentColor" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" fill="none" />,
  code: <path d="M9 6 3 12l6 6M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" fill="none" />,
};

export default function Icon({ name, size = 18, className = "" }) {
  const glyph = glyphs[name] || glyphs.code;
  return (
    <span className={`icon ${className}`} style={{ display: "inline-flex" }}>
      {wrap(glyph, size)}
    </span>
  );
}