import axios from "axios"
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
 

const URL = "https://685753ee21f5d3463e54fcf6.mockapi.io"

export default function SectionProducts() {

    const  [products , setProducts] =  useState([])
    console.log("Contenido actual de products:", products);

useEffect(() => {
  getProducts();
},[])


async function getProducts() {
  try {
const response = await axios.get(`${URL}/integrador2`);
console.log(response.data) 
setProducts(response.data) }

catch (error) {}

}

return(

<>

<section className="section-product">
  <br />
  <h2 className="section-title">PRODUCTOS DESTACADOS</h2>
  <br /> <br />
  <div className="product.container">

    
{products.map((product) => (


 <ProductCard  key={product.id} product={product}/>
   
)    ) }

</div>
  
</section>

</>

)
}