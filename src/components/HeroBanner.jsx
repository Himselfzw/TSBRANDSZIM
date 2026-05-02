import { motion } from 'framer-motion'

function HeroBanner({ title, subtitle, backgroundImage, sectionNumber }) {
  return (
    <section
      className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Section Number */}
      {sectionNumber && (
        <motion.div
          className="absolute top-8 right-8 text-white text-6xl font-anton opacity-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {sectionNumber}
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-clamp-h1 font-anton text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-clamp-h3 font-garamond italic text-gray-300">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  )
}

export default HeroBanner