export default function SectionInfo () {
return(
<>
<section className="section-info">
  <div className="info-container">
    <div className="encabezado">
      <h1>CASA COLOMBIA RESTAURANT</h1>
    </div>

    <div className="parrafo">
      <p style={{ fontSize: 15 }}>
        Bienvenido a nuestra web donde encontrás las comidas más regionales de
        América del Sur y Latinoamérica, y por supuesto comida colombiana como
        las arepas y el caldo de costilla. Son un símbolo de identidad y orgullo
        cultural de Colombia.
      </p>
    </div>

    <div className="imagen-centrada">
      <img
        className="imagen-1"
        src="/images/food-1898194_1280.jpg"
        alt="comida"
        width="120px"
        height="120px"
      />
    </div>
  </div>
</section>



</>  )




}