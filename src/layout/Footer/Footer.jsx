import './Footer.css';


export default function Footer() {
  return (
    <>
<footer className="main-footer">
  <section>
    <div className="footer-redes-sociales">
      <h3>Redes Sociales</h3>
      <br />
      <ul>
        <a href="">
          <i className="fa-brands fa-facebook-f fa-sm i2" /> facebook
        </a>
        <br />
        <a href="">
          {" "}
          <i className="fa-brands fa-instagram fa-2xs i2" /> instagram
        </a>
        <br />
        <a href="">
          <i className="fa-brands fa-linkedin fa-2xs i2" />
          Linkedin
        </a>
      </ul>
    </div>
  </section>
  <br />
  <section>
    <h3>
      <img
        className="i3"
        src="assets/images/banner-casa-colombia.webp"
        alt=""
      />
    </h3>
    <p> 2025 - Copyright © </p>
  </section>
  <section>
    <h3>Contacto</h3>
    <ul>
      <br />
      <li>tel: 3248-579642</li>
      <li> casa.colombia@gmail.com</li>
      <li> libertad-bolivares </li>
    </ul>
  </section>
</footer>

    </>
  );
}


/* =============== MAIN FOOTER ===============
      <footer className="main-footer">
        <section>
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>Instragram</li>
            <li>Linkedin</li>
          </ul>
        </section>
        <section>
          <h3>BrandCompany (LOGO)</h3>
          <p> 2025 - Copyright © </p>
        </section>
        <section>
          <h3>Contacto</h3>
          <ul>
            <li>Telefono: 123456789</li>
            <li>Email: correo@gmail.com</li>
            <li>Direccion: 123</li>
          </ul>
        </section>
      </footer>*/