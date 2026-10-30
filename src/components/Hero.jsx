import { useState } from "react";
import { motion } from "framer-motion";
import { profile, stats } from "../data/portfolio";

const PHOTO = "/profile.jpg"; // file inside the /public folder
const ease = [0.22, 1, 0.36, 1];

const fade = (delay) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

// One letter that slides up from behind a mask
function Letter({ char, i, className = "" }) {
  return (
    <span className={`ch ${className}`}>
      <motion.span
        style={{ display: "inline-block" }}
        initial={{ y: "110%", rotate: 8 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 + i * 0.06, ease }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const first = profile.first.split("");
  const last = profile.last.replace(".", ""); // "A." -> "A"

  return (
    <section id="home" className="hero">
      <div className="hero__orb" />
      <div className="hero__orb hero__orb--2" />

      <div className="container">
        <motion.div className="hero__top" {...fade(0.1)}>
          <span className="label"><b>01/</b> From {profile.location} with love</span>
          <span className="badge"><i /> Open for work</span>
        </motion.div>

        {/* Name on a single line */}
        <h1 className="hero__name" aria-label={`${profile.first} ${last}`}>
          {first.map((c, i) => <Letter key={i} char={c} i={i} />)}
          <span className="gap" />
          <Letter char={last} i={first.length + 1} className="accent" />
        </h1>

        <div className="hero__grid">
          <div className="hero__copy">
            <motion.p className="hero__role" {...fade(0.5)}>
              {profile.role} <em>/</em> ML Enthusiast
            </motion.p>
            <motion.p className="lead" {...fade(0.6)}>{profile.intro}</motion.p>
            <motion.div className="hero__actions" {...fade(0.7)}>
              <a href="#work" className="btn btn--accent">Selected work <span className="arrow">↓</span></a>
              <a href={profile.resume} download="Chandru_A_Resume.pdf" className="btn">
  Resume <span className="arrow">↓</span>
</a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="photo"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
          >
            <div className="photo__frame">
              {imgOk ? (
                <img src={PHOTO} alt={`${profile.first} ${last}`} onError={() => setImgOk(false)} />
              ) : (
                <div className="photo__fallback">CA</div>
              )}
            </div>

            {/* Rotating text ring */}
            <svg className="photo__ring" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="ringPath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <circle cx="100" cy="100" r="100" fill="var(--bg)" />
              <text fill="currentColor" fontSize="13" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
                <textPath href="#ringPath" textLength="480" lengthAdjust="spacing">
                  OPEN FOR WORK • FULL-STACK DEV • 
                </textPath>
              </text>
              <text x="100" y="116" textAnchor="middle" fontSize="44" fill="var(--accent)">✦</text>
            </svg>

            <span className="photo__chip chip--1">React</span>
            <span className="photo__chip chip--2">Spring Boot</span>
            <span className="photo__chip chip--3">NLP</span>
          </motion.div>
        </div>

        <motion.div className="stats" {...fade(0.9)}>
          {stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}