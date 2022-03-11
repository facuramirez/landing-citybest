export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column justify-content text-center center align-items center">
              <p className="footer-title mb-3 text-primary text-bold">
                Síguenos
              </p>

              <div className="social-icons mb-3">
                {/* <a className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a> */}

                <a className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a className="social-icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>

              <small style={{
                cursor: 'pointer',
                
              }} onClick={() => {
                window.location.href = '/terminos-condiciones-y-politicas-de-privacidad';
              }}
                className="mb-2 footer-policy">
                Terminos & Condiciones<br />
              </small>

              <small className="mb-2 footer-policy">
                © {new Date().getFullYear()} Citybest Todos los derechos reservados. <br />
              </small>


              <small className="footer-countries">
                Colombia - Perú - Chile - Mexico
              </small>

              <div className="mt-2 d-flex justify-content-center">
                <img
                  src="img/arrows-primary.svg"
                  style={{ width: 50, height: 50 }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
