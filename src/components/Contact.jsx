import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <span className="label"><b>05/</b> Contact</span>
          <h2 className="h2">
            Let's work <em>together.</em>
          </h2>
          <p className="lead">
            Looking for a fresher developer for your team? I'm open to full-time roles and internships, so let's talk.
          </p>
          <div className="mail">
            <span className="label">Drop me a line</span>
            <strong>{profile.email}</strong>
            <button className="btn btn--accent" onClick={copyEmail}>
              {copied ? "Copied ✓" : "Copy address"}
            </button>
          </div>
          <div className="socials">
            <a className="btn btn--sm" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="btn btn--sm" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="btn btn--sm" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode ↗</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}