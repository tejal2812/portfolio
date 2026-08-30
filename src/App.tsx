import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Certificates from './pages/Certificates'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <CustomCursor />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader key="loader" />
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App