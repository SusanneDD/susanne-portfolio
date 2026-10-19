import { CSSProperties, MouseEvent, useEffect, useState } from "react";

const projects = [
  {
    name: "MovieProject",
    description:
      "Responsiv filmwebbplats där användaren kan utforska filmer och interagera med dynamiskt innehåll. Fokus på API-integration, användarvänlig design och responsiv layout.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    demo: "https://fe24-js1-slutprojekt-susanne-dahesh.netlify.app/#now-playing",
    url: "fe24-js1-slutprojekt.netlify.app",
    previewType: "movie",
    rank: "S-RANK",
    category: "API",
    highlight: "Dynamiskt API-flöde",
  },
  {
    name: "WeatherFinder",
    description:
      "Responsiv väderapplikation som hämtar aktuell väderdata via API. Byggd med fokus på tydlig informationspresentation, användarvänlighet och dynamiskt innehåll.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    demo: "https://susannedd.github.io/fe24-js1-grit-Susanne-Dahesh/",
    url: "susannedd.github.io/weather",
    previewType: "weather",
    rank: "A-RANK",
    category: "API",
    highlight: "Data som blir användbar",
  },
  {
    name: "Message Board",
    description:
      "Interaktiv webbapplikation där användare kan skapa och hantera meddelanden. Fokus på frontendlogik, användarinteraktion och ett tydligt responsivt gränssnitt.",
    tech: ["JavaScript", "Frontend Logic", "HTML", "CSS"],
    demo: "https://clinquant-cocada-c9cf61.netlify.app/",
    url: "messageboard.netlify.app",
    previewType: "message",
    rank: "A-RANK",
    category: "Interaktion",
    highlight: "Interaktiv frontendlogik",
  },
];
const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "REST API",
  "Node.js",
  "MySQL",
  "Git & GitHub",
  "UI/UX",
  "Responsive Design",
];
const terminalMessages = [
  "Design system synkroniserat",
  "Responsivitet kontrollerad",
  "Ny frontendutmaning söks",
];
const navigationItems = [
  { label: "Om mig", id: "about" },
  { label: "Projekt", id: "projects" },
  { label: "Erfarenhet", id: "experience" },
  { label: "Kontakt", id: "contact" },
];
const projectFilters = ["Alla", "API", "Interaktion"];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHudExpanded, setIsHudExpanded] = useState(false);
  const [isPowerMode, setIsPowerMode] = useState(false);
  const [terminalMessageIndex, setTerminalMessageIndex] = useState(0);
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [activeSection, setActiveSection] = useState("top");
  const [activeProjectFilter, setActiveProjectFilter] = useState("Alla");
  const [showcaseProject, setShowcaseProject] = useState<
    (typeof projects)[number] | null
  >(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0,
      );
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  useEffect(() => {
    if (!showcaseProject) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowcaseProject(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showcaseProject]);

  useEffect(() => {
    const sectionElements = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTerminalMessageIndex(
        (currentIndex) => (currentIndex + 1) % terminalMessages.length,
      );
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("Susanne.Dahesh420@Hotmail.com");
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }
  };
  const handleCardMovement = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty("--rotate-x", `${-y * 5}deg`);
    card.style.setProperty("--rotate-y", `${x * 5}deg`);
  };
  const resetCardMovement = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--rotate-x", "0deg");
    event.currentTarget.style.setProperty("--rotate-y", "0deg");
  };
  const visibleProjects = projects.filter(
    (project) =>
      activeProjectFilter === "Alla" ||
      project.category === activeProjectFilter,
  );

  return (
    <div className={isPowerMode ? "app power-mode" : "app"}>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />
      <header className="site-header">
        <a className="brand" href="#top">
          SD
        </a>
        <nav>
          {navigationItems.map((item) => (
            <a
              className={activeSection === item.id ? "is-active" : ""}
              href={`#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="power-mode-button"
          type="button"
          onClick={() => setIsPowerMode((enabled) => !enabled)}
          aria-pressed={isPowerMode}
        >
          <span aria-hidden="true">✦</span>
          {isPowerMode ? "Normal mode" : "Power mode"}
        </button>
      </header>
      <main id="top">
        <section className="hero section">
          <div className="sakura-field" aria-hidden="true">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Examinerad frontendutvecklare · Helsingborg
            </p>
            <h1 className="hero-title">
              Jag förvandlar idéer till snabba, intuitiva och genomtänkta{" "}
              <span>webbupplevelser.</span>
            </h1>
            <p className="hero-text">
              Frontend Developer med fokus på React, TypeScript, JavaScript och
              UI/UX. Jag har praktisk erfarenhet från två LIA-perioder och är
              tillgänglig för start omgående.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Se mina projekt
              </a>
              <a
                className="button secondary"
                href="mailto:Susanne.Dahesh420@Hotmail.com"
              >
                Kontakta mig
              </a>
            </div>
            <div className="quick-links">
              <a
                href="https://github.com/SusanneDD"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <span>Helsingborg · B-körkort</span>
            </div>
            <div className="hero-achievement">
              <span className="achievement-icon" aria-hidden="true">
                01
              </span>
              <span>
                <strong>Quest unlocked:</strong> Redo för nästa
                frontenduppdrag.
              </span>
            </div>
            <div className="build-console" aria-live="polite">
              <div className="console-topline">
                <span>
                  <i aria-hidden="true" /> LIVE BUILD CONSOLE
                </span>
                <span>v1.0</span>
              </div>
              <p>
                <span className="console-prompt" aria-hidden="true">
                  &gt;_
                </span>
                {terminalMessages[terminalMessageIndex]}
              </p>
            </div>
          </div>
          <div className="profile-card">
            <button
              className={`profile-photo ${isHudExpanded ? "is-expanded" : ""}`}
              type="button"
              onClick={() => setIsHudExpanded((expanded) => !expanded)}
              aria-expanded={isHudExpanded}
              aria-label="Visa eller dölj utvecklarstatus"
            >
              <img
                src="/profile-new.jpg"
                alt="Susanne Dahesh profilbild"
              />
              <span className="photo-frame photo-frame-one" aria-hidden="true" />
              <span className="photo-frame photo-frame-two" aria-hidden="true" />
              <span className="photo-label" aria-hidden="true">
                SD_01
              </span>
            </button>
            <div className={`developer-hud ${isHudExpanded ? "is-open" : ""}`}>
              <div className="hud-heading">
                <span>DEVELOPER STATUS</span>
                <span>ONLINE</span>
              </div>
              <div className="hud-stat">
                <span>React / TypeScript</span>
                <strong>92%</strong>
              </div>
              <div className="hud-meter" aria-hidden="true">
                <span />
              </div>
              <p className="hud-hint">Klicka på bilden för statusdata</p>
            </div>
            <p>Frontendutvecklare · Helsingborg</p>
          </div>
        </section>
        <section id="about" className="section split-section">
          <div>
            <p className="section-kicker">Om mig</p>
            <h2>Teknik, design och leveransfokus i samma profil.</h2>
          </div>
          <div className="about-copy">
            <p>
              Jag är examinerad frontendutvecklare med praktisk erfarenhet från
              två LIA-perioder i företagsmiljö. Jag utvecklar moderna och
              responsiva webbapplikationer med React, TypeScript, JavaScript,
              HTML/CSS och REST API:er.
            </p>
            <p>
              Jag kombinerar tekniskt intresse med fokus på UI/UX och
              användarvänlighet. Med över åtta års arbetslivserfarenhet är jag
              van att ta ansvar, samarbeta och leverera med hög kvalitet även i
              högt tempo.
            </p>
          </div>
        </section>
        <section className="section skills-section">
          <p className="section-kicker">Teknisk kompetens</p>
          <h2>En modern verktygslåda för digitala upplevelser.</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <div className="skill-radar" aria-label="Styrkor inom frontendutveckling">
            <div className="radar-copy">
              <span className="section-kicker">Nuvarande fokus</span>
              <h3>Bygger nästa nivå av digitala upplevelser.</h3>
              <p>
                Jag utvecklar mitt hantverk genom rena komponenter, genomtänkt
                design och lösningar som fungerar för riktiga användare.
              </p>
            </div>
            <div className="radar-chart" aria-hidden="true">
              <span className="radar-core">UI/UX</span>
              <span className="radar-node node-react">React</span>
              <span className="radar-node node-code">Code</span>
              <span className="radar-node node-api">API</span>
            </div>
          </div>
        </section>
        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Utvalda projekt</p>
              <h2>Projekt som visar hur jag bygger för riktiga användare.</h2>
            </div>
            <a
              href="https://github.com/SusanneDD"
              target="_blank"
              rel="noreferrer"
            >
              Se all kod på GitHub ↗
            </a>
          </div>
          <div className="project-filters" aria-label="Filtrera projekt">
            {projectFilters.map((filter) => (
              <button
                className={activeProjectFilter === filter ? "is-active" : ""}
                type="button"
                key={filter}
                onClick={() => setActiveProjectFilter(filter)}
                aria-pressed={activeProjectFilter === filter}
              >
                {filter === "Alla" ? "Alla projekt" : filter}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {visibleProjects.map((p) => {
              const i = projects.indexOf(p);
              return (
              <article
                className={`project-card project-${i + 1}`}
                key={p.name}
                onMouseMove={handleCardMovement}
                onMouseLeave={resetCardMovement}
                style={
                  {
                    "--rotate-x": "0deg",
                    "--rotate-y": "0deg",
                  } as CSSProperties
                }
              >
                <div className={`project-visual visual-${i + 1}`}>
                  <span className="project-rank">{p.rank}</span>
                  <div className="project-visual-meta">
                    <span>LIVE CASE STUDY</span>
                    <span className="visual-status">
                      <i aria-hidden="true" /> ACTIVE
                    </span>
                  </div>
                  <span className="project-orbit orbit-one" aria-hidden="true" />
                  <span className="project-orbit orbit-two" aria-hidden="true" />
                  <div className="browser-mockup">
                    <div className="browser-bar">
                      <div className="browser-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                      </div>
                      <div className="browser-url">{p.url}</div>
                      <span className="scroll-hint">Rulla ↕</span>
                    </div>
                    <div className="browser-viewport">
                      <iframe
                        className="project-live-preview"
                        src={p.demo}
                        title={`Liveförhandsvisning av ${p.name}`}
                        loading="lazy"
                        tabIndex={-1}
                        aria-hidden="true"
                      />
                      <div className="project-screen-content">
                        {p.previewType === "movie" && (
                          <div className="mockup-page mockup-movie">
                            <div className="mock-nav">
                              🎬 <strong>MovieApp</strong> <span>Hem</span>{" "}
                              <span>Bio</span>
                            </div>
                            <div className="mock-hero">
                              <span className="badge">TRENDANDE</span>
                              <h4>DUNE: PART TWO</h4>
                              <p>9.2 ★ · Action / Sci-Fi</p>
                              <div className="mock-btn">▶ Spela trailer</div>
                            </div>
                            <div className="mock-section-title">
                              Nu på bio 🍿
                            </div>
                            <div className="mock-grid">
                              <div className="mock-card">
                                <div className="poster poster-1">
                                  <span>Oppenheimer</span>
                                </div>
                                <div className="card-info">
                                  <span>8.9 ★</span>
                                </div>
                              </div>
                              <div className="mock-card">
                                <div className="poster poster-2">
                                  <span>Interstellar</span>
                                </div>
                                <div className="card-info">
                                  <span>8.7 ★</span>
                                </div>
                              </div>
                              <div className="mock-card">
                                <div className="poster poster-3">
                                  <span>The Batman</span>
                                </div>
                                <div className="card-info">
                                  <span>7.9 ★</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {p.previewType === "weather" && (
                          <div className="mockup-page mockup-weather">
                            <div className="mock-nav">
                              🌤️ <strong>WeatherFinder</strong>{" "}
                              <span className="mock-search">
                                Helsingborg 🔍
                              </span>
                            </div>
                            <div className="mock-weather-main">
                              <div className="temp-big">21°C</div>
                              <div className="city-name">Helsingborg</div>
                              <div className="weather-desc">
                                Soligt & Klart ☀️
                              </div>
                            </div>
                            <div className="mock-section-title">
                              5-dagars prognos 📅
                            </div>
                            <div className="mock-forecast">
                              <div className="day">
                                <span>Mån</span>
                                <span>21° ☀️</span>
                              </div>
                              <div className="day">
                                <span>Tis</span>
                                <span>19° 🌤️</span>
                              </div>
                              <div className="day">
                                <span>Ons</span>
                                <span>22° ☀️</span>
                              </div>
                              <div className="day">
                                <span>Tor</span>
                                <span>18° 🌧️</span>
                              </div>
                            </div>
                          </div>
                        )}
                        {p.previewType === "message" && (
                          <div className="mockup-page mockup-message">
                            <div className="mock-nav">
                              💬 <strong>Message Board</strong>{" "}
                              <span className="mock-badge">+ Nytt</span>
                            </div>
                            <div className="mock-feed">
                              <div className="msg-item">
                                <div className="msg-header">
                                  <strong>Susanne D.</strong>{" "}
                                  <small>nyligen</small>
                                </div>
                                <p>Välkommen till min Message Board! 👋</p>
                                <span className="like-count">❤️ 14</span>
                              </div>
                              <div className="msg-item">
                                <div className="msg-header">
                                  <strong>Alex M.</strong>{" "}
                                  <small>10m sedan</small>
                                </div>
                                <p>Snyggt och responsivt gränssnitt 👌</p>
                                <span className="like-count">❤️ 9</span>
                              </div>
                              <div className="msg-item">
                                <div className="msg-header">
                                  <strong>Elena R.</strong>{" "}
                                  <small>1h sedan</small>
                                </div>
                                <p>Frontend-logiken fungerar perfekt!</p>
                                <span className="like-count">❤️ 21</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-body">
                  <p className="project-highlight">{p.highlight}</p>
                  <div className="project-topline">
                    <h3>{p.name}</h3>
                    <span>0{i + 1}</span>
                  </div>
                  <p>{p.description}</p>
                  <div className="tech-list">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <button
                      className="project-preview-button"
                      type="button"
                      onClick={() => setShowcaseProject(p)}
                    >
                      Visa projektet <span aria-hidden="true">⌗</span>
                    </button>
                    <a
                      className="project-demo-link"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Öppna live demo <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="https://github.com/SusanneDD"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </section>
        <section id="experience" className="section experience-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Erfarenhet</p>
              <h2>Redo att bidra från första sprinten.</h2>
            </div>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-meta">LIA 1 & LIA 2</div>
              <div>
                <h3>Bionamic, Lund · Frontend / Design</h3>
                <p>
                  Arbetade med skarpa frontend- och designuppgifter i
                  professionell utvecklingsmiljö.
                </p>
                <p>
                  Ansvarade för designarbete på bionamic.io med fokus på
                  struktur, visuell design och användarupplevelse.
                </p>
              </div>
            </article>
            <article>
              <div className="timeline-meta">8+ års erfarenhet</div>
              <div>
                <h3>Stora Coop Råå, Helsingborg · Butiksmedarbetare</h3>
                <p>
                  Ansvar, problemlösning, service, struktur och kvalitet i en
                  miljö med högt tempo.
                </p>
              </div>
            </article>
            <article>
              <div className="timeline-meta">Examen 2026</div>
              <div>
                <h3>Grit Academy, Malmö · Frontend Webbutvecklare</h3>
                <p>
                  400 YH-poäng med fokus på JavaScript, React, backend, MySQL,
                  Git, IT-säkerhet, agil projektledning, LIA och examensarbete.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section id="contact" className="section contact-section">
          <p className="section-kicker">Kontakt</p>
          <h2>Letar ni efter en frontendutvecklare som vill göra skillnad?</h2>
          <p>
            Jag är öppen för frontendroller där jag kan bidra från start och
            fortsätta utvecklas tillsammans med ett team.
          </p>
          <div className="contact-links">
            <div className="email-action">
              <a href="mailto:Susanne.Dahesh420@Hotmail.com">
                Susanne.Dahesh420@Hotmail.com
              </a>
              <button type="button" onClick={copyEmail}>
                {copyStatus === "success"
                  ? "Kopierat!"
                  : copyStatus === "error"
                    ? "Kunde inte kopiera"
                    : "Kopiera e-post"}
              </button>
            </div>
            <a
              href="https://github.com/SusanneDD"
              target="_blank"
              rel="noreferrer"
            >
              github.com/SusanneDD ↗
            </a>
            <span>Helsingborg · B-körkort · Tillgänglig omgående</span>
          </div>
        </section>
      </main>
      {showcaseProject && (
        <div
          className="project-showcase-backdrop"
          role="presentation"
          onMouseDown={() => setShowcaseProject(null)}
        >
          <section
            className="project-showcase"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-showcase-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="showcase-header">
              <div>
                <span className="showcase-label">LIVE PROJECT VIEWER</span>
                <h2 id="project-showcase-title">{showcaseProject.name}</h2>
              </div>
              <div className="showcase-actions">
                <a
                  href={showcaseProject.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Öppna i ny flik ↗
                </a>
                <button
                  type="button"
                  onClick={() => setShowcaseProject(null)}
                  aria-label="Stäng projektvisaren"
                >
                  ×
                </button>
              </div>
            </header>
            <iframe
              className="showcase-frame"
              src={showcaseProject.demo}
              title={`${showcaseProject.name} i helskärmsvisaren`}
            />
          </section>
        </div>
      )}
      <footer>
        <span>© 2026 Susanne Dahesh</span>
        <a href="#top">Till toppen ↑</a>
      </footer>
    </div>
  );
}
