import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

// Shows the screenshot, or a gradient card if there is no image
function ProjectVisual({ project, index }) {
  const [failed, setFailed] = useState(false);
  const number = String(index + 1).padStart(2, "0");

  if (!project.image || failed) {
    return (
      <div
        className="work__visual"
        style={{
          background: `linear-gradient(135deg, hsl(${project.hue} 85% 55%), hsl(${project.hue + 40} 70% 14%))`,
        }}
      >
        {number}
      </div>
    );
  }

  return (
    <a
      href={project.image}
      target="_blank"
      rel="noreferrer"
      className="shot"
      title="Click to view full size"
    >
      <div className="shot__bar">
        <span /><span /><span />
        <em>{project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.app</em>
      </div>
      <div className="shot__body">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
        <span className="shot__tag">View ↗</span>
      </div>
    </a>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal>
          <span className="label"><b>03/</b> Selected work</span>
          <h2 className="h2">Projects that solve real problems.</h2>
          <p className="lead">
            From farm record systems to NLP research. Hover or tap a project to explore it.
          </p>
        </Reveal>

        <div className="work">
          <ul className="work__list">
            {projects.map((proj, i) => (
              <li key={proj.title}>
                <button
                  className={i === active ? "active" : ""}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {proj.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="work__panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectVisual project={p} index={active} />

                <div className="work__meta">
                  <span className="label">
                    <b>{String(active + 1).padStart(2, "0")}</b> / {String(projects.length).padStart(2, "0")}
                  </span>
                  <span className="label">{p.period}</span>
                </div>
                <h3>{p.title}</h3>
                <div className="chips">
                  {p.stack.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
                <p>{p.description}</p>
                <a href={p.code} target="_blank" rel="noreferrer" className="btn btn--sm">
                  View code <span className="arrow">↗</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}