import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import useFetchProducts from "../hooks/useFetchProducts";
import CategoryCircle from "../components/CategoryCircle";
 
function Home() {
  const { getproducto, loading, error, reintentar } = useFetchProducts();
  const [search, setSearch] = useState("");
  
  const { category } = useParams(); 
  
  const arrayProductos = Array.isArray(getproducto) ? getproducto : [];
  
  // Filtro inteligente combinando el buscador por texto y la navegación por categorías
  const searchFilter = arrayProductos.filter((product) => {
    const matchesSearch = product?.title?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !category || product?.category?.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header search={search} setSearch={setSearch} />
      
      {/* Componente encargado de renderizar tus tarjetas de productos */}
      <ProductCard 
        products={searchFilter} 
        loading={loading} 
        error={error} 
        reintentar={reintentar} 
      /> 

      <div className="md:hidden">
        <CategoryCircle currentCategory={category} />
      </div>
      
    </div>
  );
}

export default Home;