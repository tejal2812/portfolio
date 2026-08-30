import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  const letters = "tejal parmar".split("")

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.04,
      }
    }
  }

  const letterVariants = {
    initial: { opacity: 0, y: 25 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-[#070709] flex items-center justify-center z-[9999]"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="text-center">
        <motion.div
          className="text-white text-5xl md:text-6xl font-serif mb-8 tracking-wide flex items-center justify-center gap-[0.02em] lowercase italic"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {letters.map((char, index) => (
            <motion.span 
              key={index} 
              variants={letterVariants}
              style={{ display: 'inline-block', minWidth: char === ' ' ? '0.25em' : 'auto' }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          className="w-48 h-[1px] bg-white/10 mx-auto overflow-hidden relative"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="h-full bg-[var(--accent)] w-full absolute left-0"
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.4,
              delay: 0.8,
              ease: [0.76, 0, 0.24, 1],
              repeat: Infinity,
              repeatDelay: 0.2
            }}
          />
        </motion.div>
        
        <motion.p
          className="text-[var(--accent)]/80 mt-6 text-[10px] font-mono uppercase tracking-[0.25em] font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Software Engineer • AI & UI/UX
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader