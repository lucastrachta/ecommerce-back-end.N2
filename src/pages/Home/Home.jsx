import SectionInfo from "../../components/SectionInfo/SectionInfo";
import SectionProducts from "../../components/SectionProducts/SectionProducts";
import CrearProducto from "../../components/CrearProducto/CrearProducto";




export default function Home() {
  return (
    <>     
      <h1>Home</h1>
      <p>Contenido de Home o Pagina Principal</p>
   
      <SectionInfo />
      <SectionProducts />
      <CrearProducto />

    </>
  );
}