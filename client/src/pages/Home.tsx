// Style reminder: This page is the premium liquid-glass editorial portfolio—dark navy type, cool atmospheric depth, restrained refractions, and asymmetric layouts.
import { FormEvent, type CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Braces,
  Check,
  Code2,
  Database,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Network,
  Send,
  Sparkles,
  Wrench,
} from "lucide-react";
import { toast } from "sonner";
import { portfolio, SkillCategory } from "@/data/portfolio";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
] as const;

const skillIcons: Record<SkillCategory, typeof Code2> = {
  Programming: Braces,
  Frontend: Layers3,
  Backend: Network,
  Database,
  "AI / ML": BrainCircuit,
  Tools: Wrench,
  "Core CS": Code2,
};

type SectionId = (typeof navigation)[number]["id"];

function scrollToId(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  const header = document.querySelector<HTMLElement>(".site-header");
  const headerClearance = (header?.getBoundingClientRect().height ?? 0) + 28;
  const targetTop = Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerClearance);
  window.scrollTo({ top: targetTop, behavior: "smooth" });
}

function GlassArrow({ direction = "up" }: { direction?: "up" | "right" }) {
  return direction === "right" ? <ArrowUpRight size={16} strokeWidth={1.7} /> : <ArrowDown size={16} strokeWidth={1.7} />;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [activeSkill, setActiveSkill] = useState<SkillCategory>("Programming");
  const [activeProject, setActiveProject] = useState(0);
  const heroArtRef = useRef<HTMLDivElement>(null);

  const currentProject = portfolio.projects[activeProject];
  const currentSkills = useMemo(() => portfolio.skills[activeSkill], [activeSkill]);

  useEffect(() => {
    const observed = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id as SectionId);
      },
      { rootMargin: "-26% 0px -58% 0px", threshold: [0, 0.2, 0.5] },
    );
    observed.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal-section"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = heroArtRef.current;
    if (!element) return;
    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const bounds = element.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty("--mx", `${x * 7}px`);
        element.style.setProperty("--my", `${y * 7}px`);
      });
    };
    const resetPointer = () => {
      element.style.setProperty("--mx", "0px");
      element.style.setProperty("--my", "0px");
    };
    element.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("pointerleave", resetPointer);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  const handlePlaceholder = (label: string) => {
    toast.info(`${label} is a replaceable placeholder in portfolio.ts.`);
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Message form is ready — connect it to your preferred inbox when your details are final.");
    event.currentTarget.reset();
  };

  return (
    <div className="portfolio-page">
      <div className="ambient-layer" aria-hidden="true">
        <div className="ambient-glow ambient-glow-one" />
        <div className="ambient-glow ambient-glow-two" />
        <div className="ambient-glow ambient-glow-three" />
      </div>

      <header className="site-header">
        <div className="nav-shell">
          <a className="brand-lockup" href="#home" aria-label="MD SAMI home">
            <span className="brand-mark-wrap">
              <img src="/manus-storage/md-sami-mark_474e74a5.png" alt="" className="brand-mark" />
              <span className="brand-fallback">MS</span>
            </span>
            <span className="brand-name">{portfolio.name}</span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
                aria-current={activeSection === item.id ? "page" : undefined}
                onClick={(event) => { event.preventDefault(); scrollToId(item.id); }}
              >
                {item.label}
                {activeSection === item.id && <span className="nav-dot" aria-hidden="true" />}
              </a>
            ))}
          </nav>
          <a className="connect-pill" href="#contact">
            Let&apos;s Connect <ArrowUpRight size={15} strokeWidth={1.8} />
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy reveal reveal-one">
            <div className="eyebrow"><span className="status-dot" /> {portfolio.eyebrow}</div>
            <h1 id="hero-title" className="hero-title">MD <span>SAMI</span></h1>
            <p className="hero-subtitle">{portfolio.title}</p>
            <div className="role-line" aria-label="Roles">
              {portfolio.roles.map((role, index) => (
                <span key={role} className="role-item">
                  {role}{index < portfolio.roles.length - 1 && <i aria-hidden="true" />}
                </span>
              ))}
            </div>
            <p className="hero-description">{portfolio.description}</p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => scrollToId("projects")}>
                View My Work <GlassArrow direction="right" />
              </button>
              <button className="button button-glass" type="button" onClick={() => handlePlaceholder("Resume") }>
                Download Resume <GlassArrow />
              </button>
            </div>
            <div className="hero-footnote"><span>01</span><span className="hairline" /><span>Building ideas with intent</span></div>
          </div>

          <div ref={heroArtRef} className="hero-art reveal reveal-three" aria-label="Profile image placeholder">
            <div className="hero-orbit-glow" />
            <div className="liquid-blob liquid-blob-large" />
            <div className="liquid-blob liquid-blob-small" />
            <div className="portrait-halo" />
            <div className="portrait-frame">
              <img src={portfolio.profileImage} alt="Replaceable profile placeholder for MD SAMI" />
              <div className="portrait-sheen" />
            </div>
            <span className="bubble bubble-one" />
            <span className="bubble bubble-two" />
            <span className="bubble bubble-three" />
            <div className="floating-note">
              <Sparkles size={15} strokeWidth={1.6} />
              <div><span>Building ideas</span><span>Writing code</span><span>Creating impact</span></div>
            </div>
            <div className="art-caption"><span>SCROLL TO EXPLORE</span><span className="caption-line" /></div>
          </div>
        </section>

        <section id="about" className="section-shell section-about reveal-section" aria-labelledby="about-heading">
          <div className="section-heading-row">
            <div><p className="section-kicker">02 / THE PERSON</p><h2 id="about-heading" className="section-title">About me<span>.</span></h2></div>
            <p className="section-index">A little context before the work</p>
          </div>
          <div className="about-panel glass-panel">
            <div className="about-copy">
              {portfolio.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <button className="text-link" type="button" onClick={() => scrollToId("contact")}>Know more about me <ArrowUpRight size={16} /></button>
            </div>
            <div className="about-aside" aria-hidden="true">
              <div className="about-orb" />
              <div className="about-quote"><span>“</span><p>Simple content.<br />Careful craft.</p></div>
              <span className="about-coordinate">20.5937° N / 78.9629° E</span>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell section-skills reveal-section" aria-labelledby="skills-heading">
          <div className="section-heading-row">
            <div><p className="section-kicker">03 / THE TOOLKIT</p><h2 id="skills-heading" className="section-title">Skills<span>.</span></h2></div>
            <p className="section-index">Learning by building, one layer at a time</p>
          </div>
          <div className="skills-layout">
            <div className="skill-category-list" role="tablist" aria-label="Skill categories">
              {(Object.keys(portfolio.skills) as SkillCategory[]).map((category) => {
                const Icon = skillIcons[category];
                return <button key={category} type="button" role="tab" aria-selected={activeSkill === category} className={`skill-category ${activeSkill === category ? "is-selected" : ""}`} onClick={() => setActiveSkill(category)}><Icon size={17} strokeWidth={1.7} /><span>{category}</span><ArrowUpRight size={14} /></button>;
              })}
            </div>
            <div className="skills-detail glass-panel">
              <div className="skills-detail-top"><span className="micro-label">CURRENT FOCUS</span><span className="skill-count">{String(currentSkills.length).padStart(2, "0")} areas</span></div>
              <div className="skill-detail-heading"><span className="skill-icon-large">{(() => { const Icon = skillIcons[activeSkill]; return <Icon size={25} strokeWidth={1.5} />; })()}</span><div><p className="section-kicker">{activeSkill}</p><h3>Tools I&apos;m exploring</h3></div></div>
              <div className="skill-pills" key={activeSkill}>{currentSkills.map((skill, index) => <span className="skill-pill" style={{ "--pill-delay": `${index * 45}ms` } as CSSProperties} key={skill}><Check size={13} />{skill}</span>)}</div>
              <p className="skills-note">This is a working toolkit, not a claim of mastery. The list grows with the projects.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell section-projects reveal-section" aria-labelledby="projects-heading">
          <div className="section-heading-row">
            <div><p className="section-kicker">04 / SELECTED WORK</p><h2 id="projects-heading" className="section-title">Featured projects<span>.</span></h2></div>
            <p className="section-index">Two builds, one idea in progress</p>
          </div>
          <div className="project-showcase glass-panel">
            <div className="project-media">
              {currentProject.image ? <img key={currentProject.id} src={currentProject.image} alt={`${currentProject.title} abstract project preview`} /> : <div className="coming-soon-visual" aria-label="Project preview coming soon"><span>03</span><div className="coming-orbit" /><div className="coming-orbit coming-orbit-two" /></div>}
              <div className="media-glass-label"><span className="status-dot" /> {currentProject.status}</div>
              <span className="media-index">{currentProject.number} / 03</span>
            </div>
            <div className="project-copy" key={currentProject.id}>
              <div className="project-meta"><span>PROJECT {currentProject.number}</span><span className="project-rule" /></div>
              <h3>{currentProject.title}</h3>
              <p className="project-subtitle">{currentProject.subtitle}</p>
              <p className="project-description">{currentProject.description}</p>
              <div className="project-tech" aria-label="Technologies used">{currentProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <div className="project-links"><button type="button" className="text-link" onClick={() => handlePlaceholder(`${currentProject.title} live project`)}>Live project <ExternalLink size={15} /></button><button type="button" className="text-link muted-link" onClick={() => handlePlaceholder(`${currentProject.title} GitHub`)}>GitHub <ArrowUpRight size={15} /></button></div>
            </div>
          </div>
          <div className="carousel-controls"><div className="carousel-arrows"><button type="button" aria-label="Previous project" onClick={() => setActiveProject((index) => (index - 1 + portfolio.projects.length) % portfolio.projects.length)}><ArrowLeft size={18} /></button><button type="button" aria-label="Next project" onClick={() => setActiveProject((index) => (index + 1) % portfolio.projects.length)}><ArrowRight size={18} /></button></div><div className="carousel-dots">{portfolio.projects.map((project, index) => <button key={project.id} type="button" aria-label={`Show ${project.title}`} aria-current={index === activeProject} className={index === activeProject ? "is-active" : ""} onClick={() => setActiveProject(index)} />)}</div><span className="carousel-hint">Use the arrows to explore</span></div>
        </section>

        <section id="journey" className="section-shell section-journey reveal-section" aria-labelledby="journey-heading">
          <div className="section-heading-row"><div><p className="section-kicker">05 / THE LEARNING CURVE</p><h2 id="journey-heading" className="section-title">My journey<span>.</span></h2></div><p className="section-index">An education-first timeline</p></div>
          <div className="journey-intro"><p>Not a career timeline. A record of the layers I&apos;m adding as I learn to make better things.</p></div>
          <div className="journey-line">{portfolio.journey.map((item, index) => <div className={`journey-item ${index === portfolio.journey.length - 1 ? "is-current" : ""}`} key={item.year}><div className="journey-node"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="journey-copy"><span className="journey-year">{item.year}</span><h3>{item.label}</h3><p>{item.description}</p></div></div>)}</div>
        </section>

        <section id="contact" className="section-shell section-contact reveal-section" aria-labelledby="contact-heading">
          <div className="contact-header"><p className="section-kicker">06 / OPEN CHANNEL</p><h2 id="contact-heading" className="section-title">Let&apos;s connect<span>.</span></h2><p>Have an opportunity, project idea, collaboration or simply want to connect?</p></div>
          <div className="contact-grid">
            <form className="contact-form glass-panel" onSubmit={handleContactSubmit}>
              <div className="form-top"><span className="micro-label">SEND A NOTE</span><Send size={18} strokeWidth={1.5} /></div>
              <label><span>Name</span><input name="name" placeholder="Your name" required /></label>
              <label><span>Email</span><input name="email" type="email" placeholder="you@example.com" required /></label>
              <label><span>Message</span><textarea name="message" placeholder="Tell me a little about it..." rows={4} required /></label>
              <button className="button button-primary form-submit" type="submit">Send Message <ArrowUpRight size={16} /></button>
            </form>
            <aside className="contact-aside">
              <div className="contact-aside-art" aria-hidden="true"><div className="contact-glass-shape" /><div className="contact-glint" /></div>
              <div className="contact-links"><a href={`mailto:${portfolio.contact.email}`}><span><Mail size={17} />Email</span><strong>{portfolio.contact.email}</strong><ArrowUpRight size={16} /></a><a href={portfolio.contact.github} target="_blank" rel="noreferrer"><span><Github size={17} />GitHub</span><strong>/yourusername</strong><ArrowUpRight size={16} /></a><a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={17} />LinkedIn</span><strong>/in/yourusername</strong><ArrowUpRight size={16} /></a><a href={portfolio.contact.leetcode} target="_blank" rel="noreferrer"><span><Code2 size={17} />LeetCode</span><strong>/yourusername</strong><ArrowUpRight size={16} /></a></div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-mark"><img src="/manus-storage/md-sami-mark_474e74a5.png" alt="" /><span>MD SAMI</span></div><span>© 2026 / Learning in public, building with intent.</span><a href="#home" aria-label="Back to home">Back to top <ArrowUpRight size={15} /></a></footer>
    </div>
  );
}
