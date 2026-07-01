import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail";
import Home from "./pages/Home";
import TabBar from "./components/TabBar";

function App() {
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/productos" element={<ProductPage />} />
          <Route path="/detallePro/:id" element={<ProductDetail />} />
          
          <Route path="/products/category/:category" element={<Home />} />
        </Routes>
      </div>

      <TabBar />
    </main>
  );
}

export default App;