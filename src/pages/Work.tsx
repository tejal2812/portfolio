import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const filters = ['All', 'UI/UX', 'Web Apps', 'AI Projects']

const projects = [
  {
    id: 1,
    title: 'LA EIRA',
    category: 'UI/UX',
    description: 'The art of artisanal couture — an elegant luxury brand experience shaped around heritage, atmosphere, and a refined editorial feel.',
    problem: 'Luxury brands need a digital presence that signals heritage, elegance, and trust without losing intimacy or warmth.',
    solution: 'I designed an immersive couture-inspired composition with large typography, subtle overlays, and a quiet premium aesthetic that reflects the brand’s tone.',
    role: 'Luxury brand design + UI/UX + front-end build',
    result: 'A refined digital identity that feels premium, elevated, and emotionally rich.',
    image: '/laeira-screenshot.png',
    tags: ['Luxury Brand', 'Couture', 'Editorial', 'React'],
    liveUrl: 'https://laeira.online/',
    githubUrl: 'https://github.com/tejal2812',
    year: '2025',
  },
  {
    id: 2,
    title: 'Linea',
    category: 'UI/UX',
    description: 'A minimalist jewelry storefront with a clean luxury aesthetic focused on product elegance and storytelling.',
    problem: 'Jewelry brands need a balance of premium restraint and product clarity so the pieces feel elevated but easy to browse.',
    solution: 'I built a modern editorial layout with refined product cards, soft contrast, and clear presentation of craftsmanship and material value.',
    role: 'Visual design + UX flow + front-end implementation',
    result: 'A sleek, premium shopping experience aligned with contemporary luxury positioning.',
    image: '/linea-screenshot.png',
    tags: ['Luxury E-commerce', 'UI', 'Brand Story'],
    liveUrl: 'https://lineea.vercel.app/',
    githubUrl: 'https://github.com/tejal2812',
    year: '2025',
  },
  {
    id: 3,
    title: 'BerryArts',
    category: 'Web Apps',
    description: 'A cinematic entertainment platform built to showcase premium film content, partnerships, and distribution storytelling.',
    problem: 'The brand needed a stronger digital presence that could handle media-heavy storytelling with clarity and trust.',
    solution: 'I shaped the experience around cinematic visuals, structured sections, and a premium industry feel for film and streaming audiences.',
    role: 'Design system + website build + content structure',
    result: 'A polished entertainment brand site with a more credible, high-impact presentation.',
    image: '/berryarts-screenshot.png',
    tags: ['Media', 'Brand Site', 'UI', 'Web'],
    liveUrl: 'https://berryarts.in/',
    githubUrl: 'https://github.com/tejal2812',
    year: '2025',
  },
  {
    id: 4,
    title: 'Reewear',
    category: 'Web Apps',
    description: 'A sustainable fashion platform centered on wardrobe swapping, points-based engagement, and resale-driven discovery.',
    problem: 'The platform needed to feel fresh and modern while clearly communicating the sustainability and circularity story.',
    solution: 'I created an approachable, user-friendly interface with strong category storytelling, clean product cards, and a conversion-focused layout.',
    role: 'UX design + front-end build + visual direction',
    result: 'A more confident, engaging sustainable fashion experience.',
    image: '/reewear-screenshot.png',
    tags: ['Fashion', 'Sustainability', 'Marketplace', 'UX'],
    liveUrl: 'https://reewear.vercel.app/',
    githubUrl: 'https://github.com/tejal2812',
    year: '2025',
  },
  {
    id: 5,
    title: 'Luxeorywalk',
    category: 'UI/UX',
    description: 'A luxury travel brand landing experience designed around destination inspiration, aspirational storytelling, and premium customer trust.',
    problem: 'The travel brand needed a more polished, high-end digital experience to match the premium positioning of its destinations.',
    solution: 'I built a destination-first homepage with luxury tone, clear CTA flow, and immersive imagery that feels aspirational and credible.',
    role: 'Luxury brand design + homepage architecture + front-end build',
    result: 'A more premium and memorable luxury travel presence.',
    image: '/luxeorywalk-screenshot.png',
    tags: ['Travel', 'Luxury', 'Branding', 'UI'],
    liveUrl: 'https://luxeorywalkk.vercel.app/',
    githubUrl: 'https://github.com/tejal2812',
    year: '2025',
  },
  {
    id: 6,
    title: 'GlossyHQ',
    category: 'AI Projects',
    description: 'An AI-powered salon business platform that blends appointment booking, operations, and growth insights into one elegant workflow.',
    problem: 'Salon businesses need a clear, efficient way to manage bookings, staff, inventory, and customer retention without complexity.',
    solution: 'I focused on a clean dashboard and strong automation storytelling to help the business feel smarter, simpler, and more scalable.',
    role: 'Product UX + dashboard design + AI product storytelling',
    result: 'A modern AI-driven business tool that feels professional and user-ready.',
    image: '/glossyhq-screenshot.png',
    tags: ['AI', 'SaaS', 'Dashboard', 'Booking'],
    liveUrl: 'https://glossy-salon-ai.vercel.app/',
    githubUrl: 'https://github.com/tejal2812',
    year: '2025',
  },
  {
    id: 7,
    title: 'RecipeRadar',
    category: 'Web Apps',
    description: 'A recipe discovery and planner app built for quick inspiration, search, and meal browsing.',
    problem: 'Users needed a simpler way to explore recipes without clutter or poor browsing flow.',
    solution: 'I designed and implemented a clean, responsive experience focused on discoverability, easy navigation, and a friendly visual structure.',
    role: 'UI/UX + front-end development',
    result: 'A more enjoyable and faster recipe browsing experience.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'API', 'Responsive UI'],
    liveUrl: '/portfolio%20project/RecipeRadar-main/',
    githubUrl: 'https://github.com/tejal2812',
    year: '2024',
  },
  {
    id: 8,
    title: 'CV Face Recognition',
    category: 'AI Projects',
    description: 'A computer vision project focused on detecting and recognizing human faces using intelligent image-processing techniques.',
    problem: 'Face-based identification systems need reliable detection accuracy, efficient processing, and a clean user workflow for real-world use.',
    solution: 'I built a CV-based recognition flow using Python and OpenCV to process images, detect facial landmarks, and match identities in a structured way.',
    role: 'AI model design + computer vision implementation',
    result: 'A practical face-recognition prototype demonstrating my skills in AI, vision, and intelligent system building.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'AI'],
    liveUrl: 'https://github.com/tejal2812',
    githubUrl: 'https://github.com/tejal2812',
    year: '2025',
  },
  {
    id: 12,
    title: 'AI Image Generator',
    category: 'AI Projects',
    description: 'A generative AI application that creates high-fidelity artistic images from natural language text prompts.',
    problem: 'Translating descriptive text prompts into detailed visual graphics requires robust model integration and smooth prompt engineering.',
    solution: 'I integrated a Stable Diffusion API within a customized React frontend that lets users balance generation steps, adjust prompts, and export creations.',
    role: 'Full-stack development + generative API integration',
    result: 'An interactive image-generation platform with instant downloads and custom aspect-ratio adjustments.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Stable Diffusion API', 'Tailwind', 'AI Art'],
    liveUrl: 'https://github.com/tejal2812',
    githubUrl: 'https://github.com/tejal2812',
    year: '2025',
  },
  {
    id: 10,
    title: 'Airline Booking',
    category: 'UI/UX',
    description: 'A responsive flight search and booking landing page built with custom animations and streamlined flight reservation interfaces.',
    problem: 'Travelers need a simple, intuitive flight booking interface that handles travel selection without friction.',
    solution: 'I designed a clean, visual reservation screen with smooth scroll animations, airline booking controls, and responsive styling.',
    role: 'UI/UX designer + landing page developer',
    result: 'An interactive travel reservation dashboard with clean card components and smooth animations.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    tags: ['HTML', 'CSS', 'JS', 'AOS Animations'],
    liveUrl: '/portfolio%20project/landiong%20page/',
    githubUrl: 'https://github.com/tejal2812',
    year: '2024',
  },
]

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="relative bg-[#000000] text-white overflow-hidden">
      
      {/* Glow Backdrops */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 hero-grid-pattern opacity-[0.12]" />
        <div className="radial-glow left-[5%] top-[10%]" />
        <div className="radial-glow right-[5%] top-[50%] bg-purple-950/10" />
      </div>

      {/* Hero Header */}
      <section className="relative z-10 section-shell section-padding pt-36 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="section-kicker">Portfolio</span>
          <h1 className="hero-title mt-4 font-extrabold tracking-tight">Selected work, built with purpose.</h1>
          <p className="body-copy mt-5 mx-auto max-w-2xl text-slate-400 leading-relaxed text-sm md:text-base">
            I build digital experiences that are clean, responsive, and polished to feel premium from the first interaction.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`relative rounded-full px-5 py-2 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? 'text-black'
                  : 'text-slate-300 hover:text-white border border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <span className="relative z-10">{filter}</span>
              {activeFilter === filter && (
                <motion.span
                  layoutId="activeFilterTab"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Editorial List */}
      <section className="relative z-10 section-shell pb-20">
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="project-card grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr] hover:border-white/15"
              >
                {/* Project Image Block (Alternating alignment) */}
                <div className={`overflow-hidden relative min-h-[300px] bg-slate-950 ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-103" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 to-transparent pointer-events-none" />
                </div>

                {/* Project Content Block */}
                <div className={`flex flex-col justify-between p-8 sm:p-10 ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-2.5 py-0.5 text-[9px] font-mono tracking-wider text-[var(--accent)] uppercase">
                        {project.category}
                      </span>
                      <span className="text-[9px] font-mono tracking-wider font-bold text-slate-500">{project.year}</span>
                    </div>

                    <h2 className="text-3xl font-extrabold tracking-tight text-white">{project.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

                    <div className="mt-6 space-y-3.5 border-t border-white/5 pt-6 text-xs leading-relaxed text-slate-400">
                      <div>
                        <span className="font-bold uppercase tracking-wide text-white mr-1.5">Problem:</span> {project.problem}
                      </div>
                      <div>
                        <span className="font-bold uppercase tracking-wide text-white mr-1.5">Solution:</span> {project.solution}
                      </div>
                      <div>
                        <span className="font-bold uppercase tracking-wide text-white mr-1.5">My Role:</span> {project.role}
                      </div>
                      <div>
                        <span className="font-bold uppercase tracking-wide text-[var(--accent)] mr-1.5">Result:</span> {project.result}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip text-[9px] px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      {project.id !== 7 && project.id !== 8 && project.id !== 12 && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="primary-btn w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white">
                          Live Demo
                          <ExternalLink size={14} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative z-10 section-shell pb-32">
        <div className="border border-white/10 bg-[#09090b]/80 backdrop-blur-md rounded-2xl p-8 text-center md:p-16 relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-[var(--accent)]/5 rounded-full filter blur-[80px]" />
          <span className="section-kicker">Let’s build</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-5xl leading-tight">Need a thoughtful, polished digital presence?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
            I help turn ideas into product experiences that feel premium, useful, and memorable.
          </p>
          <Link to="/contact" className="primary-btn mt-8 px-6 py-3 text-xs uppercase tracking-wider font-bold text-black bg-white hover:bg-slate-200">
            Start a project
            <ArrowRight size={14} className="text-black" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Work