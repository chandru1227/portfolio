import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <small>© {new Date().getFullYear()} {profile.first} {profile.last} · Designed &amp; built by me</small>
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#home" className="btn btn--sm">Back to top ↑</a>
      </div>
    </footer>
  );
}