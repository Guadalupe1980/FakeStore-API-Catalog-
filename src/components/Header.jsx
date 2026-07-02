import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import fondoHeader from "../assets/fondoHeader.png";
import perfiProgramador from "../assets/perfiProgramador.png";
import fondoHeaderDesktop from "../assets/fondoHeaderDesktop.jpg";

function Header({ search, setSearch }) {
  const [showshear, setShowShear] = useState(false);
  const location = useLocation();

  const categoriasDesktop = [
    { id: 1, name: "Electronics", apiName: "electronics" },
    { id: 2, name: "Jewelry", apiName: "jewelery" },
    { id: 3, name: "Men's", apiName: "men's clothing" },
    { id: 4, name: "Women's", apiName: "women's clothing" },
  ];

  return (
    <>
      {/* NAVBAR RESPONSIVO */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-100 max-w-7xl mx-auto w-full font-sans relative z-30 select-none">
        {/* Menú Hamburguesa (Izquierda Móvil) */}
        <button
          className={`md:hidden text-gray-800 hover:text-black cursor-pointer ${showshear ? "hidden" : "block"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>

        {/* LOGO ADAPTATIVO */}
        <div
          className={`items-center gap-2 ${showshear ? "hidden sm:flex" : "flex"} md:static md:translate-x-0 absolute left-1/2 -translate-x-1/2`}
        >
          <svg
            className="text-blue-600 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2z" />
          </svg>
          <Link
            to="/"
            className="text-blue-600 md:text-gray-950 text-xl font-black uppercase tracking-wider md:tracking-tight"
          >
            luxe<span className="hidden md:inline text-blue-600">.</span>
          </Link>

          {/* Menú Horizontal de Categorías (Solo Desktop) */}
          <div className="hidden md:flex items-center gap-6 text-[13px] font-medium ml-6">
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
                  className={`transition-colors ${location.pathname === urlEsperada ? "text-blue-600 font-bold" : "text-gray-500 hover:text-black"}`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* BLOQUE DERECHO (Buscador + Utilidades) */}
        <div
          className={`flex items-center gap-4 md:gap-6 ${showshear ? "w-full sm:w-auto justify-end" : "ml-auto"}`}
        >
          {/* LUPA / Input de búsqueda en Desktop */}
          <div className="relative flex items-center w-full md:w-64 lg:w-80">
            <div
              className={`${showshear ? "block w-full" : "hidden md:block w-full"}`}
            >
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="16px"
                  fill="currentColor"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </span>
              <input
                type="text"
                value={search}
                autoFocus={showshear}
                className="w-full bg-[#f4f6fa] text-gray-700 placeholder-gray-400 text-xs rounded-lg pl-9 pr-8 py-2 outline-none border border-transparent focus:border-gray-200 transition-all"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
              />
            </div>

            <button
              type="button"
              onClick={() => setShowShear((prev) => !prev)}
              className={`md:hidden ${showshear ? "absolute right-2.5 text-gray-500" : "relative text-gray-800"} hover:text-black cursor-pointer p-1 z-10`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </button>
          </div>

          {/* Icono Corazón Favoritos */}
          <button className="hidden md:block text-gray-800 hover:text-black transition-colors cursor-pointer p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>

          {/* Carrito en Escritorio */}
          <button className="hidden md:block relative text-gray-800 hover:text-black cursor-pointer p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="absolute -top-1 -right-1.5 bg-blue-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
              3
            </span>
          </button>

          {/* Bolsa en Móvil */}
          <button
            className={`relative text-gray-900 hover:text-black cursor-pointer p-1 md:hidden ${showshear ? "hidden" : "block"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22px"
              viewBox="0 -960 960 960"
              width="22px"
              fill="currentColor"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm240-640q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z" />
            </svg>
            <span className="absolute top-0 right-0 bg-blue-500 w-2 h-2 rounded-full border border-white"></span>
          </button>

          {/* Avatar del programador */}
          <div className="hidden md:flex w-7 h-7 rounded-full bg-emerald-100 border border-emerald-200 overflow-hidden items-center justify-center cursor-pointer ml-1">
            <img
              src={perfiProgramador}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      <div className="w-full md:max-w-7xl md:mx-auto px-0 sm:px-6 font-sans mt-0 md:mt-2">
        <header className="relative h-[75vh] sm:h-96 md:h-105 lg:h-120 w-full flex flex-col justify-center items-center sm:items-start bg-[#0c131f] text-white overflow-hidden rounded-none sm:rounded-3xl">
          <div className="absolute inset-0 z-0">
            <img
              src={fondoHeader}
              alt="Modelo Móvil"
              className="block md:hidden w-full h-full object-contain object-center opacity-30"
            />

            {/* Imagen Escritorio */}
            <img
              src={fondoHeaderDesktop}
              alt="Modelo Escritorio"
              className="hidden md:block md:w-full h-full object-cover object-right opacity-90"
            />
            <div className="block md:hidden absolute inset-0 bg-linear-to-t from-[#0a0f18] via-transparent to-transparent"></div>
            <div className="hidden md:block absolute inset-0 bg-linear-to-r from-[#0a0f18] via-[#0a0f18]/40 to-transparent"></div>
          </div>

          <section className="relative z-10 max-w-sm sm:max-w-xl mx-auto sm:mx-0 flex flex-col items-center sm:items-start text-center sm:text-left gap-4 px-6 sm:pl-12 md:pl-16 py-10">
            <span className="text-blue-500 text-[11px] font-extrabold tracking-[0.15em] uppercase sm:bg-blue-950/40 sm:px-2.5 sm:py-1 sm:rounded-md sm:border sm:border-blue-900/30">
              new collection 2026
            </span>

            {/* Título Principal */}
            <h1 className="text-white text-4xl md:text-5xl font-black tracking-tight leading-tight md:leading-none max-w-72.5 sm:max-w-md">
              Redefine Your{" "}
              <span className="text-blue-600 block sm:inline">
                Everyday Style
              </span>
            </h1>

            <p className="text-gray-300 text-xs md:text-sm font-normal leading-relaxed max-w-77.5 md:max-w-md opacity-90">
              <span className="block md:hidden">
                Discover our curated collection of premium essentials designed
                for the modern lifestyle.
              </span>
              <span className="hidden md:block">
                Explore our curated selection of premium electronics and
                high-fashion apparel tailored for the modern lifestyle.
              </span>
            </p>

            <div className="w-full flex flex-row gap-3 mt-4 px-0">
              <button className="w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-3.5 px-6 rounded-xl transition-colors shadow-md cursor-pointer text-center whitespace-nowrap">
                Shop Collection
              </button>
              <button className="w-auto bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold text-xs py-3.5 px-6 rounded-xl transition-all cursor-pointer text-center whitespace-nowrap">
                <span className="md:hidden">View Lookbook</span>
                <span className="hidden md:block">View Deals</span>
              </button>
            </div>
          </section>
        </header>
      </div>
    </>
  );
}

export default Header;
