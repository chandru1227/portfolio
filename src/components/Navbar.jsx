import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo">
          {profile.first}
          <span>.</span>
        </a>
        <nav className="nav__links">
          {links.map(([text, href]) => (
            <a key={text} href={href}>{text}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--accent btn--sm">Let's work</a>
      </div>
    </header>
  );
}