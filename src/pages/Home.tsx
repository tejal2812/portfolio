import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Plus, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const sentence = "I engineer digital products that turn ideas into software people trust."
const words = sentence.split(" ")

const titleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15
    }
  }
}

const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
}

const tickerItems = [
  "React & TypeScript",
  "UI/UX Design Systems",
  "Computer Vision (OpenCV)",
  "Artificial Intelligence",
  "TailwindCSS & CSS3",
  "Front-End Engineering",
  "Responsive Performance",
  "Framer Motion Animations"
]

const featuredProjects = [
  {
    title: 'LA EIRA',
    category: 'Luxury Couture Storefront',
    image: '/laeira-screenshot.png',
    summary: 'The art of artisanal couture — an elegant luxury experience built around heritage and quiet luxury aesthetics.',
    tags: ['Brand Strategy', 'UI/UX Design', 'React'],
    liveUrl: 'https://laeira.online/',
  },
  {
    title: 'Linea',
    category: 'Jewelry Brand Storefront',
    image: '/linea-screenshot.png',
    summary: 'Minimal jewelry branding and e-commerce presentation shaped around high-end product presentation.',
    tags: ['App design', 'Web design', 'E-commerce'],
    liveUrl: 'https://lineea.vercel.app/',
  },
  {
    title: 'BerryArts',
    category: 'Media & Cinema Platform',
    image: '/berryarts-screenshot.png',
    summary: 'A cinematic media and distribution website built for premium storytelling and audience trust.',
    tags: ['UX Strategy', 'Web design', 'Media'],
    liveUrl: 'https://berryarts.in/',
  },
  {
    title: 'GlossyHQ',
    category: 'AI SaaS Dashboard',
    image: '/glossyhq-screenshot.png',
    summary: 'A salon management dashboard blending business metrics, appointment calendars, and smart AI insights.',
    tags: ['SaaS Design', 'Dashboard UX', 'AI Integration'],
    liveUrl: 'https://glossy-salon-ai.vercel.app/',
  },
]

