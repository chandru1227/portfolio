export const profile = {
  first: "Chandru",
  last: "A.",
  role: "Full-Stack Developer",
  location: "Madurai, India",
  email: "chandruarchunan04@gmail.com",
  intro:
    "Computer Science Engineer who builds clean full-stack apps and NLP models. I like turning ideas into software that real people can use.",
  github: "https://github.com/chandru1227",
  linkedin: "https://linkedin.com/in/chandrua",
  leetcode: "https://leetcode.com/u/chandrua22cse",
  resume: "/resume.pdf", // put your PDF in the /public folder
};

export const stats = [
  { value: "8.74", label: "CGPA · B.E. CSE" },
  { value: "94%", label: "Macro F1 · Graph + RoBERTa" },
  { value: "97.1%", label: "Accuracy · Cyberbullying model" },
  { value: "IEEE", label: "Published paper · 2025" },
];

export const techTicker = [
  "Java", "Spring Boot", "React", "Node.js", "Express", "Python", "MongoDB",
  "MySQL", "PostgreSQL", "Tailwind CSS", "Hibernate", "REST APIs", "Git", "DSA",
];

export const about = [
  "I'm a final-year Computer Science student at Kongu Engineering College with a strong interest in full-stack development and applied machine learning.",
  "I build end-to-end systems: React front ends, Spring Boot and Node.js back ends, and SQL/NoSQL databases. I also research NLP models for detecting harmful content online, including a paper published at IEEE IConSCEPT 2025.",
  "I enjoy solving problems, which is why I practise Data Structures and Algorithms regularly on LeetCode.",
];

export const skills = [
  { group: "Languages", items: ["Java", "Python", "JavaScript"] },
  { group: "Frontend", items: ["ReactJS", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend", items: ["Spring Boot", "Spring Data JPA", "Hibernate", "NodeJS", "ExpressJS", "REST APIs"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { group: "Core CS & Tools", items: ["OOP", "DSA", "Git", "GitHub", "Postman", "Vercel", "Render"] },
];

export const education = [
  { school: "Kongu Engineering College, Erode", degree: "B.E. Computer Science and Engineering", detail: "CGPA 8.74", year: "2022 – 2026" },
  { school: "Rm.P.S. Ramiah Nadar Hr. Sec. School, Madurai", degree: "Higher Secondary Certificate (HSC)", detail: "96.83%", year: "2022" },
  { school: "Rm.P.S. Ramiah Nadar Hr. Sec. School, Madurai", degree: "SSLC", detail: "91.2%", year: "2020" },
];

export const projects = [
  {
    title: "Dairy Farm Management System",
    period: "Sep 2026 – Oct 2026",
    stack: ["ReactJS", "Java", "Spring Boot", "MySQL"],
    description:
      "Digitizes livestock, milk production, attendance, salary and sales records. Automates daily operations with centralized record tracking, role-based access and duplicate-entry prevention.",
    hue: 85,
    image: "/projects/dairy.png",
    code: "https://dairy-track-pro-rose.vercel.app/",
  },
  {
    title: "Knowledge Graph-Based Immoral Post Detection",
    period: "2025 – 2026",
    stack: ["RoBERTa", "BiLSTM", "GAT"],
    description:
      "Detects immoral social media posts by combining contextual language models with knowledge graphs. Reached a 94% Macro F1-score with a hybrid graph and RoBERTa model, and classifies post severity.",
    hue: 280,
    image: "/projects/knowledge-graph.png",
    //code: "https://github.com/chandru1227",
  },
  {
    title: "Cyberbullying Detection Using Bystander Modeling",
    period: "Aug 2025 – Nov 2025",
    stack: ["DistilBERT", "BiLSTM"],
    description:
      "Classifies cyberbullying severity by analysing emotional tone and bystander reactions in social media interactions. Achieved 97.1% accuracy and detailed insights into online aggression patterns.",
    hue: 200,
    image: "/projects/cyberbullying.png",
    //code: "https://github.com/chandru1227",
  },
  {
    title: "Textile Management System",
    period: "Feb 2025 – Apr 2025",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "Automates textile inventory tracking and order handling. Real-time notifications reduced manual effort and improved operational efficiency.",
    hue: 25,
    image: "/projects/textile.png",
    code: "https://kumartextiles.vercel.app",
  },
  {
    title: "Social Media Analytics Dashboard",
    period: "Sep 2024 – Nov 2024",
    stack: ["ReactJS", "Flask", "Firebase"],
    description:
      "A real-time YouTube analytics platform that tracks engagement metrics and audience sentiment, enabling data-driven content strategy decisions.",
    hue: 340,
    image: "/projects/analytics.png",
    code: "https://github.com/chandru1227/social-backend",
  },
  {
    title: "Event Management System",
    period: "Feb 2024 – May 2024",
    stack: ["HTML", "CSS", "ExpressJS", "PostgreSQL"],
    description:
      "An online event application for scheduling, registration and participant tracking, simplifying coordination of multiple events while keeping data consistent.",
    hue: 160,
    image: "/projects/event.jpg",
    code: "https://github.com/Arun-Karthik-26/Event_Management_System.git",
  },
];

export const journey = [
  { year: "2025", tag: "Publication", title: "IEEE · IConSCEPT", text: "Contextual Cyberbullying Detection Using Emotion-Enhanced Bystander Modeling." },
  { year: "2024", tag: "Internship", title: "Generative AI Consortium", text: "SystimaNX IT Solutions. Built Python ML models for employee attrition prediction and managed deliverables with GitHub." },
  { year: "IIT Madras", tag: "Award", title: "Best Presenter Team Award", text: "Won 1st prize for the Xenobots presentation." },
  { year: "2022–23", tag: "Award", title: "Academic Excellence Award", text: "Recognised for outstanding performance at Kongu Engineering College." },
  { year: "Certified", tag: "Certification", title: "MongoDB Associate Developer", text: "Node.js track, awarded by MongoDB University." },
  { year: "Certified", tag: "Certification", title: "Prompt Engineering", text: "Generative AI: Prompt Engineering, IBM via Coursera." },
  { year: "2024–25", tag: "Leadership", title: "Head of Newsletter", text: "CSE Association, Kongu Engineering College." },
  { year: "2023–24", tag: "Leadership", title: "Joint Secretary", text: "CSE Association, Kongu Engineering College." },
];