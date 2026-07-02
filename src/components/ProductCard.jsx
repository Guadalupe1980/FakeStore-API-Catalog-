import { Link } from "react-router-dom";

// Recibimos todo desde las props del padre
function ProductCard({ products, loading, error, reintentar }) {
  // Controlamos la carga usando la prop compartida
  if (loading)
    return (
      <p className="flex items-center justify-center text-xl font-bold text-blue-700 mt-5">
        Cargando datos...
      </p>
    );

  // Controlamos el error usando la prop compartida
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-60 p-6 text-center bg-gray-900 rounded-2xl border border-gray-800 max-w-sm mx-auto my-10 shadow-xl">
        <div className="w-12 h-12 rounded-full bg-red-950/50 flex items-center justify-center text-red-500 mb-4 border border-red-900/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
        </div>
        <p className=" text-lg font-semibold text-gray-200 mb-2">
          Error de conexión: 404 (Not Found)❗
        </p>
        <button
          onClick={reintentar}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/40 cursor-pointer"
        >
          Reintentar Petición de datos
        </button>
      </div>
    );
  }

  const acortarTexto = (texto, maxCaracteres = 20) => {
    if (!texto) return "";
    if (texto.length <= maxCaracteres) return texto;
    return texto.substring(0, maxCaracteres);
  };

  const listaA_Mostrar = products || [];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <article className="flex justify-between items-center mb-6">
        <h1 className=" font-bold text-2xl text-gray-900">New Arrivals</h1>
      </article>
      {/* Mensaje si no hay coincidencias */}
      {listaA_Mostrar.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-gray-400 mb-3 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-700">
            No se encontraron productos
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Intenta con otros términos de búsqueda.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 gap-x-4 gap-y-8">
            {/* Mapeamos la lista limpia y filtrada que viene desde el Home */}
            {listaA_Mostrar.map((getpro) => (
              <section
                key={getpro.id}
                className="flex flex-col bg-white h-[93%] md:shadow-md md:p-5 md:border md:border-gray-100 md:rounded-md"
              >
                <Link to={`/detallePro/${getpro.id}`} className="w-full">
                  <div className="relative aspect-3/4 w-full bg-[#edefef] rounded-2xl md:rounded overflow-hidden p-5 flex items-center justify-center">
                    <img
                      src={getpro.image}
                      alt={`Foto de ${getpro.title}`}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>
                </Link>

                <span className="uppercase mt-2 text-slate-400 text-[12px] font-semibold tracking-widest block">
                  {getpro.category}
                </span>

                <Link to={`/detallePro/${getpro.id}`}>
                  <p className="font-bold text-stone-800 text-sm min-h-10">
                    {acortarTexto(getpro.title, 21)}
                  </p>
                </Link>

                <span className="block font-bold text-blue-600 text-base my-0.5 -mt-4">
                  ${" "}
                  {typeof getpro.price === "number"
                    ? getpro.price.toFixed(2)
                    : getpro.price}
                </span>
                <button className="bg-[#081c3a] hover:bg-[#0f2d5a] transition-colors text-white text-[13px] rounded-xl w-full p-3 font-semibold flex justify-center items-center gap-2 mt-1 shadow-sm mb-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                  </svg>
                  Add to card
                </button>
              </section>
            ))}
          </div>

          <div className="hidden md:flex flex-col items-center justify-center gap-3 mt-14 mb-6">
            <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 font-bold text-xs py-3 px-7 rounded-xl transition-all shadow-xs cursor-pointer active:scale-98">
              Load More Products
            </button>
            
            <span className="text-gray-400 text-xs font-normal">
              Showing {listaA_Mostrar.length} of 20 products
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard;