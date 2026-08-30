import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'Backend', level: 70 },
    { name: 'DBMS', level: 70 },
    { name: 'DSA', level: 65 },
    { name: 'Website Design', level: 80 },
    { name: 'SQL', level: 75 },
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-white">About Me</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate creative designer with over 5 years of experience in crafting 
              beautiful and functional digital experiences. My expertise spans across UI/UX design, 
              frontend development, and brand identity creation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I believe in the power of good design to solve problems and create meaningful 
              connections between brands and their audiences.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-purple-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-black h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            {/* Removed gradient background shapes */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About