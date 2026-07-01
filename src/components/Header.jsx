import fondoHeader from "../assets/fondoHeader.png";
import SearchBar from "./SearchBar";

function Header({ search, setSearch }) {
  return (
    <>
      <nav className="flex justify-between p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="29px"
          viewBox="0 -960 960 960"
          width="25px"
          fill="currentColor"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <span className="text-blue-600 text-xl font-extrabold uppercase tracking-wider">
          luxe
        </span>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <input
              type="text"
              value={search}
              className="border border-gray-300 relative rounded-xl outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="currentColor"
              className="absolute top-1 text-gray-400"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="23px"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />{" "}
            <path
              fill="currentColor"
              d="M4 22V6h4q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h4v16zm6-16h4q0-.825-.587-1.412T12 4t-1.412.588T10 6m-2 5h2V8H8zm6 0h2V8h-2z"
            />
          </svg>
        </div>
      </nav>

      <header className="relative h-[80vh] w-full flex flex-col justify-center items-center text-center px-6 bg-slate-950 text-white overflow-hidden">
        <section className=" absolute inset-0 z-0 opacity-50">
          <img
            src={fondoHeader}
            alt="Modelo"
            className="w-full h-[93%] object-contain object-bottom scale-110]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0d1622] via-transparent to-transparent"></div>
        </section>

        <section className="relative z-10 max-w-md flex flex-col items-center gap-2">
          <span className="text-blue-600  opacity-80 text-[13px] font-bold tracking-widest uppercase">
            new collection 2024
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight ">
            Redefine Your Everyday Style
          </h1>
          <p className="text-gray-400 text-sm max-w-xs mt-1">
            Discover our curated collection of premium essentials designed for
            the modern lifestyle
          </p>

          <div className="flex flex-col gap-3 w-full mt-6">
            <button className="w-full bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-xl">
              Shop Collection
            </button>
            <button className="w-full bg-transparent border border-gray-600 text-white font-semibold py-3.5 px-6 rounded-xl">
              View Lookbook
            </button>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
