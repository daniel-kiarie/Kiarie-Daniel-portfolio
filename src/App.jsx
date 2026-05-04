import { useState } from "react";
import kiarie from "/pro.jpg";
import menu from "/menu.svg";
import close from "/close.svg";

import "./App.css";

const projects = [
  {
    title: "CarHub",
    description:
      "A full-stack car marketplace where users can browse, filter, and view detailed listings. Built with React and deployed live on Vercel.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://carhub-ten-orpin.vercel.app/",
    github: null,
    isLive: true,
  },
 
  {
    title: "Project Two",
    description:
      "Frontend-focused project with dynamic UI components, state management, and clean user experience design.",
    tech: ["React", "CSS", "JavaScript"],
    live: null,
    github: "https://netflix-landing-page-jade.vercel.app/",
    isLive: false,
  },
];

const skills = [
  "MongoDB", "Express.js", "React", "Node.js",
  "JavaScript", "REST APIs", "Git & GitHub", "CSS / Tailwind",
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* SIDEBAR */}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <button className="sidebar__close" onClick={closeMenu} aria-label="Close menu">
          <img src={close} alt="" />
        </button>
        <div className="sidebar__profile">
          <img src={kiarie} alt="Kiarie Daniel" className="sidebar__avatar" />
          <h2 className="sidebar__name">Kiarie Daniel</h2>
          <p className="sidebar__title">MERN Stack Developer</p>
        </div>
        <nav className="sidebar__nav">
          <ul>
            {["home", "about", "projects", "contact"].map((s) => (
              <li key={s}>
                <a href={`#${s}`} onClick={closeMenu}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar__links">
          <a href="https://github.com/daniel-kiarie" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://x.com/am_Kiarie" target="_blank" rel="noreferrer">X / Twitter</a>
          <a href="https://linkedin.com/in/kiarie-daniel-2a2213230" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/iam_kiarie" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </aside>

      {isOpen && <div className="sidebar__overlay" onClick={closeMenu} />}

      {/* NAVBAR */}
      <header id="home">
        <nav className="navbar">
          <a href="#home" className="nav__brand">Kiarie Daniel</a>
          <ul className="nav__links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="https://github.com/daniel-kiarie" target="_blank" rel="noreferrer">GitHub</a>
            </li>
          </ul>
          <button className="menu-btn" onClick={() => setIsOpen(true)} aria-label="Open menu">
            <img src={menu} alt="" />
          </button>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero__text">
            <span className="hero__tag">Available for hire</span>
            <h1 className="hero__heading">
              Building the web,<br />
              <span className="hero__accent">one stack at a time.</span>
            </h1>
            <p className="hero__sub">
              I'm <strong>Kiarie Daniel Kamau</strong> — a MERN Stack Developer turning
              complex ideas into scalable, high-performing web applications.
            </p>
            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary">View My Work</a>
              <a
                href="https://drive.google.com/file/d/1PJkfLRUk1nmZz7qYk-tZZlPZdmk0K091/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__img-frame">
              <img src={kiarie} alt="Kiarie Daniel" />
            </div>
            <div className="hero__img-dot hero__img-dot--1" />
            <div className="hero__img-dot hero__img-dot--2" />
          </div>
        </section>
      </header>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section__inner">
          <p className="section__label">About</p>
          <h2 className="section__heading">Junior Full Stack Developer</h2>
          <div className="about__grid">
            <p className="about__bio">
              I'm finished my MERN Stack course and am actively looking for junior developer opportunities.
              I enjoy turning complex problems into clean, functional web applications. I care
              about writing maintainable code, building solid APIs, and creating smooth user
              experiences. I'm also exploring how AI tools can speed up development and improve
              code quality.
            </p>
            <div className="skills__grid">
              {skills.map((skill) => (
                <span key={skill} className="skill__pill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="section__inner">
          <p className="section__label">Work</p>
          <h2 className="section__heading">Projects</h2>
          <div className="projects__grid">
            {projects.map((p) => (
              <article key={p.title} className={`project-card ${p.isLive ? "project-card--live" : ""}`}>
                {p.isLive && <span className="live-badge">● Live</span>}
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__tech">
                  {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="project-card__links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
                      View Live ↗
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm">
                      GitHub ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section__inner contact__inner">
          <p className="section__label">Get in touch</p>
          <h2 className="section__heading">Let's work together.</h2>
          <div className="contact__details">
            <a href="mailto:danielkiarie61@gmail.com" className="contact__link">
              danielkiarie61@gmail.com
            </a>
            <a href="tel:+254796147140" className="contact__link">
              +254 796 147 140
            </a>
          </div>
          <div className="contact__socials">
            <a href="https://github.com/daniel-kiarie" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://x.com/am_Kiarie" target="_blank" rel="noreferrer">X / Twitter</a>
            <a href="https://linkedin.com/in/kiarie-daniel-2a2213230" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/iam_kiarie" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Kiarie Daniel</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}