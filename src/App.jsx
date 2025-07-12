import Header from "./layout/header/Header";
import Footer from './layout/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import AdminProduct from './pages/AdminProduct/AdminProduct';
import CrearProducto from './components/CrearProducto/CrearProducto';
import SectionInfo from './components/SectionInfo/SectionInfo';
import SectionProducts from './components/SectionProducts/SectionProducts';
import './App.css';


export default function App() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Routes>
    
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-product" element={<AdminProduct />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}