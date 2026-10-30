import { useState } from "react";
import Reveal from "./Reveal";
import { about, skills, education } from "../data/portfolio";
import { skillIcons, fallbackGlyphs } from "../data/icons";

function SkillChip({ name }) {
  const [failed, setFailed] = useState(false);
  const src = skillIcons[name];

  return (
    <span className="chip chip--icon">
      {src && !failed ? (
        <img src={src} alt="" width="18" height="18" loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <i className="glyph">{fallbackGlyphs[name] || "•"}</i>
      )}
      {name}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about">
          <Reveal>
            <span className="label"><b>02/</b> About</span>
            <h2 className="h2">Building with purpose, one commit at a time.</h2>
            <div className="about__text">
              {about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <span className="label">Tech stack</span>
            {skills.map((s) => (
              <div className="skill" key={s.group}>
                <span className="label">{s.group}</span>
                <div className="chips">
                  {s.items.map((item) => <SkillChip key={item} name={item} />)}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="edu">
          <span className="label"><b>/</b> Education</span>
          {education.map((e) => (
            <div className="edu__item" key={e.degree + e.year}>
              <div>
                <strong>{e.degree}</strong>
                <small>{e.school}</small>
              </div>
              <div className="right">
                <strong>{e.year}</strong>
                <small>{e.detail}</small>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}