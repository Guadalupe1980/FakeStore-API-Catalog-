import ProductDetail from "../components/ProductDetail";
import { Link } from "react-router-dom"; 
import useFetchProducts from "../hooks/useFetchProducts"; 

function ProductPage() {
  const { getproducto, loading } = useFetchProducts(); 

  if (loading) return <p>Cargando catálogo...</p>;

  return (
<div key={procategoria.id} className="bg-gray-300 p-5 rounded-xl">
  
  {/* Encapsulamos la imagen en el Link con target="_blank" */}
  <Link 
    to={`/detallePro/${procategoria.id}`} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block cursor-pointer hover:opacity-90 transition-opacity"
  >
    <img
      src={procategoria.image}
      alt={procategoria.title}
      className="w-full h-40 object-contain"
    />
  </Link>

  <h2 className="font-bold text-sm mt-2">{procategoria.title}</h2>
  <p className="text-blue-700 font-bold">${procategoria.price}</p>
</div>
  );
}


export default ProductPage;