import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 border-b-2 border-white">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-clamp-h1 font-anton text-white mb-6 leading-tight">
            TS BRANDS<br />ZIMBABWE
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Creative Agency Crafting Visual Excellence
          </p>
          <Link
            to="/graphics-design"
            className="inline-block px-8 py-3 bg-red text-black font-anton hover:bg-white transition-colors duration-300"
          >
            EXPLORE SERVICES
          </Link>
        </motion.div>
      </section>

      {/* Services Preview - Placeholder */}
      <section className="py-20 border-b-2 border-white">
        <h2 className="text-4xl font-anton text-center mb-12">COMING SOON</h2>
        <p className="text-center text-gray-400">Phase 2: Services cards will be built here</p>
      </section>
    </div>
  )
}

export default Home