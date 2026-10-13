import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Github, Linkedin, MapPin, Mail, MessageCircle, Menu, X, Code2, Trophy, Handshake, Monitor, ShoppingBag, Database, Rocket, Landmark, Wrench, Globe, PenTool, Smartphone, GitBranch, Quote, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import ribbon from '@/assets/liquid-ribbon.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Kabelo Maile — Software Engineer & Web Developer' },
    { name: 'description', content: 'Kabelo Maile is a software engineering student and freelance web developer in Johannesburg. Explore selected projects and start a conversation.' },
    { property: 'og:title', content: 'Kabelo Maile — Software Engineer & Web Developer' },
    { property: 'og:description', content: 'Fast, clean, client-ready web experiences. Selected work and web development services by Kabelo Maile.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});
const github = 'https://github.com/Kayfalls';
const linkedin = 'https://www.linkedin.com/in/kabelo-maile-07945422b';
const email = 'kabelomaile73@gmail.com';
const projects = [
  { title: 'Trophies & Badges', kind: 'trophies', category: 'E-commerce · Live client', Icon: Trophy, subtitle: 'Awards for every achievement.', description: 'A full e-commerce web app for a local Gauteng awards shop. Product filtering, Firebase authentication, and a customer-facing storefront — built and deployed to production.', stack: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Vercel'], live: 'https://trophiesandbadges.vercel.app', code: github },
  { title: 'Contact Us Demo', kind: 'contact', category: 'Web design · UI development', Icon: Mail, subtitle: 'Let’s start a conversation.', description: 'A clean, responsive contact page built with vanilla HTML and CSS. A reusable, component-style demo for client-facing web projects.', stack: ['HTML', 'CSS'], live: 'https://contact-us-demo-kayfalls-projects.vercel.app', code: `${github}/Contact-Us-Demo` },
  { title: 'LocalHands', kind: 'local', category: 'Full-stack · Service platform', Icon: Handshake, subtitle: 'Local people. Helping hands.', description: 'Connecting local service providers with clients. A backend built with FastAPI and PostgreSQL on Ubuntu — an exploration into Python-based full-stack development.', stack: ['Python', 'FastAPI', 'PostgreSQL'], live: undefined, code: `${github}/LocalHands` },
];
const services = [
  { Icon: Monitor, title: 'Web Design & Development', text: 'Custom websites built from scratch — responsive, fast-loading, and tailored to your brand and audience.' },
  { Icon: ShoppingBag, title: 'E-Commerce Platforms', text: 'Product catalogues, customer authentication, and order management — everything a small business needs to sell online.' },
  { Icon: Database, title: 'Firebase Integration', text: 'Real-time databases, user authentication, and cloud storage integrated seamlessly into your web app.' },
  { Icon: Rocket, title: 'Deployment & Hosting', text: 'Your site live on Vercel with a custom domain, HTTPS, and optimised performance from day one.' },
  { Icon: Landmark, title: 'Government & Tender Projects', text: 'Professional web solutions for municipalities and public sector organisations — maintainable and compliant.' },
  { Icon: Wrench, title: 'Maintenance & Support', text: 'Ongoing updates, bug fixes, and feature additions. Available on monthly retainer or per-project basis.' },
];
const skills = [
  { name: 'HTML5', Icon: Code2 }, { name: 'CSS3', Icon: Code2 }, { name: 'JavaScript', Icon: Code2 }, { name: 'Firebase', Icon: Database }, { name: 'Vercel', Icon: Rocket }, { name: 'Java', Icon: Code2 }, { name: 'Python', Icon: Code2 }, { name: 'Graphic Design', Icon: PenTool }, { name: 'Responsive Design', Icon: Smartphone }, { name: 'Git & GitHub', Icon: GitBranch },
];
function Portfolio() {
  const [hireOpen, setHireOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('Johannesburg, ZA');
  const [emailReady, setEmailReady] = useState(false);
  useEffect(() => {
    const update = () => setTime(`${new Intl.DateTimeFormat('en-ZA', { timeZone: 'Africa/Johannesburg', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())} in Johannesburg`);
    update(); const timer = setInterval(update, 60000); return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close);
  }, []);
  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Hi Kabelo,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(String(data.get('project')))}&body=${encodeURIComponent(body)}`;
    setEmailReady(true);
  }
  return <div className="portfolio">
    <header className="site-header"><div className="container nav-inner">
      <a href="#home" className="logo" aria-label="Kabelo Maile home">K<span>.</span>B</a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Work</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      <div className="header-right"><span className="local-time"><Globe size={12}/>{time}</span><Button variant="glossy" onClick={() => setHireOpen(true)}>Let’s talk <ArrowUpRight/></Button><Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button></div>
    </div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[['About', 'about'], ['Work', 'projects'], ['Services', 'services'], ['Contact', 'contact']].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}</header>
    <main>
      <section className="hero" id="home"><img className="hero-art" src={ribbon} alt="Glossy copper K.B monogram flowing like liquid metal on a warm white background" width={1920} height={1024} fetchPriority="high"/>
        <div className="container hero-inner"><div className="availability"><span className="status-dot"/> Available for freelance work <ArrowUpRight size={12}/></div>
          <h1><span>Kabelo</span><span>Maile<span className="inline text-primary">.</span></span></h1><p className="hero-role">Web Developer.</p>
          <p className="hero-copy">I build fast, clean, and client-ready web experiences — from concept to deployment. Based in Johannesburg, working everywhere.</p>
          <div className="hero-actions"><Button asChild variant="glossy"><a href="#projects">View my work <ArrowUpRight/></a></Button><Button asChild variant="glass"><a href="#contact">Get in touch <ArrowRight/></a></Button></div>
        </div><div className="container hero-bottom"><a href="#projects"><ArrowDown size={15}/> A little further, a lot more.</a><span><Code2 size={13}/> Thoughtful design. Solid engineering.</span></div>
      </section>
      <div className="container metrics">{[['5+', 'Projects delivered'], ['2+', 'Years building'], ['100%', 'Client satisfaction']].map(([number, label]) => <div className="metric" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
      <section className="section container" id="projects"><div className="section-heading"><div><div className="eyebrow">Selected work</div><h2>A few things <span>I’ve built.</span></h2></div><Button asChild variant="glass"><a href={github} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight/></a></Button></div>
        <div className="projects-grid">{projects.map(project => <article className="project" key={project.title}>
          <div className={`project-preview ${project.kind}`} aria-label={`${project.title} illustrative preview`}><div className="mini-browser"><div className="browser-bar"><i/><i/><i/></div><div className="mini-content"><project.Icon/><strong>{project.title}</strong><small>{project.subtitle}</small></div></div></div>
          <div className="project-body"><div className="project-topline">{project.category}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={13}/></a>}<a href={project.code} target="_blank" rel="noreferrer"><Github size={13}/> View code</a></div></div>
        </article>)}</div>
      </section>
      <section className="section about-section" id="about"><div className="container"><div className="about-grid"><div><div className="eyebrow">The person behind the code</div><h2>More than just<br/><span>a developer.</span></h2><div className="about-mark">K.B<span>_</span></div><div className="about-location"><MapPin size={15}/> Johannesburg, South Africa</div></div>
        <div className="about-copy"><p>I’m <strong>Kabelo Maile</strong>, a software engineering student at <strong>WeThinkCode_</strong> and freelance web developer based in Johannesburg. I build web products that are clean, fast, and actually work for the clients who need them.</p><p>My background spans <strong>web development, applied mathematics, graphic design, and systems thinking</strong> — which means I approach every project with both technical precision and an eye for design.</p><p>I work with small businesses, startups, and local organisations to bring their digital presence to life — from e-commerce platforms to full-stack web apps — deployed and production-ready.</p><div className="tags"><span>WeThinkCode_ Student</span><span>Freelance Developer</span><span>Johannesburg</span></div></div>
        </div><div className="skills"><div className="eyebrow">What I work with</div><div className="skill-list">{skills.map(({ name, Icon }) => <span className="skill" key={name}><Icon/>{name}</span>)}</div></div></div></section>
      <section className="section container" id="services"><div className="eyebrow">What I offer</div><h2>From your idea <span>to the internet.</span></h2><p className="section-intro">End-to-end web development for businesses that need a professional online presence, fast.</p><div className="services-grid">{services.map(({Icon, title, text}, index) => <article className="service" key={title}><div className="service-top"><Icon size={25} strokeWidth={1.3}/><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="testimonial"><div className="container"><Quote className="quote-icon" size={30} strokeWidth={1.3}/><blockquote>“Working with Kabelo was seamless from start to finish. He understood exactly what our shop needed and delivered a professional, easy-to-use website that our customers love.”</blockquote><cite>Owner — Awards & Engraving Shop, Gauteng</cite></div></section>
      <section className="section container" id="contact"><div className="contact-grid"><div><div className="eyebrow">Let’s make something happen</div><h2>Your next project.<br/><span>Our next conversation.</span></h2><p className="section-intro">Have a website in mind? Need a developer for a tender submission? Or just want to explore what’s possible — reach out and let’s make it happen.</p><div className="contact-links"><a href={`mailto:${email}`}><Mail/>{email}<ArrowUpRight/></a><a href="https://wa.me/27681821574" target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp me <ArrowUpRight/></a><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin/> Connect on LinkedIn <ArrowUpRight/></a></div></div>
        <form className="contact-form" onSubmit={sendMessage}><div className="form-row"><label>Your name<input name="name" placeholder="Your name" autoComplete="name" required/></label><label>Email address<input name="email" type="email" placeholder="you@company.com" autoComplete="email" required/></label></div><label>What do you need?<input name="project" placeholder="e.g. An e-commerce site for my business" required/></label><label>Message<textarea name="message" placeholder="Tell me a little about your project…" required/></label><Button variant="glossy" type="submit">Send message <ArrowUpRight/></Button>{emailReady && <p className="form-note" role="status">Your message is ready in your email app. Send it there to get in touch.</p>}</form>
      </div></section>
    </main>
    <footer className="container site-footer"><a href="#home" className="logo">K<span>.</span>B</a><p>© 2026 Kabelo Maile. Built with code in Johannesburg.</p><div className="socials"><a href={github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github/></a><a href={linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin/></a><a href={`mailto:${email}`} aria-label="Email Kabelo"><Mail/></a></div></footer>
    <Dialog open={hireOpen} onOpenChange={setHireOpen}><DialogContent className="hire-dialog"><DialogTitle>Work with Kabelo<span className="text-primary">.</span></DialogTitle><DialogDescription>Let’s talk about your project, or request my CV and cover letter.</DialogDescription><div className="hire-actions"><Button asChild variant="glossy"><a href={`mailto:${email}?subject=Let's%20work%20together`}><Mail/> Start a conversation <ArrowUpRight/></a></Button><Button asChild variant="glass"><a href={`mailto:${email}?subject=Request%20for%20CV%20and%20Cover%20Letter&body=Hi%20Kabelo%2C%0A%0APlease%20send%20me%20your%20CV%20and%20cover%20letter.%0A%0AThank%20you.`}><FileText/> Request CV & cover letter <ArrowUpRight/></a></Button><Button asChild variant="glass"><a href="https://wa.me/27681821574" target="_blank" rel="noreferrer"><MessageCircle/> Message on WhatsApp <ArrowUpRight/></a></Button></div></DialogContent></Dialog>
  </div>;
}
