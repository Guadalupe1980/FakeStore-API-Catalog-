import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import TabBar from "./components/TabBar";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <main>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductPage />} />
          <Route path="/detallePro/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    
      <TabBar />
    </main>
  );
}

export default App;