import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Send, Sparkles, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', project: '', message: '' })
    setTimeout(() => setSubmitted(false), 2500)
  }

  const servicesSupported = [
    'UI/UX design',
    'Website development',
    'AI creative work',
    'Digital product design',
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/tejal-parmar-064475405/' },
    { name: 'Email', icon: Mail, href: 'mailto:parmartejal.tm@gmail.com' },
  ]

  return (
    <div className="relative bg-[#000000] text-white overflow-hidden min-h-screen">
      
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 hero-grid-pattern opacity-[0.12]" />
        <div className="radial-glow left-[10%] top-[20%]" />
        <div className="radial-glow right-[10%] top-[40%] bg-purple-950/10" />
      </div>

      <section className="relative z-10 section-shell section-padding pt-36 pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Left Column - Copy & Badge Toolkit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-kicker">Contact</span>
            <h1 className="hero-title mt-4 leading-tight">Have an idea? Let’s build it.</h1>
            <p className="body-copy mt-5 max-w-lg text-slate-400 text-sm md:text-base leading-relaxed">
              I’m open to opportunities, freelance collaboration, product designs, and front-end roles where speed and premium execution matter.
            </p>

            {/* Glowing Category badges */}
            <div className="mt-8 flex flex-wrap gap-2.5 max-w-md">
              {servicesSupported.map((item) => (
                <div 
                  key={item} 
                  className="chip inline-flex items-center gap-2 uppercase text-[10px]"
                >
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  {item}
                </div>
              ))}
            </div>

            {/* Social Grid */}
            <div className="mt-12 border-t border-white/5 pt-10 max-w-md">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-slate-500 block mb-4">Connect with me</span>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a 
                      key={social.name} 
                      href={social.href} 
                      target="_blank" 
                      rel="noreferrer"
                      className="glass-card flex flex-col items-center justify-center p-4 hover:border-[var(--accent)]/30 text-slate-400 hover:text-white"
                    >
                      <Icon size={18} className="mb-2" />
                      <span className="text-[9px] font-mono uppercase tracking-wider font-semibold">{social.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Premium Form Panel */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/10 bg-[#09090b]/80 backdrop-blur-md rounded-2xl p-8 sm:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative">
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-white/10 bg-black/40 px-4.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-[var(--accent)]/50 focus:bg-black focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="relative">
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-white/10 bg-black/40 px-4.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-[var(--accent)]/50 focus:bg-black focus:outline-none transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Project Type
                </label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full rounded border border-white/10 bg-black/40 px-4.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-[var(--accent)]/50 focus:bg-black focus:outline-none transition-all duration-300"
                  placeholder="Website, UI/UX, AI workflow..."
                />
              </div>

              <div className="relative">
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded border border-white/10 bg-black/40 px-4.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-[var(--accent)]/50 focus:bg-black focus:outline-none transition-all duration-300"
                  placeholder="Tell me about your project, timeline, or scope."
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
                <button type="submit" className="primary-btn w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white">
                  {submitted ? 'Message sent' : 'Send Message'}
                  {submitted ? <Sparkles size={14} className="animate-pulse" /> : <Send size={14} />}
                </button>
                <a 
                  href="mailto:parmartejal.tm@gmail.com" 
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-[var(--accent)] transition-colors duration-300"
                >
                  <Mail size={14} />
                  parmartejal.tm@gmail.com
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact