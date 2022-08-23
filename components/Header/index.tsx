import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import Button from "../Button";

export default function Header({ activeItem = "" }) {
  const [styleNavbar, setstyleNavbar] = useState({});

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 0 && !isMobile) {
      setstyleNavbar({
        zIndex: 3,
        position: "fixed",
        top: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        minWidth: "100%",
        opacity: 0.6,
      });
    } else {
      if (!isMobile) {
        setstyleNavbar({
          zIndex: 3,
          position: "absolute",
          top: 0,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          minWidth: "100%",
          opacity: 0.6,
          marginTop: "3.3rem",
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        opacity: 0.6,
        marginTop: "3.3rem",
      });
    }

    return () => {
      setstyleNavbar({});
    };
  }, [isMobile]);

  const [typeCol, settypeCol] = useState("col-8");
  useEffect(() => {
    if (isMobile) {
      settypeCol("col-8");
    } else {
      settypeCol("col");
    }
  }, []);

  return (
    <Navbar style={styleNavbar} expand="md" className="main-navigation">
      <div id="rowMovil" className="row" style={{ marginRight: "5%" }}>
        <div className={typeCol}>
          <Navbar.Brand href="/">
            <div className="col" style={{ minWidth: "300px" }}>
              <img src="./img/logocitibest.png" />

              <span
                style={{
                  borderLeft: "2px solid white",
                  height: "80px",
                  marginLeft: "1rem",
                  fontSize: "2.2rem",
                }}
              ></span>

              <span
                style={{
                  marginLeft: "1rem",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Support
              </span>

              <img
                id="logopacto"
                style={{
                  marginLeft: "8%",
                }}
                src="./img/logo_pacto_global.png"
                className="logo-redpacto"
              />

              <img
                id="logopacto"
                style={{
                  marginLeft: "8%",
                  minWidth: "65px",
                }}
                src="./img/secretaria-de-movilidad.png"
                className="logo-redpacto"
              />

              <img
                id="logopacto"
                style={{
                  marginLeft: "5%",
                  minWidth: "65px",
                }}
                src="./img/bogota-logo.png"
                className="logo-redpacto"
              />
            </div>
          </Navbar.Brand>
        </div>

        {isMobile && (
          <div
            style={{
              padding: "0.9rem",
            }}
            className="col ml-1"
          >
            <Navbar.Toggle
              style={{
                float: "right",
              }}
              aria-controls="basic-navbar-nav"
            />
          </div>
        )}
      </div>

      <Navbar.Collapse
        id="basic-navbar-nav"
        className="mr-auto mr-md-0 ml-0 main-menu justify-content-md-end"
      >
        <Nav
          style={{
            paddingLeft: "80px",
          }}
          className="me-auto"
          navbar
          fill
          activeKey={activeItem}
        >
          {menuItems.map((e) => (
            <Nav.Link
              key={e.key}
              href={e.link}
              active={e.key === activeItem}
              target={e.key === "help" && "_BLANK"}
            >
              <NavIcon />
              <p className="linknavs">{e.label}</p>
            </Nav.Link>
          ))}

          {isMobile && (
            <button
              onClick={() => {
                window.open(
                  "https://citybest-conductores.vercel.app/",
                  "_blank"
                );
              }}
              style={{
                color: "#421B71",
                minWidth: "188px",
              }}
              type="button"
              className="btn btn-light"
            >
              ¡Quiero ser Conductor!
            </button>
          )}
        </Nav>
        {!isMobile && (
          <button
            onClick={() => {
              window.open("https://citybest-conductores.vercel.app/", "_blank");
            }}
            style={{
              color: "#421B71",
              minWidth: "188px",
            }}
            type="button"
            className="btn btn-light"
          >
            ¡Quiero ser Conductor!
          </button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

function NavIcon() {
  return <img src="img/TELEFONO1.png" className="nav-icon" />;
}

const menuItems = [
  {
    key: "passengers",
    label: "PASAJEROS",
    link: "/pasajeros",
  },
  {
    key: "drivers",
    label: "CONDUCTORES",
    link: "/conductores",
  },
  {
    key: "newspaper",
    label: "PRENSA",
    link: "/prensa",
  },
  {
    key: "competition",
    label: "CONCURSO",
    link: "/concurso",
  },
  // {
  //   key: "help",
  //   label: "AYUDA",
  //   link:
  //     "https://api.whatsapp.com/send?phone=56965734473&text=Necesito%20informaci%C3%B3n",
  // },
  // {
  //   key: "contact",
  //   label: "CONTACTO",
  //   link: "/contacto",
  // },
];
