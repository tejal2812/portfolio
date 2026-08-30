import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Briefcase, Code2, Palette, Sparkles, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

const strengths = [
  {
    title: 'UI/UX',
    description: 'Designing clean, intuitive interfaces with thoughtful information hierarchy and polished interaction patterns.',
  },
  {
    title: 'Web Development',
    description: 'Building responsive front-end experiences that feel fast, accessible, and conversion-ready across devices.',
  },
  {
    title: 'AI & Creative',
    description: 'Exploring AI-assisted creative workflows to prototype ideas, enhance storytelling, and accelerate innovation.',
  },
  {
    title: 'Digital Products',
    description: 'Turning product concepts into usable experiences with clear strategy, strong visual language, and practical implementation.',
  },
]

const skillGroups = [
  {
    title: 'Design',
    items: ['Figma', 'Wireframing', 'UX Strategy', 'Design Systems', 'Visual Design'],
  },
  {
    title: 'Development',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive Web', 'GitHub'],
  },
  {
    title: 'AI & Creative',
    items: ['AI Tools', 'Prompting', 'Creative Exploration', 'Product Ideation', 'Automation'],
  },
]

const timeline = [
  {
    period: '2025 — Present',
    title: 'Founder',
    meta: 'OpiraWebs',
    description: 'Exploring web development, AI-powered experiences, and digital products, turning concepts into user-ready tools.',
    icon: Briefcase
  },
  {
    period: '2025',
    title: 'Machine Learning Intern',
    meta: 'Yuva (1 Month)',
    description: 'Gained hands-on experience in machine learning pipelines, data processing, and basic modeling.',
    icon: Briefcase
  },
  {
    period: '2022 — 2027',
    title: 'B.Tech in Artificial Intelligence',
    meta: 'Current academic focus',
    description: 'Building a strong foundation in AI, product thinking, and modern web technologies.',
    icon: GraduationCap
  },
]



const About = () => {
  return (
    <div className="relative bg-[#000000] text-white overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 hero-grid-pattern opacity-[0.12]" />
        <div className="radial-glow left-[20%] top-[10%]" />
        <div className="radial-glow right-[10%] top-[40%] bg-purple-950/10" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 section-shell section-padding pt-36 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="section-kicker">About Me</span>
          <h1 className="hero-title mt-4 max-w-3xl leading-tight">
            Building my path in <span className="text-[var(--accent)]">AI and software engineering</span>, one idea at a time.
          </h1>
          <div className="mt-8 space-y-6 max-w-3xl text-slate-400 text-sm md:text-base leading-relaxed">
            <p>
              I’m a final-year student aspiring to become an AI engineer and software engineer, with a strong interest in building technology that solves real problems. Alongside my studies, I’m the founder of OpiraWebs, where I explore web development, AI-powered experiences, and digital products.
            </p>
            <p>
              I enjoy turning ideas into working products—from designing interfaces and writing code to experimenting with AI and understanding how technology can create better user experiences.
            </p>
            <p>
              The result: I’m constantly learning, building, experimenting, and turning what I learn into things people can actually use.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Strengths Card Grid */}
      <section className="relative z-10 section-shell pb-20">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex flex-col items-start"
            >
              <div className="mb-5 inline-flex rounded border border-[var(--accent)]/30 bg-[var(--accent-soft)] p-3 text-[var(--accent)]">
                {item.title === 'UI/UX' && <Palette size={20} />}
                {item.title === 'Web Development' && <Code2 size={20} />}
                {item.title === 'AI & Creative' && <BrainCircuit size={20} />}
                {item.title === 'Digital Products' && <Sparkles size={20} />}
              </div>
              <h3 className="mb-3 text-lg font-extrabold text-white tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Group */}
      <section className="relative z-10 section-shell pb-20">
        <div className="mb-10 max-w-xl">
          <span className="section-kicker">Expertise</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Skills & Toolkit</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div 
              key={group.title} 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <h3 className="mb-6 text-lg font-extrabold text-white tracking-tight">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span 
                    key={item} 
                    className="chip hover:border-[var(--accent)]/30 hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="relative z-10 section-shell pb-20">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="section-kicker">Journey</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Timeline</h2>
          </div>
          <div className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[9px] uppercase tracking-widest font-semibold text-slate-400 md:block">
            Learning + building
          </div>
        </div>

        <div className="relative border-l border-white/10 pl-6 ml-4 space-y-10">
          {timeline.map((item, index) => {
            const TimelineIcon = item.icon
            return (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Custom timeline bubble icon */}
                <span className="absolute -left-[37px] top-1 flex h-6 w-6 items-center justify-center rounded border border-[var(--accent)]/40 bg-black text-[var(--accent)]">
                  <TimelineIcon size={12} />
                </span>

                <div className="glass-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between hover:border-white/15">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">{item.period}</div>
                      <h3 className="mt-1 text-xl font-bold text-white tracking-tight">{item.title}</h3>
                      <p className="text-xs text-slate-500 font-semibold">{item.meta}</p>
                    </div>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-slate-400 md:text-right md:ml-4">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

    </div>
  )
}

export default About