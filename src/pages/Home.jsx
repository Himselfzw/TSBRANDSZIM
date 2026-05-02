import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Services Data
  const services = [
    {
      title: 'GRAPHICS DESIGN',
      description: 'Branding, Posters, UI/UX Design',
      path: '/graphics-design',
      number: '01',
    },
    {
      title: 'PHOTOGRAPHY',
      description: 'Events, Portraits, Commercial',
      path: '/photography',
      number: '02',
    },
    {
      title: 'CLOTHING',
      description: 'T-Shirts, Hoodies, Merchandise',
      path: '/clothing',
      number: '03',
    },
  ]

  // Stats Data
  const stats = [
    { number: '150+', label: 'PROJECTS COMPLETED' },
    { number: '80+', label: 'SATISFIED CLIENTS' },
    { number: '5+', label: 'YEARS EXPERIENCE' },
  ]

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 border-b-2 border-white">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-clamp-h1 font-anton text-white mb-6 leading-tight">
            TS BRANDS<br />ZIMBABWE
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-inter">
            A full-service creative agency delivering bold, brutalist design solutions
          </p>
          <Link
            to="/graphics-design"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red text-black font-anton text-sm hover:bg-white transition-all duration-300"
          >
            EXPLORE SERVICES
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 border-b-2 border-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-clamp-h2 font-anton text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            OUR SERVICES
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-400 cursor-pointer group"
              >
                <div className="mb-4 text-6xl font-anton opacity-20 group-hover:opacity-40 transition-opacity">
                  {service.number}
                </div>
                <h3 className="text-2xl font-anton mb-3 group-hover:text-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm mb-6 font-inter opacity-80">
                  {service.description}
                </p>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-sm font-anton hover:gap-3 transition-all"
                >
                  VIEW MORE
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 border-b-2 border-white bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center py-12 border-2 border-white"
              >
                <div className="text-5xl md:text-6xl font-anton text-red mb-4">
                  {stat.number}
                </div>
                <p className="text-sm font-inter tracking-widest opacity-80">
                  {stat.label}
                </p>
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
            "TS Brands transformed our vision into a striking visual identity. Their brutalist approach is refreshingly bold."
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-red"></div>
            <h4 className="font-anton text-sm">JOHN SMITH</h4>
            <p className="text-xs opacity-60 font-inter">CEO, CREATIVE VENTURES</p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-b-2 border-white bg-black">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-clamp-h2 font-anton mb-6">READY TO CREATE?</h2>
          <p className="text-gray-300 font-inter mb-8">
            Let's collaborate on your next project. From concept to execution, we bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red text-black font-anton text-sm hover:bg-white transition-all duration-300"
          >
            START A PROJECT
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
