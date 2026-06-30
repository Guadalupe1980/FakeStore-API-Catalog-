import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import CategoryCircle from "../components/CategoryCircle";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <Header />
      <ProductCard /> 
      <CategoryCircle />
    </div>
  );
}

export default Home;