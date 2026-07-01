import { Link } from "react-router-dom"; 
import useFetchProducts from "../hooks/useFetchProducts"; 

function ProductPage() {
  const { getproducto, loading } = useFetchProducts(); 

  if (loading) return <p className="p-10 text-center font-bold text-blue-700">Cargando catálogo...</p>;

  const productosAsegurados = Array.isArray(getproducto) ? getproducto : [];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {productosAsegurados.map((procategoria) => (
        <div key={procategoria.id} className="bg-gray-300 p-5 rounded-xl">
          
          <Link 
            to={`/detallePro/${procategoria.id}`} 
            rel="noopener noreferrer"
            className="block cursor-pointer bg-white p-2 rounded-xl h-40 items-center justify-center hover:scale-[1.02] transition-transform duration-200"
          >
            <img
              src={procategoria.image}
              alt={procategoria.title}
              className="max-h-full max-w-full object-contain"
            />
          </Link>

        </div>
      ))}
    </div>
  );
}

export default ProductPage;