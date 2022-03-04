import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { isMobile } from "react-device-detect";

export default function Header({ activeItem = "" }) {

  const [styleNavbar, setstyleNavbar] = useState({})

  useEffect(() => {
    if (isMobile) {
      setstyleNavbar({
        top:0,
        left:0,
      })
    } else {
      setstyleNavbar({
          zIndex:3,
          position: "absolute",
          marginTop:'1.5rem',
          top: 0,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          minWidth: '100%',
      })
    }
    return() => {
      setstyleNavbar(  {})
    }
  }, [isMobile]);

  return (
    <div>
      <Navbar  style={styleNavbar} expand="md" className="main-navigation">
      <Navbar.Brand href="/">
       <div className="col-8">
       <img src="./img/logo.svg" />
       <img style={{
         marginLeft: "15px",
       }} src="./img/redpacto.png" className="logo-redpacto" />
       </div>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="mr-auto mr-md-0 ml-0 main-menu justify-content-md-end"
      >
        <Nav  className="me-auto"
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

function NavIcon() {
  return <img src="img/arrows-secondary.svg" className="nav-icon" />;
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
  {
    key: "help",
    label: "AYUDA",
    link:
      "https://api.whatsapp.com/send?phone=56965734473&text=Necesito%20informaci%C3%B3n",
  },
  {
    key: "contact",
    label: "CONTACTO",
    link: "/contacto",
  },
];