const Home = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }
      const formatted = new Intl.DateTimeFormat('en-US', options).format(new Date())
      setTime(formatted)
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-[#000000] text-white overflow-hidden">
      
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern opacity-[0.12]" />
        <div className="radial-glow -left-[10%] top-[10%]" />
        <div className="radial-glow -right-[10%] top-[40%] bg-purple-950/20" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 section-shell section-padding pt-36 pb-20 min-h-[90vh] flex flex-col justify-between">
        
        {/* Top Meta info block (Midu style) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-8 mb-16 text-xs text-slate-400 font-semibold tracking-wide">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            AI & Software Engineer in Progress
          </div>
          <div>
            AI & SOFTWARE ENGINEERING STUDENT · FOUNDER @ OPIRAWEBS
          </div>
        </div>

        {/* Giant Watermark Text behind Hero content */}
        <div className="hero-watermark select-none pointer-events-none">
          TEJAL
        </div>

        {/* Hero Title & Subheading layout */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-end relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <motion.h1
              className="hero-title text-[#ffffff]"
              variants={titleContainer}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordReveal}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          <motion.div
            className="flex flex-col items-start gap-6 lg:pl-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
          >
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              I balance premium visual layouts with reliable code architecture. Bridging artificial intelligence insights and front-end craftsmanship.
            </p>
            <Link to="/contact" className="primary-btn px-5 py-2.5 font-bold uppercase tracking-wider flex items-center gap-2">
              <Plus size={14} className="text-black" />
              Work with me
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex items-center justify-between border-t border-white/5 pt-8 text-xs font-semibold text-slate-500 uppercase tracking-widest">
          <div>Scroll to explore</div>
          <ArrowRight size={14} className="rotate-90 animate-bounce" />
        </div>
      </section>

      {/* Intro section (Midu style text copy) */}
      <section className="relative z-10 section-shell pb-28 border-b border-white/5">
        <div className="midu-feature-grid">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Weaving code and visual strategy to turn ambitious ideas into products people trust.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-slate-400 text-sm leading-relaxed">
            <p>
              <strong className="text-white">About me.</strong> I’m a final-year student aspiring to become an AI engineer and software engineer, with a strong interest in building technology that solves real problems. Alongside my studies, I’m the founder of OpiraWebs, where I explore web development, AI-powered experiences, and digital products.
            </p>
            <p>
              I enjoy turning ideas into working products—from designing interfaces and writing code to experimenting with AI and understanding how technology can create better user experiences.
            </p>
            <p>
              <strong className="text-white">The result:</strong> I’m constantly learning, building, experimenting, and turning what I learn into things people can actually use.
            </p>
            <Link to="/about" className="secondary-btn w-fit px-4 py-2 font-bold uppercase tracking-wider text-xs">
              Explore my background
            </Link>
          </div>
        </div>
      </section>

      {/* Ticker / Skills scrolling strip (Midu style) */}
      <div className="ticker-wrap relative z-10 my-16 select-none">
        <div className="ticker-content">
          {/* Double list for smooth infinite scroll loop */}
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={index} className="ticker-item font-semibold uppercase tracking-wider text-xs">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Selected work project section (Midu Highlight projects style) */}
      <section className="relative z-10 section-shell pb-28">
        <div className="flex justify-between items-end border-b border-white/5 pb-6 mb-12">
          <div>
            <span className="section-kicker">Curated Projects</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-3">Selected case studies</h2>
          </div>
          <Link to="/work" className="secondary-btn text-xs uppercase tracking-wider font-bold px-4 py-2">
            See all projects
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* Custom Spotlight Mockup representation of the first project */}
        <motion.div
          className="project-card relative overflow-hidden group mb-12 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Grid layout similar to Fixa/Kiwe layout mockups */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            {/* Visual section */}
            <div className="relative aspect-video lg:aspect-auto min-h-[300px] bg-slate-950 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="absolute inset-0 bg-[#000000]/15 z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
              <img
                src={featuredProjects[0].image}
                alt={featuredProjects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>
            
            {/* Info details block */}
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProjects[0].tags.map(tag => (
                    <span key={tag} className="chip text-[10px]">{tag}</span>
                  ))}
                  <span className="chip chip-alt text-[10px]">Featured Case</span>
                </div>
                
                <h3 className="text-3xl font-extrabold tracking-tight text-white mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {featuredProjects[0].title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {featuredProjects[0].summary}
                </p>
              </div>

              <a
                href={featuredProjects[0].liveUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-btn w-fit py-2.5 px-5 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5"
              >
                Visit website
                <ArrowUpRight size={14} className="text-black" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Two columns grid for subsequent highlighted items */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {featuredProjects.slice(1).map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="project-card group flex flex-col justify-between"
            >
              <div className="overflow-hidden relative aspect-video w-full bg-slate-950 border-b border-white/5">
                <div className="absolute inset-0 bg-[#000000]/15 z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-102"
                />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="chip text-[9px] px-2 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-white mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.summary}</p>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn w-fit py-2 px-4 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5"
                >
                  View Live
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Trust & Standards section (Midu style "A partner you can trust. High standards.") */}
      <section className="relative z-10 section-shell pb-32">
        <div className="border border-white/10 bg-[#09090b]/80 backdrop-blur-md rounded-2xl p-8 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="section-kicker">High Standards</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 leading-tight">
                A partner you can trust. Reliable execution.
              </h2>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-md">
                I combine a systematic engineering mindset with strict visual guidelines. No shortcuts, clean Git commits, and polished interaction curves.
              </p>
            </div>
            
            <div className="grid gap-4">
              {[
                { title: "Research & Strategy", desc: "Understanding layout semantics and user objectives before jumping to write code lines." },
                { title: "Clean Front-End Code", desc: "Modern, component-focused markup built to look uniform and load rapidly." },
                { title: "Consistent Delivery", desc: "Reliable coordination, transparent milestone completions, and ongoing optimization." }
              ].map(item => (
                <div key={item.title} className="p-5 rounded-lg border border-white/5 bg-white/2 hover:border-white/10 transition-colors">
                  <h4 className="text-sm font-extrabold uppercase text-[var(--accent)] tracking-wider">{item.title}</h4>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home