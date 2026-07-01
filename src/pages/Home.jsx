import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import CategoryCircle from "../components/CategoryCircle";
import useFetchProducts from "../hooks/useFetchProducts";
import { useState } from "react";
 
function Home() {
  const { getproducto, loading, error, reintentar } = useFetchProducts();  
  const [search, setSearch] = useState("");
  
const arrayProductos = Array.isArray(getproducto) ? getproducto : [];

  const searchFilter = arrayProductos.filter((product) =>
    product?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <Header search={search} setSearch={setSearch} /> 
      
      <ProductCard 
        products={searchFilter} 
        loading={loading} 
        error={error} 
        reintentar={reintentar} 
      />
      <CategoryCircle />
    </div>
  );
}

export default Home;