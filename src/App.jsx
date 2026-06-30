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
          <Route path="/" element={<Home />}></Route>
          <Route path="/detallePro/:id" element={<ProductDetail />}></Route>
        </Routes>
      </div>

          <TabBar />
    </main>
  );
}

export default App;
