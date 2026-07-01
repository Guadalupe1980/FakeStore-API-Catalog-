import { Link } from "react-router-dom";

function CategoryCircle({ currentCategory }) {
  const listaCategorias = [
    { id: 1, nombre: "Electronics", apiName: "electronics", icono: <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="black"><path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v480h280v160H320Zm313.5-246.5Q661-394 700-394t66.5 27.5Q794-339 794-300t-27.5 66.5Q739-206 700-206t-66.5-27.5Q606-261 606-300t27.5-66.5ZM840-640q17 0 28.5 11.5T880-600v440q0 17-11.5 28.5T840-120H560q-17 0-28.5-11.5T520-160v-440q0-17 11.5-28.5T560-640h280Zm-183 57q-17 17-17 43t17 43q17 17 43 17t43-17q17-17 17-43t-17-43q-17-17-43-17t-43 17Zm142.5 382.5Q840-241 840-300t-40.5-99.5Q759-440 700-440t-99.5 40.5Q560-359 560-300t40.5 99.5Q641-160 700-160t99.5-40.5Z"/></svg> },
    { id: 2, nombre: "Jewelry", apiName: "jewelery", icono: <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="black"><path d="M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z"/></svg> },
    { id: 3, nombre: "Men's", apiName: "men's clothing", icono: <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="black"><path d="M430.5-680.5Q410-701 410-730t20.5-49.5Q451-800 480-800t49.5 20.5Q550-759 550-730t-20.5 49.5Q509-660 480-660t-49.5-20.5ZM400-160v-200h-40v-180q0-33 23.5-56.5T440-620h80q33 0 56.5 23.5T600-540v180h-40v200H400Z"/></svg> },
    { id: 4, nombre: "Women's", apiName: "women's clothing", icono: <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="black"><path d="M120-160q-17 0-28.5-11.5T80-200q0-10 4-18.5T96-232l344-258v-70q0-17 12-28.5t29-11.5q25 0 42-18t17-43q0-25-17.5-42T480-720q-25 0-42.5 17.5T420-660h-80q0-58 41-99t99-41q58 0 99 40.5t41 98.5q0 47-27.5 84T520-526v36l344 258q8 5 12 13.5t4 18.5q0 17-11.5 28.5T840-160H120Zm120-80h480L480-420 240-240Z"/></svg> }
  ];

  return (
    <div className="py-6 bg-white border-b border-gray-100 w-full overflow-hidden">
      
      <div className="bg-gray-200 p-5">
      <h2 className="font-bold text-xl text-gray-900 px-5 mb-4">Shop by Category</h2>
      
      <div className="flex gap-6 overflow-x-auto px-5 pb-2 scrollbar-none mb-15">
        
        {/* Enlace circular ALL para limpiar filtro e ir a la raíz */}
        <div className="flex flex-col items-center gap-2 text-center min-w-17.5">
          <Link
            to="/"
            className={`w-16 h-16 rounded-full flex items-center justify-center text-xl transition-all ${
              !currentCategory ? "shadow-md scale-105" : "bg-gray-50 text-gray-700"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="black"><path d="M280-280v-400h400v400H280Zm80-80h240v-240H360v240ZM200-200v80q-33 0-56.5-23.5T120-200h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80q0-33 23.5-56.5T200-840v80Zm80 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80q0 33-23.5 56.5T760-120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840-760h-80Z"/></svg>
          </Link>
          <span className="text-xs font-medium text-gray-600">All</span>
        </div>

        {/* Mapeo dinámico de los círculos con la URL reglamentaria de la actividad */}
        {listaCategorias.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center gap-2 text-center min-w-17.5">
            <Link
              to={`/products/category/${cat.apiName}`}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-xl transition-all ${
                currentCategory === cat.apiName ? "shadow scale-105" : "shadow-md text-gray-800"
              }`}
            >
              <span>{cat.icono}</span>
            </Link>
            <span className="text-xs font-medium text-gray-600">{cat.nombre}</span>
          </div>
        ))}

      </div>
    </div>
    </div>
  );
}

export default CategoryCircle;