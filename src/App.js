import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
