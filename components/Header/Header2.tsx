import { useEffect, useState } from "react";
import {
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
  PopoverContent,
} from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { geoFindMe, PaisesAutorizados } from "../../utils/utils";
import Cookies from "js-cookie";

export default function Header2() {
  const [styleNavbar, setstyleNavbar] = useState({});
  const [countrySelected, setcountrySelected] = useState(null);
  const [visibleTrigger, setvisibleTrigger] = useState(false);
  const [country, setcountry] = useState(null);

  useEffect(() => {
    if (Cookies.get("country")) {
      setcountry(Cookies.get("country"));
    } else {
      geoFindMe((result) => {
        setcountry(result.country_name);
        Cookies.set("country", result.country_name);
      });
    }
  }, []);

  useEffect(() => {
    PaisesAutorizados.forEach((pais) => {
      if (pais.nombre === country) {
        setcountrySelected({
          nombre: pais.nombre,
          img: pais.img,
        });
      }
    });
  }, [country]);

  useEffect(() => {
    if (isMobile) {
      setstyleNavbar({
        top: 0,
        left: 0,
      });
    } else {
      setstyleNavbar({
        zIndex: 3,
        position: "absolute",
        top: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        minWidth: "100%",
        opacity: 0.8,
      });
    }
    return () => {
      setstyleNavbar({});
    };
  }, [isMobile]);

  return (
    <div>
      <Navbar style={styleNavbar} expand="md" className="main-navigation2">
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="mr-auto mr-md-1 ml-4 main-menu justify-content-md-end"
        >
          <Partners />

          <Nav className="me-auto" navbar fill>
            {menuItems.map((e) => (
              <OverlayTrigger
                show={visibleTrigger}
                onToggle={() => setvisibleTrigger(!visibleTrigger)}
                trigger="click"
                placement="bottom-start"
                overlay={
                  e.label == "PAISES" ? (
                    <Popover id="popover-basic">
                      <PopoverContent>
                        <ListCountrys
                          setcountry={setcountry}
                          setvisibleTrigger={setvisibleTrigger}
                          visibleTrigger={visibleTrigger}
                        />
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <Popover style={{ display: "none" }} id="popover-basic">
                      <PopoverContent>
                        <ListCountrys
                          setcountry={setcountry}
                          setvisibleTrigger={setvisibleTrigger}
                          visibleTrigger={visibleTrigger}
                        />
                      </PopoverContent>
                    </Popover>
                  )
                }
              >
                <Nav.Link
                  key={e.key}
                  href={e.label !== "PAISES" ? e.link : "#"}
                  target={e.key === "ayuda-conductor" && "_blank"}
                >
                  <NavIcon
                    icon={
                      e.label === "PAISES" && countrySelected
                        ? countrySelected.img
                        : e.icon
                    }
                  />
                  <p className="linknavs2">
                    {e.label === "PAISES" && countrySelected
                      ? countrySelected.nombre
                      : e.label}
                  </p>
                </Nav.Link>
              </OverlayTrigger>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

function NavIcon({ icon }) {
  return (
    <img
      style={{
        width: "80%",
      }}
      src={`img/${icon}`}
      className="nav-icon"
    />
  );
}

const menuItems = [
  {
    key: "ayuda-conductor",
    label: "AYUDA AL CONDUCTOR",
    icon: "AYUDAALCONDUCTOR.png",
    link: "https://api.whatsapp.com/send?phone=56994179310&text=Necesito%20informaci%C3%B3n",
  },
  {
    key: "help-client",
    label: "SERVICIO AL CLIENTE",
    icon: "ATENCIONALCLIENTE.png",
    link: "/",
  },
  {
    key: "PAISES",
    label: "PAISES",
    icon: "ICONOPAISES.png",
    link: "/",
  },
];

const ListCountrys = ({ setcountry, setvisibleTrigger, visibleTrigger }) => {
  const HideAndShowCountry = (country: string) => {
    setcountry(country);
    Cookies.set("country", country);
    setvisibleTrigger(!visibleTrigger);
  };
  return (
    <div className="container">
      <div
        className="row"
        style={{
          cursor: "pointer",
          marginBottom: "5px",
          border: "1px solid #ccc",
        }}
        onClick={() => HideAndShowCountry("Mexico")}
      >
        <div className="col">
          <img
            style={{
              width: "10%",
            }}
            src="img/paises/Mexico.png"
            className="img-fluid"
          />
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              fontFamily: "SantanderFont",
              marginLeft: 10,
            }}
          >
            Mexico
          </span>
        </div>
      </div>

      <div
        className="row"
        style={{
          cursor: "pointer",
          marginBottom: "5px",
          border: "1px solid #ccc",
        }}
        onClick={() => HideAndShowCountry("Colombia")}
      >
        <div className="col">
          <img
            style={{
              width: "10%",
            }}
            src="img/paises/Colombia.png"
            className="img-fluid"
          />
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              fontFamily: "SantanderFont",
              marginLeft: 10,
            }}
          >
            Colombia
          </span>
        </div>
      </div>

      <div
        className="row"
        style={{
          cursor: "pointer",
          marginBottom: "5px",
          border: "1px solid #ccc",
        }}
        onClick={() => HideAndShowCountry("Uruguay")}
      >
        <div className="col">
          <img
            style={{
              width: "10%",
            }}
            src="img/paises/Uruguay.png"
            className="img-fluid"
          />
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              fontFamily: "SantanderFont",
              marginLeft: 10,
            }}
          >
            Uruguay
          </span>
        </div>
      </div>

      <div
        className="row"
        style={{
          cursor: "pointer",
          marginBottom: "5px",
          border: "1px solid #ccc",
        }}
        onClick={() => HideAndShowCountry("Chile")}
      >
        <div className="col">
          <img
            style={{
              width: "10%",
            }}
            src="img/paises/Chile.png"
            className="img-fluid"
          />
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              fontFamily: "SantanderFont",
              marginLeft: 10,
            }}
          >
            Chile
          </span>
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div
      style={{
        maxWidth: "60%",
      }}
    >
      <img
        style={{
          width: "2%",
          paddingLeft: 4,
          marginRight: 4,
        }}
        src="img/partners/flecha.png"
        className="img-fluid"
      />
      <span
        style={{
          paddingRight: 7,
        }}
      >
        Paga con
        <img
          onClick={() => window.open("https://www.mercadopago.cl/", "_blank")}
          style={{
            width: "15%",
            paddingLeft: 4,
            marginRight: 4,
            marginLeft: 4,
            cursor: "pointer",
          }}
          src="img/partners/MERCADOPAGO.png"
          className="img-fluid"
        />
      </span>

      <img
        style={{
          width: "9%",
          paddingLeft: 4,
          marginRight: 10,
        }}
        src="img/fpay-boton-solo.png"
        className="img-fluid"
      />

      <img
        style={{
          width: "2%",
          paddingLeft: 4,
          marginRight: 4,
        }}
        src="img/partners/honorcell.png"
        className="img-fluid"
      />
      <span>
        Smartphone{""}
        <img
          onClick={() => {
            window.open("https://www.hihonor.com/cl/", "_blank");
          }}
          style={{
            width: "10%",
            paddingLeft: 4,
            marginRight: 4,
            cursor: "pointer",
          }}
          src="img/partners/honor_logo.png"
          className="img-fluid"
        />
      </span>

      <img
        style={{
          width: "2%",
          paddingLeft: 4,
          marginRight: 4,
        }}
        src="img/partners/flecha.png"
        className="img-fluid"
      />
      <span
        style={{
          paddingRight: 20,
        }}
      >
        Vehículo eléctrico{" "}
        <img
          onClick={() => {
            window.open(
              "https://jac.mx/?keyword=jac%20sunray%20precio&creative=499627464601&gclid=CjwKCAiAjoeRBhAJEiwAYY3nDGp6zLgUeybju4UNCmEbFdfBO1JaJRkAEvCjzY4FZs5eB556XdEA6RoCNn4QAvD_BwE",
              "_blank"
            );
          }}
          style={{
            width: "8%",
            paddingLeft: 4,
            marginRight: 4,
            marginLeft: 4,
            cursor: "pointer",
          }}
          src="img/partners/jaclogo.png"
          className="img-fluid"
        />
      </span>
    </div>
  );
};
