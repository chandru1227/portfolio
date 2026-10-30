const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const d = (folder) => `${BASE}/${folder}/${folder}-original.svg`;

// Skill name -> logo URL
export const skillIcons = {
  Java: d("java"),
  Python: d("python"),
  JavaScript: d("javascript"),
  ReactJS: d("react"),
  HTML5: d("html5"),
  CSS3: d("css3"),
  "Tailwind CSS": d("tailwindcss"),
  "Spring Boot": d("spring"),
  "Spring Data JPA": d("spring"),
  Hibernate: d("hibernate"),
  NodeJS: d("nodejs"),
  ExpressJS: d("express"),
  MySQL: d("mysql"),
  PostgreSQL: d("postgresql"),
  MongoDB: d("mongodb"),
  Git: d("git"),
  GitHub: d("github"),
  Postman: d("postman"),
  Vercel: d("vercel"),
};

// Skills with no official logo get a symbol instead
export const fallbackGlyphs = {
  "REST APIs": "⇄",
  OOP: "◈",
  DSA: "⌘",
  Render: "▲",
};