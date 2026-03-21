import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import kiarie from "/pro.jpg";
import full from "/full.jpg";

import menu from "/menu.svg";
import close from "/close.svg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* SIDEBAR */}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <button className="sidebar__close" onClick={() => setIsOpen(false)}>
          <img src={close} alt="Close menu" />
        </button>

        <div className="sidebar__profile">
          <img src={kiarie} alt="Kiarie Daniel" className="sidebar__avatar" />
          <h2 className="sidebar__name">Kiarie Daniel</h2>
          <p className="sidebar__title">MERN Stack Developer</p>
        </div>

        <nav className="sidebar__nav">
          <ul>
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar__links">
          <a
            href="https://github.com/daniel-kiarie"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="https://x.com/am_Kiarie" target="_blank" rel="noreferrer">
            X / Twitter
          </a>
          <a
            href="https://linkedin.com/in/kiarie-daniel-2a2213230"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/iam_kiarie"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </aside>

      {/* Overlay — closes sidebar when clicking outside */}
      {isOpen && (
        <div className="sidebar__overlay" onClick={() => setIsOpen(false)} />
      )}
      <header className="main">
        <div className="head">
          <nav className="navbar">
            <ul className="main_nav">
              <li className="my_name">
                <a href="#home">Kiarie Daniel</a>
              </li>
              <li className="hide_onmobile">
                <a
                  href="https://github.com/daniel-kiarie"
                  target="_blank"
                  rel="nonreferrer"
                >
                  Github
                </a>
              </li>
              <li className="hide_onmobile">
                <a
                  href="https://x.com/am_Kiarie"
                  target="_blank"
                  rel="nonreferrer"
                >
                  X
                </a>
              </li>
              <li className="hide_onmobile">
                <a
                  href="https://linkedin.com/in/kiarie-daniel-2a2213230"
                  target="_blank"
                  rel="nonreferrer"
                >
                  Linked In
                </a>
              </li>
              <li className="hide_onmobile">
                <a
                  href="https://www.instagram.com/iam_kiarie"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <button className="menu-btn" onClick={() => setIsOpen(true)}>
                <img src={menu} alt="Open menu" />
              </button>
            </ul>
          </nav>

          <div className="flex-container">
            <img src={kiarie} alt="Kairie Daniel" />
            <div className="text_container">
              <h1>Hello! Glad you’re here.</h1>
              <p>
                I'm Kiarie Daniel Kamau. I'm a{" "}
                <strong>MERN Stack Developer</strong> and I specialize in
                turning complex ideas into scalable, high-performing web
                applications.
              </p>
              <button>
                {" "}
                <a
                  href="https://x.com/am_Kiarie"
                  target="_blank"
                  rel="nonreferrer"
                >
                  See my building journey on X
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="about" id="home">
        <div className="flex-container">
          <div className="text-container">
            <h2>Junior MERN Stack Developer</h2>
            <p>
              I'm a <strong>MERN Stack Developer</strong> finishing my course and actively
              looking for junior opportunities. I enjoy turning complex problems
              into clean, functional web applications using MongoDB, Express,
              React, and Node.js. I care about writing maintainable code,
              building solid APIs, and creating smooth user experiences. I'm
              also exploring how AI tools can speed up development and improve
              code quality.
            </p>
          </div>
          <img src={full} alt="Full Stack Developer" />
        </div>
      </section>

      {/* DOWNLOAD RESUME */}
      <div className="resume">
        <button>
          <a
            href="https://drive.google.com/file/d/1PJkfLRUk1nmZz7qYk-tZZlPZdmk0K091/view?usp=sharing"
            target="_blank"
            rel="nonreferer"
          >
            Download Resume
          </a>
        </button>
      </div>

      <section id="contact" className="contact">
        <h2>Contact Information</h2>
        <details>
          <p>Email: danielkiarie61@gmail.com</p>
          <p>Call: 0796147140</p>
        </details>
      </section>

      <footer>
        <a href="#home">Kiarie Daniel</a>
        <a href="mailto:danielkiarie61@gmail.com">Contact</a>
      </footer>
    </>
  );
}

export default App;
