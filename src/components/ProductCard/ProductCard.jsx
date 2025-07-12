import SectionProducts from "../SectionProducts/SectionProducts"


export default function ProductCard ({ product }) {

return(

<>

<article className="card" key={product.id}>
      <div className="div-article">
        <div className="card-header">
          <img
            className="arepa-1"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="card-body">
          <h3>{product.name}</h3>
          <p>U$S {product.price}</p>
          <button>comprar</button>
        </div>
      </div>
    </article>








</>


)
}