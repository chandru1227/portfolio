import { useState } from "react";
import { techTicker } from "../data/portfolio";
import { skillIcons, fallbackGlyphs } from "../data/icons";

// Ticker name -> name used in icons.js
const alias = {
  React: "ReactJS",
  "Node.js": "NodeJS",
  Express: "ExpressJS",
};

function TechItem({ name }) {
  const [failed, setFailed] = useState(false);
  const key = alias[name] || name;
  const src = skillIcons[key];

  return (
    <span className="item">
      <span className="logo">
        {src && !failed ? (
          <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <i>{fallbackGlyphs[key] || "•"}</i>
        )}
      </span>
      <span className="t">{name}</span>
      <span className="star">✦</span>
    </span>
  );
}

function Ribbon({ items, className = "", reverse = false }) {
  // list is doubled so the loop never shows a gap
  const loop = [...items, ...items];
  return (
    <div className={`ribbon ${className}`} aria-hidden="true">
      <div className={`track ${reverse ? "track--rev" : ""}`}>
        {loop.map((tech, i) => (
          <TechItem key={i} name={tech} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const reversed = [...techTicker].reverse();
  return (
    <div className="marquee">
      <Ribbon items={techTicker} className="ribbon--dark" />
      <Ribbon items={reversed} className="ribbon--accent" reverse />
    </div>
  );
}