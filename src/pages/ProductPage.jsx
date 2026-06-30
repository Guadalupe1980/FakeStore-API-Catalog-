import ProductDetail from "../components/ProductDetail";
import { Link } from "react-router-dom"; 
import useFetchProducts from "../hooks/useFetchProducts"; 

function ProductPage() {
  const { getproducto, loading } = useFetchProducts(); 

  if (loading) return <p>Cargando catálogo...</p>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {getproducto.map((procategoria) => (
        <div key={procategoria.id} className="bg-gray-300 p-5 rounded-xl">
          
          <Link to={`/detallePro/${procategoria.id}`} className="block cursor-pointer">
            <img
              src={procategoria.image}
              alt={procategoria.title}
              className="w-full h-40 object-contain"
            />
          </Link>

          <h2 className="font-bold text-sm mt-2">{procategoria.title}</h2>
          <p className="text-blue-700 font-bold">${procategoria.price}</p>
        </div>
      ))}
    </div>
  );
}


export default ProductPage;