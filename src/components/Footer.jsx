function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t-2 border-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b-2 border-white pb-8">
          {/* Brand */}
          <div>
            <h3 className="text-red text-2xl mb-2">TS BRANDS ZIM</h3>
            <p className="text-sm text-gray-400">Creative Agency | Zimbabwe</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-anton text-white mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/graphics-design" className="hover:text-red transition-colors">Graphics Design</a></li>
              <li><a href="/photography" className="hover:text-red transition-colors">Photography</a></li>
              <li><a href="/clothing" className="hover:text-red transition-colors">Clothing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-anton text-white mb-4">CONTACT</h4>
            <p className="text-sm mb-2">Email: info@tsbrandszim.com</p>
            <p className="text-sm">WhatsApp: +263 77 123 4567</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 tracking-widest">
          <p>TS BRANDS ZIMBABWE © {currentYear}</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer