import { useState, useEffect } from 'react';

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Football Team Management (CRUD)",
      description: "Application PHP MySQL pour la gestion complète d'une équipe de football (CRUD joueurs, matchs, statistiques).",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1518605368461-1ee7c6ea4d20?auto=format&fit=crop&w=600&h=400&q=80",
      githubUrl: "https://github.com/Hasna2944/php.crud",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "Kids Calculator",
      description: "Application web ludique et interactive pour l'apprentissage du calcul mental chez les enfants.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=600&h=400&q=80",
      githubUrl: "https://github.com/Hasna2944/calcul_mental",
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Hotel Reservation System",
      description: "Site de réservation et de gestion hôtelière offrant une interface utilisateur claire et une gestion des chambres.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&h=400&q=80",
      githubUrl: "https://github.com/Hasna2944/hotel",
      demoUrl: "#"
    }
  ];

  const technicalSkills = [
    { name: "HTML/CSS/JS", level: 90, color: "from-orange-400 to-yellow-600" },
    { name: "React", level: 85, color: "from-cyan-400 to-cyan-600" },
    { name: "PHP / Laravel", level: 75, color: "from-purple-400 to-purple-600" },
    { name: "Python", level: 70, color: "from-green-400 to-green-600" },
    { name: "Node.js", level: 65, color: "from-green-500 to-emerald-700" },
    { name: "MySQL / MongoDB", level: 80, color: "from-blue-400 to-blue-600" },
    { name: "Tailwind / Bootstrap", level: 85, color: "from-indigo-400 to-indigo-600" },
  ];

  const tools = ["Git", "VS Code", "Docker", "API REST", "MVC", "POO", "CMS"];

  const methodologies = ["Agile", "Scrum"];

  const softSkills = [
    { label: "Esprit d'équipe", icon: "🤝" },
    { label: "Communication", icon: "💬" },
    { label: "Ponctualité", icon: "⏰" },
    { label: "Discipline", icon: "📋" },
  ];

  const languages = [
    { name: "Arabe", level: "Maternelle", percent: 100 },
    { name: "Français", level: "Intermédiaire", percent: 65 },
    { name: "Anglais", level: "Courant", percent: 85 },
  ];

  const education = [
    {
      year: "2026 – Présent",
      degree: "TS Développement Digital – 2ème année",
      school: "Centre mixte HAY NAHDA – Rabat",
      description: "Développement avancé avec React, méthodes agiles, MySQL et NoSQL.",
      icon: "💻",
      current: true
    },
    {
      year: "2025",
      degree: "TS Développement Digital – 1ère année",
      school: "Centre mixte HAY NAHDA – Rabat",
      description: "Apprentissage des bases du développement Full-Stack (Frontend & Backend).",
      icon: "🎓",
      current: false
    },
    {
      year: "2024",
      degree: "Programme BCG",
      school: "Faculté des Sciences – Rabat",
      description: "Biologie, Chimie, Géologie.",
      icon: "🔬",
      current: false
    },
    {
      year: "2023",
      degree: "Baccalauréat Sciences Physiques",
      school: "Lycée Ibn Battouta – Rabat",
      description: "Diplôme de baccalauréat en sciences physiques.",
      icon: "🎓",
      current: false
    }
  ];

  const navLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#education", label: "Formation" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">

      {/* ── HEADER ── */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-blue-900/20' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/60 transition-shadow">
              IH
            </div>
            <span className="font-bold text-lg text-white hidden sm:block">Ibourki<span className="text-blue-400"> Hasnae</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${activeSection === link.href.slice(1) ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:ibourkihasne@gmail.com"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-600/30"
            >
              Hire Me ✨
            </a>
          </nav>

          {/* Mobile Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-white p-2">
            {isMenuOpen
              ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/98 backdrop-blur border-t border-gray-800 px-6 py-4 space-y-3">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-blue-400 font-medium py-1 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO SECTION ── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/40 to-gray-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/40 border border-blue-700/50 rounded-full text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Disponible pour stage / alternance
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="text-white">Ibourki</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Hasnae</span>
            </h1>

            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <div className="h-px w-12 bg-blue-500"></div>
              <p className="text-xl md:text-2xl font-semibold text-blue-300">Full-Stack Developer</p>
              <div className="h-px w-12 bg-blue-500"></div>
            </div>

            <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Étudiante en deuxième année de développement web Full Stack, passionnée par la création d'interfaces modernes et la conception d'applications performantes. Autonome, rigoureuse et curieuse, je cherche à intégrer une équipe dynamique.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects"
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
                Voir mes projets →
              </a>
              <a href="#contact"
                className="px-8 py-3.5 bg-transparent border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                Me contacter
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400">2+</div>
                <div className="text-gray-500 text-sm">ans de formation</div>
              </div>
              <div className="w-px bg-gray-800"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400">8+</div>
                <div className="text-gray-500 text-sm">technologies</div>
              </div>
              <div className="w-px bg-gray-800"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400">3+</div>
                <div className="text-gray-500 text-sm">projets réalisés</div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 opacity-60"></div>

              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600/50 shadow-2xl shadow-blue-900/50">
                <img
                  src="/image.png"
                  alt="Ibourki Hasnae – Développeuse Full-Stack"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                ✅ Open to work
              </div>

              {/* Tech badges floating */}
              <div className="absolute -left-8 top-12 bg-gray-900 border border-gray-700 text-xs px-3 py-1.5 rounded-lg font-mono text-blue-400 shadow-lg">
                &lt;React /&gt;
              </div>
              <div className="absolute -right-10 bottom-16 bg-gray-900 border border-gray-700 text-xs px-3 py-1.5 rounded-lg font-mono text-purple-400 shadow-lg">
                PHP 💜
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-bounce">
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section id="about" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Qui suis-je ?</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">À propos de moi</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left – Présentation */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">👩‍💻</span> Ma présentation
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Je m'appelle <span className="text-white font-semibold">Hasnae Ibourki</span>, étudiante en 2ème année
                  de développement web Full-Stack à l'<span className="text-blue-400">OFPPT</span>. Passionnée par
                  la création de sites web modernes et fonctionnels, je cherche constamment à améliorer mes compétences.
                </p>
                <p>
                  Mon objectif est d'évoluer dans un <span className="text-white font-semibold">environnement professionnel stimulant</span>,
                  de contribuer activement au travail d'équipe et de perfectionner mes compétences en développement
                  web, quel que soit le secteur d'activité.
                </p>
                <p>
                  Curieuse de nature, j'aime explorer de nouvelles technologies et relever des défis techniques
                  pour proposer des solutions numériques <span className="text-blue-400">créatives et efficaces</span>.
                </p>
              </div>

              {/* Languages */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <span>🌍</span> Langues
                </h3>
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-300 font-medium">{lang.name}</span>
                        <span className="text-gray-500">{lang.level}</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-700"
                          style={{ width: `${lang.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft skills */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <span>🌟</span> Soft Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {softSkills.map((skill) => (
                    <div key={skill.label}
                      className="flex items-center gap-2 bg-gray-800/60 border border-gray-700/50 rounded-xl px-4 py-3 hover:border-blue-600/50 transition-colors">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-gray-300 text-sm font-medium">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right – Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span>⚡</span> Compétences techniques
              </h3>

              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-4 py-2 bg-gradient-to-r ${skill.color} bg-opacity-10 text-white text-sm font-semibold rounded-xl border border-white/10 shadow-sm hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Tools */}
              <div className="mt-10">
                <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <span>🛠️</span> Outils & Environnements
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {tools.map((tool) => (
                    <span key={tool}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 text-sm font-medium rounded-lg hover:border-blue-500/60 hover:text-blue-300 transition-all cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Methodologies */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <span>📐</span> Méthodologies
                </h4>
                <div className="flex gap-3">
                  {methodologies.map((m) => (
                    <span key={m}
                      className="px-5 py-2 bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm font-semibold rounded-full">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION SECTION ── */}
      <section id="education" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Mon parcours</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Formation</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-700 to-gray-800"></div>

            <div className="space-y-10">
              {education.map((item, index) => (
                <div key={index} className="relative flex gap-8 pl-20">
                  {/* Icon */}
                  <div className={`absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl border-2 shadow-lg ${item.current ? 'bg-blue-900/60 border-blue-500 shadow-blue-500/20' : 'bg-gray-900 border-gray-700'}`}>
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div className={`flex-1 p-6 rounded-2xl border transition-all hover:-translate-y-1 ${item.current ? 'bg-blue-950/30 border-blue-700/50 shadow-lg shadow-blue-900/20' : 'bg-gray-900/60 border-gray-800'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.current ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
                        {item.year}
                      </span>
                      {item.current && (
                        <span className="text-xs font-semibold text-green-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                          En cours
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                    <p className="text-blue-400 font-semibold text-sm mb-2">{item.school}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section id="projects" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Ce que j'ai réalisé</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Mes Projets</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Voici quelques projets que j'ai réalisés au cours de ma formation, chacun représentant
              une solution concrète à un besoin spécifique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id}
                className="group bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/30">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                      className="w-9 h-9 bg-gray-900/90 backdrop-blur rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                      </svg>
                    </a>
                    <a href={project.demoUrl}
                      className="w-9 h-9 bg-gray-900/90 backdrop-blur rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-blue-950/50 border border-blue-800/50 text-blue-300 text-xs font-medium rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-800">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                      </svg>
                      GitHub
                    </a>
                    <a href={project.demoUrl}
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm font-medium transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Démo Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section id="contact" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Parlons ensemble</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Me Contacter</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Vous avez un projet ou une opportunité à me proposer ? N'hésitez pas à me contacter,
              je serai ravie d'échanger avec vous !
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Coordonnées</h3>

              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "ibourkihasne@gmail.com",
                  href: "mailto:ibourkihasne@gmail.com"
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Téléphone",
                  value: "(+212) 635 492 413",
                  href: "tel:+212635492413"
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "linkedin.com/in/hasnae-ibourki",
                  href: "https://linkedin.com"
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                  ),
                  label: "GitHub",
                  value: "github.com/ibourkihasnae",
                  href: "https://github.com"
                }
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-600/50 hover:bg-gray-800/50 transition-all group">
                  <div className="w-11 h-11 bg-blue-900/40 border border-blue-700/30 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.label}</div>
                    <div className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 border-t border-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-500/20">
                IH
              </div>
              <div>
                <div className="font-bold text-white">Ibourki Hasnae</div>
                <div className="text-gray-500 text-xs">Full-Stack Developer</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {[
                { href: "https://github.com", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg> },
                { href: "https://linkedin.com", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
                { href: "mailto:ibourkihasne@gmail.com", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
              ].map((social, i) => (
                <a key={i} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 border border-gray-700 hover:border-blue-500 text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-200">
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} <span className="text-gray-400">Ibourki Hasnae</span>. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
