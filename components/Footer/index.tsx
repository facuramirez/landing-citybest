export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div 
        className="row"
        >
          <div className="col-12">
            <div className="d-flex flex-column justify-content text-center center align-items center">
              <p className="footer-title mb-3 text-primary text-bold">
                Citybest está presente en México, Colombia, Uruguay y Chile
              </p> 

              <div className="social-icons mb-3">
                {/* <a className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a> */}

                {/* <a className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a className="social-icon">
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>

              <small
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.location.href =
                    "/terminos-condiciones-y-politicas-de-privacidad";
                }}
                className="mb-2 footer-policy"
              >
                Terminos & Condiciones
                <br />
              </small>

              <small className="mb-2 footer-policy">
                © {new Date().getFullYear()} Citybest Todos los derechos
                reservados. <br />
              </small>

              <small className="footer-countries" style={{marginTop: '1rem'}}>
                Colombia - Uruguay - Chile - Mexico
              </small>

              <div style={{ marginTop: "5px" }}>
                <img width={"4%"} src="img/paises/Colombia.png" alt="" />
                <img
                  width={"4%"}
                  style={{ margin: "0 1rem" }}
                  src="img/paises/Uruguay.png"
                  alt=""
                />
                <img
                  width={"4%"}
                  style={{ marginRight: "1rem" }}
                  src="img/paises/Chile.png"
                  alt=""
                />
                <img width={"4%"} src="img/paises/Mexico.png" alt="" />
              </div>
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
    </div>
  );
}
