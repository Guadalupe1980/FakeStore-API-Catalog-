import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import fondoHeader from "../assets/fondoHeader.png";

function Header({ search, setSearch }) {
  const [showshear, setShowShear] = useState(false);
  const location = useLocation(); // Detecta la URL actual para pintar los enlaces activos

  const categoriasDesktop = [
    { id: 1, name: "Electronics", apiName: "electronics" },
    { id: 2, name: "Jewelry", apiName: "jewelery" },
    { id: 3, name: "Men's", apiName: "men's clothing" },
    { id: 4, name: "Women's", apiName: "women's clothing" }
  ];

  return (
    <>
      <nav className="flex justify-between p-5 items-center bg-white border-b border-gray-100 max-w-7xl mx-auto w-full">
        
        <div className="flex items-center gap-6">
          <span className="text-gray-950 text-xl font-black uppercase tracking-wider flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" className="text-blue-600">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span>luxe.</span>
          </span>

          {/* Menú Horizontal para Computadoras (Desktop) */}
          <div className="hidden md:flex items-center gap-5 text-sm font-semibold">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === "/" ? "text-blue-600 font-bold" : "text-gray-500 hover:text-black"}`}
            >
              All
            </Link>

            {categoriasDesktop.map((cat) => {
              const urlEsperada = `/products/category/${cat.apiName}`;
              return (
                <Link
                  key={cat.id}
                  to={urlEsperada}
                  className={`transition-colors ${
                    location.pathname === urlEsperada ? "text-blue-600 font-bold" : "text-gray-500 hover:text-black"
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* BUSCADOR */}
        <div className="flex gap-3 items-center">
          <div className='relative flex items-center'>
            {showshear && (
              <input 
                type="text" 
                value={search}
                autoFocus 
                className='border border-gray-300 rounded-xl outline-none pl-3 pr-9 py-1 w-44 text-sm bg-white text-gray-800' 
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar producto..."
              />
            )}

            <button 
              type="button"
              onClick={() => setShowShear((prev) => !prev)}
              className={`${showshear ? 'absolute right-2 text-gray-500' : 'relative text-gray-400'} hover:text-gray-600 focus:outline-none cursor-pointer p-1 z-10`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="currentColor" className="pointer-events-none">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <header className="relative h-[80vh] w-full flex flex-col justify-center items-center text-center px-6 bg-slate-950 text-white overflow-hidden">
        <section className="absolute inset-0 z-0 opacity-50">
          <img src={fondoHeader} alt="Modelo" className="w-full h-[93%] object-contain object-bottom scale-110" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0d1622] via-transparent to-transparent"></div>
        </section>
        <section className="relative z-10 max-w-md flex flex-col items-center gap-2">
          <span className="text-blue-600 opacity-80 text-[13px] font-bold tracking-widest uppercase">new collection 2026</span>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight">Redefine Your Everyday Style</h1>
        </section>
      </header>
    </>
  );
}

export default Header;