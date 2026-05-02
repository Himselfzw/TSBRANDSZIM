import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Camera, Users, ShoppingCart } from 'lucide-react'
import HeroBanner from '../components/HeroBanner'

function Photography() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Gallery Data
  const galleryItems = [
    { id: 1, category: 'Events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop', title: 'Concert Event' },
    { id: 2, category: 'Portraits', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop', title: 'Professional Portrait' },
    { id: 3, category: 'Commercial', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop', title: 'Product Photography' },
    { id: 4, category: 'Events', image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=600&h=600&fit=crop', title: 'Wedding Coverage' },
    { id: 5, category: 'Portraits', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop', title: 'Studio Portrait' },
    { id: 6, category: 'Commercial', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop', title: 'Fashion Shot' },
    { id: 7, category: 'Events', image: 'https://images.unsplash.com/photo-1533108768641-83a82b9ff3f7?w=600&h=600&fit=crop', title: 'Corporate Event' },
    { id: 8, category: 'Portraits', image: 'https://images.unsplash.com/photo-1516387938627-6f3dee5d23ca?w=600&h=600&fit=crop', title: 'Creative Portrait' },
  ]

  // Categories
  const categories = [
    {
      icon: Camera,
      title: 'EVENTS',
      description: 'Capture the energy and emotion of your special moments with professional event photography.',
    },
    {
      icon: Users,
      title: 'PORTRAITS',
      description: 'Striking headshots and creative portraits that reveal personality and presence.',
    },
    {
      icon: ShoppingCart,
      title: 'COMMERCIAL',
      description: 'Product photography that sells and brand storytelling through compelling visuals.',
    },
  ]

  return (
    <div className="bg-black">
      {/* Hero Banner */}
      <HeroBanner
        title="PHOTOGRAPHY"
        subtitle="Capturing moments. Telling stories."
        backgroundImage="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=600&fit=crop"
        sectionNumber="02"
      />

      {/* Large Hero Image Grid */}
      <section className="py-12 px-4 border-b-2 border-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 h-96"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Large Featured Image */}
            <motion.div
              className="border-2 border-white overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"
                alt="Featured event"
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Grid of 4 smaller images */}
            <div className="grid grid-cols-2 gap-0">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  className="border-2 border-white overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={`https://images.unsplash.com/photo-${1506794778202 + item}?w=400&h=400&fit=crop`}
                    alt={`Gallery item ${item}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 border-b-2 border-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-clamp-h2 font-anton mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            OUR SPECIALTIES
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-400"
                >
                  <div className="mb-6">
                    <Icon size={40} className="text-red" />
                  </div>
                  <h3 className="text-2xl font-anton mb-4">{category.title}</h3>
                  <p className="text-sm font-inter opacity-80">{category.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Full Portfolio Grid */}
      <section className="py-20 px-4 border-b-2 border-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-clamp-h2 font-anton mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            PORTFOLIO
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="border-2 border-white overflow-hidden group h-72"
              >
                <div className="relative w-full h-full overflow-hidden bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300 flex items-end opacity-0 group-hover:opacity-100">
                    <div className="p-4 w-full">
                      <p className="text-xs text-red font-inter mb-1 tracking-widest">
                        {item.category}
                      </p>
                      <h3 className="text-lg font-anton text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 border-b-2 border-white flex items-center justify-center min-h-[400px]">
        <motion.div
          className="max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-3xl md:text-4xl font-garamond italic text-white mb-8 leading-relaxed">
            "The photography was stunning. Every shot captured the essence of our brand perfectly. Highly recommended!"
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-red"></div>
            <h4 className="font-anton text-sm">SARAH JOHNSON</h4>
            <p className="text-xs opacity-60 font-inter">MARKETING DIRECTOR, LUXE EVENTS</p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-b-2 border-white">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-clamp-h2 font-anton mb-6">BOOK YOUR SESSION</h2>
          <p className="text-gray-300 font-inter mb-8">
            Let's create stunning visuals that tell your story.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red text-black font-anton text-sm hover:bg-white transition-all duration-300"
          >
            SCHEDULE NOW
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Photography
