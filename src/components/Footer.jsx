function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 w-full font-sans select-none">
      
      {/* SECCIÓN SUPERIOR: 4 Columnas principales */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* COLUMNA 1: Logo y Descripción de la Marca */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg 
              className="text-blue-600" 
              xmlns="http://www.w3.org/2000/svg" 
              height="22px" 
              viewBox="0 -960 960 960" 
              width="22px" 
              fill="currentColor"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm240-640q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/>
            </svg>
            <span className="text-gray-900 text-lg font-semibold uppercase tracking-tight">
              luxe<span className="text-blue-600">.</span>
            </span>
          </div>
          <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs">
            Your one-stop destination for premium lifestyle products, from jewelry to electronics. Quality guaranteed.
          </p>
          
          {/* Iconos de Redes Sociales */}
          <div className="flex gap-2 mt-2">
            <button className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer text-xs">
              <span className="font-semibold">☍</span>
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer text-xs">
              <span className="font-semibold">@</span>
            </button>
          </div>
        </div>

        {/* COLUMNA 2: Categorías */}
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-900 text-xs font-bold tracking-widest uppercase">Categories</h3>
          <ul className="flex flex-col gap-2.5 text-[13px] text-gray-500">
            <li className="hover:text-black transition-colors cursor-pointer">Electronics</li>
            <li className="hover:text-black transition-colors cursor-pointer">Jewelry</li>
            <li className="hover:text-black transition-colors cursor-pointer">Men's Fashion</li>
            <li className="hover:text-black transition-colors cursor-pointer">Women's Fashion</li>
          </ul>
        </div>

        {/* COLUMNA 3: Soporte */}
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-900 text-xs font-bold tracking-widest uppercase">Support</h3>
          <ul className="flex flex-col gap-2.5 text-[13px] text-gray-500">
            <li className="hover:text-black transition-colors cursor-pointer">Help Center</li>
            <li className="hover:text-black transition-colors cursor-pointer">Shipping Policy</li>
            <li className="hover:text-black transition-colors cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-black transition-colors cursor-pointer">Order Tracking</li>
          </ul>
        </div>

        {/* COLUMNA 4: Newsletter */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-900 text-xs font-bold tracking-widest uppercase">Newsletter</h3>
          <p className="text-gray-500 text-[13px] leading-relaxed">
            Get the latest updates on new arrivals and sales.
          </p>
          <div className="flex flex-col gap-2 mt-1 w-full max-w-xs">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-[#f4f6fa] text-gray-700 placeholder-gray-400 text-xs rounded-lg px-4 py-2.5 outline-none border border-transparent focus:border-gray-200 transition-all w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2.5 px-4 rounded-lg transition-colors shadow-sm cursor-pointer w-full text-center">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* SECCIÓN INFERIOR: Copyright y Enlaces Legales */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-400">
          <div>
            © 2026 Luxe Store. Powered by FakeStore API.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-gray-600 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-gray-600 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-600 cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;