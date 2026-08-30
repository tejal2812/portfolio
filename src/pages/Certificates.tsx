import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const certificationLinks = [
  {
    title: 'Technology Job Simulation',
    detail: 'Deloitte (Forage) • July 3, 2025',
    href: '/certfication/Deloitte certificate.pdf',
  },
  {
    title: 'Backend Development Course',
    detail: 'PW Skills • January 5, 2025',
    href: '/certfication/backend dev certi.pdf',
  },
  {
    title: 'Building Scalable E-Commerce Apps with React',
    detail: 'PW Skills • January 12, 2025',
    href: '/certfication/react certificat.pdf',
  },
  {
    title: 'How to Create Wireframes and Prototypes Using Figma',
    detail: 'PW Skills • January 11, 2025',
    href: '/certfication/figma lerning certificates.pdf',
  },
  {
    title: 'A Beginner Guide to Docker & Kubernetes',
    detail: 'PW Skills • January 12, 2025',
    href: '/certfication/certificat for docer and kubernets.pdf',
  },
  {
    title: 'The Rise of ChatGPT: Leveraging AI in Digital Marketing',
    detail: 'PW Skills • January 11, 2025',
    href: '/certfication/chatgpt and digital marketing.pdf',
  },
  {
    title: 'How Amazon Uses Machine Learning for Recommendations',
    detail: 'PW Skills • January 16, 2025',
    href: '/certfication/machin lerrning certificagte.pdf',
  },
  {
    title: 'Software Engineering Job Simulation',
    detail: 'J.P. Morgan (Forage) • January 16, 2025',
    href: '/certfication/goldman scach certificates.pdf',
  },
  {
    title: 'Web Development Internship Certificate',
    detail: 'CodSoft • March 15, 2025',
    href: '/certfication/Parmar Tejal code soft inernship certi.pdf',
  },
]

const Certificates = () => {
  return (
    <div className="relative bg-[#000000] text-white overflow-hidden min-h-screen">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 hero-grid-pattern opacity-[0.12]" />
        <div className="radial-glow left-[20%] top-[10%]" />
        <div className="radial-glow right-[10%] top-[40%] bg-purple-950/10" />
      </div>

      {/* Header Section */}
      <section className="relative z-10 section-shell section-padding pt-36 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-center mx-auto"
        >
          <span className="section-kicker">Credibility</span>
          <h1 className="hero-title mt-4 font-extrabold tracking-tight">Certifications & Credentials</h1>
          <p className="body-copy mt-5 mx-auto max-w-2xl text-slate-400 leading-relaxed text-sm md:text-base">
            Verified qualifications and simulation completions in software engineering, backend systems, frontend layout, and artificial intelligence.
          </p>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section className="relative z-10 section-shell pb-32">
        <div className="grid gap-6 md:grid-cols-3">
          {certificationLinks.map((cert, index) => (
            <motion.a 
              key={cert.title} 
              href={cert.href} 
              target="_blank" 
              rel="noreferrer" 
              className="glass-card block p-6 relative overflow-hidden group hover:border-[var(--accent)]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="mb-4 inline-flex rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] uppercase tracking-wider font-semibold text-slate-400 group-hover:bg-[var(--accent-soft)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/20 transition-colors duration-300">
                Credential
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[var(--accent)] transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="mt-2 text-xs text-slate-500 font-semibold">{cert.detail}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[var(--accent)]">
                View PDF
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Certificates
