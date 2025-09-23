import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Dashboard from "../src/pages/Dashboard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Article" element={<ArticlePage />} />
          <Route path="/Product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
