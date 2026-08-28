const projects = [
  {
    name: "MovieProject",
    description:
      "Responsiv filmwebbplats där användaren kan utforska filmer och interagera med dynamiskt innehåll. Fokus på API-integration, användarvänlig design och responsiv layout.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    demo: "https://fe24-js1-slutprojekt-susanne-dahesh.netlify.app/#now-playing",
    url: "fe24-js1-slutprojekt.netlify.app",
    previewType: "movie",
  },
  {
    name: "WeatherFinder",
    description:
      "Responsiv väderapplikation som hämtar aktuell väderdata via API. Byggd med fokus på tydlig informationspresentation, användarvänlighet och dynamiskt innehåll.",
    tech: ["JavaScript", "REST API", "HTML", "CSS"],
    demo: "https://susannedd.github.io/fe24-js1-grit-Susanne-Dahesh/",
    url: "susannedd.github.io/weather",
    previewType: "weather",
  },
  {
    name: "Message Board",
    description:
      "Interaktiv webbapplikation där användare kan skapa och hantera meddelanden. Fokus på frontendlogik, användarinteraktion och ett tydligt responsivt gränssnitt.",
    tech: ["JavaScript", "Frontend Logic", "HTML", "CSS"],
    demo: "https://clinquant-cocada-c9cf61.netlify.app/",
    url: "messageboard.netlify.app",
    previewType: "message",
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
export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          SD
        </a>
        <nav>
          <a href="#about">Om mig</a>
          <a href="#projects">Projekt</a>
          <a href="#experience">Erfarenhet</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>
      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">
              Examinerad frontendutvecklare · Helsingborg
            </p>
            <h1>
              Jag bygger moderna webbupplevelser som är tydliga, snabba och
              användarvänliga.
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
          </div>
          <div className="profile-card">
            <div className="profile-photo">
              <img
                src="/profile-photo.jpg"
                alt="Susanne Dahesh profilbild"
                style={{
                  mixBlendMode: "normal",
                  transform: "translateY(-14%) scale(1.28)",
                }}
              />
            </div>
            <p>Frontendutvecklare · Helsingborg</p>
          </div>
        </section>
        <section id="about" className="section split-section">
          <div>
            <p className="section-kicker">Om mig</p>
            <h2>Teknik, design och ansvar i samma profil.</h2>
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
          <div className="skills-grid">
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </section>
        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Utvalda projekt</p>
              <h2>Projekt som visar hur jag arbetar.</h2>
            </div>
            <a
              href="https://github.com/SusanneDD"
              target="_blank"
              rel="noreferrer"
            >
              Se all kod på GitHub ↗
            </a>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.name}>
                <div className={`project-visual visual-${i + 1}`}>
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
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      Live demo ↗
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
            ))}
          </div>
        </section>
        <section id="experience" className="section experience-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Erfarenhet</p>
              <h2>Praktisk utvecklingserfarenhet + lång arbetslivsvana.</h2>
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
          <h2>Jag söker min första fasta utvecklarroll.</h2>
          <p>
            Jag är öppen för frontendroller där jag kan bidra från start och
            fortsätta utvecklas tillsammans med ett team.
          </p>
          <div className="contact-links">
            <a href="mailto:Susanne.Dahesh420@Hotmail.com">
              Susanne.Dahesh420@Hotmail.com
            </a>
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
      <footer>
        <span>© 2026 Susanne Dahesh</span>
        <a href="#top">Till toppen ↑</a>
      </footer>
    </>
  );
}
