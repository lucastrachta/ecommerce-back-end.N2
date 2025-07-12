import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SectionProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Datos que quieres subir
    const newProduct = {
      name: "Producto de prueba",
      price: 100,
      description: "Este producto se subió automáticamente",
    };

    // 1. Hacer POST para subir producto
    axios.post("https://685753ee21f5d3463e54fcf6.mockapi.io/integrador2", newProduct)
      .then((postResponse) => {
        console.log("Producto subido:", postResponse.data);

        // 2. Después de subir, hacer GET para obtener productos
        return axios.get("https://685753ee21f5d3463e54fcf6.mockapi.io/integrador2");
      })
      .then((getResponse) => {
        setProducts(getResponse.data);
      })
      .catch((error) => {
        console.error("Error al subir o traer productos:", error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
