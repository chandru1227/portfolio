import Reveal from "./Reveal";
import { journey } from "../data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <Reveal>
          <span className="label"><b>04/</b> Achievements</span>
          <h2 className="h2">Recognition &amp; milestones.</h2>
          <p className="lead">Research, internship, awards and leadership that shaped how I work.</p>
        </Reveal>

        <div className="cards">
          {journey.map((j, i) => (
            <Reveal key={j.title} delay={(i % 4) * 0.08}>
              <article className="card">
                <span className="card__year">{j.year}</span>
                <span className="label">{j.tag}</span>
                <h3>{j.title}</h3>
                <p>{j.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}