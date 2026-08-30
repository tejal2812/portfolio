import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Plus } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false)
        setIsOpen(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Work', path: '/work' },
  ]

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-50 pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -100, 
          opacity: visible ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-shell max-w-5xl px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight text-white select-none hover:opacity-80 transition-opacity">
            tejal<span className="text-[var(--accent)]">.</span>
          </Link>

          {/* Floating Navigation Pill */}
          <div
            className={`nav-capsule flex items-center gap-4 transition-all duration-300 ${
              scrolled
                ? 'bg-[#0a0a0c]/90 border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.6)]'
                : 'bg-white/5 border-white/5'
            }`}
          >
            {/* Nav links */}
            <div className="flex items-center gap-1.5 pl-2">
              {navItems.map((item) => {
                const isTabActive = item.path.includes('#')
                  ? location.pathname + location.hash === item.path
                  : location.pathname === item.path && !location.hash;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={`relative rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors duration-300 ${
                      isTabActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <>
                      <span className="relative z-10">{item.name}</span>
                      {isTabActive && (
                        <motion.span
                          layoutId="activeNavTab"
                          className="absolute inset-0 rounded-full bg-white/10"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                    </>
                  </NavLink>
                );
              })}
              
              <a
                href="/certfication/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide uppercase text-slate-400 hover:text-white transition-colors duration-300"
              >
                Resume
              </a>
            </div>
            
            {/* Mobile menu toggle */}
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-white/5 md:hidden pr-1"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

          {/* Right CTA Button - Get in Touch */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="primary-btn px-4 py-2 font-semibold uppercase tracking-wider transition duration-300 flex items-center gap-1 shadow-md sm:flex"
            >
              <Plus size={14} className="text-black" />
              Get in touch
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-45 rounded-t-3xl border-t border-white/10 bg-[#0a0a0c]/95 px-6 py-8 shadow-2xl backdrop-blur-xl md:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-5 pt-4">
                {navItems.map((item, index) => {
                  const isTabActive = item.path.includes('#')
                    ? location.pathname + location.hash === item.path
                    : location.pathname === item.path && !location.hash;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={item.path}
                        className={`block text-3xl font-extrabold tracking-tight py-2 transition ${
                          isTabActive ? 'text-[var(--accent)] pl-2' : 'text-slate-400'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                >
                  <a
                    href="/certfication/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-3xl font-extrabold tracking-tight py-2 text-slate-400 hover:text-white transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Resume
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.05 }}
                  className="mt-4 border-t border-white/10 pt-6"
                >
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-between rounded-full bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white/90"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in touch
                    <ArrowUpRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar