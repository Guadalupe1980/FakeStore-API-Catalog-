import { useParams, useNavigate } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    getproducto,
    loading,
    error,
    message,
    reintentar: traerProductos,
  } = useFetchProducts();

  if (loading)
    return (
      <p className="flex items-center justify-center text-xl font-bold text-blue-700 mt-5">
        Cargando datos...
      </p>
    );

  if (error || message)
    return (
      <div className="p-10 text-center">
        <p className="font-bold text-red-500 mb-4">
          {message || "Error al cargar"}
        </p>
        <button
          onClick={traerProductos}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Volver a intentar
        </button>
      </div>
    );

  if (
    !getproducto ||
    (Array.isArray(getproducto) && getproducto.length === 0)
  ) {
    return <p className="p-10 text-center">No se encontró el producto.</p>;
  }

  const procategoria = Array.isArray(getproducto)
    ? getproducto[0]
    : getproducto;

  return (
    <>
      <div className="bg-white p-10 shadow md:max-w-[60%] md:mx-auto">
        <button onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2.5rem"
            viewBox="0 -960 960 960"
            width="2.5rem"
            fill="gray"
          >
            <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </button>
        <section className="shadow-md p-3">
          <span className="text-blue-700 flex justify-end uppercase font-bold text-sm p-1 rounded">
            {procategoria?.category}
          </span>
          <div className="bg-gray-300 p-5 rounded-xl">
            <img
              src={procategoria?.image}
              alt={`producto ${procategoria?.title || ""}`}
              className="max-h-64 mx-auto object-contain"
            />
          </div>

          <h1 className="font-bold text-xl tracking-tighter text-center mb-2 mt-2">
            {procategoria?.title}
          </h1>
          <p className="text-md text-justify mt-3">
            {procategoria?.description}
          </p>
          <div className="flex justify-between gap-2 text-sm items-center font-bold p-4">
            <div>
              <p className="block font-bold text-blue-600 hover:text-red-700 text-2xl">
                ${procategoria?.price}
              </p>
            </div>
            <div className="flex gap-1 items-center text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#facc15"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {procategoria?.rating?.rate || "0.0"}
            </div>
          </div>

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
      </div>
    </>
  );
}

export default ProductDetail;
