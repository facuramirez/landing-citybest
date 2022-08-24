import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { OverlayTrigger, Popover, PopoverContent } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { geoFindMe, PaisesAutorizados } from "../../utils/utils";

export default function HeaderMobile() {
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
        width: "100%",
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
        width: "100%",

        opacity: 0.8,
      });
    }
    return () => {
      setstyleNavbar({});
    };
  }, [isMobile]);

  return (
    <nav
      // navbar-dark bg-dark
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "black",
      }}
    >
      <OverlayTrigger
        show={visibleTrigger}
        onToggle={() => setvisibleTrigger(!visibleTrigger)}
        trigger="click"
        placement="bottom-start"
        overlay={
          <Popover id="popover-basic">
            <PopoverContent>
              <ListCountrys
                setcountry={setcountry}
                setvisibleTrigger={setvisibleTrigger}
                visibleTrigger={visibleTrigger}
              />
            </PopoverContent>
          </Popover>
        }
      >
        <div className="col">
          {countrySelected ? (
            <NavIcon icon={countrySelected.img} />
          ) : (
            <img
              style={{
                width: "15%",
              }}
              src={`img/ICONOPAISES.png`}
              className="nav-icon"
            />
          )}
          <span
            style={{
              fontSize: "1rem",
              color: "white",
              fontWeight: 400,
              marginLeft: "0.5rem",
            }}
          >
            {countrySelected ? countrySelected.nombre : "Paises"}
          </span>
        </div>
      </OverlayTrigger>

      <img
        onClick={() => {
          window.open(
            "https://api.whatsapp.com/send?phone=56994179310&text=Necesito%20informaci%C3%B3n",
            "_blank"
          );
        }}
        style={{
          width: "5%",
          cursor: "pointer",
        }}
        src={`img/AYUDAALCONDUCTOR.png`}
        className="nav-icon"
      />

      <span
        onClick={() => {
          window.open(
            "https://api.whatsapp.com/send?phone=56994179310&text=Necesito%20informaci%C3%B3n",
            "_blank"
          );
        }}
        style={{
          fontSize: "1rem",
          fontWeight: 400,
          color: "white",
          marginLeft: "0.5rem",
          cursor: "pointer",
        }}
      >
        Ayuda al conductor
      </span>
    </nav>
  );
}

function NavIcon({ icon }) {
  return (
    <img
      style={{
        width: "10%",
      }}
      src={`img/${icon}`}
      className="nav-icon"
    />
  );
}

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
        onClick={() => HideAndShowCountry("Peru")}
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
