import { useEffect,  useState } from "react";
import { Nav, Navbar,  Popover } from "react-bootstrap";
import { isMobile } from "react-device-detect";

export default function Header2({ activeItem = "" }) {

  const [styleNavbar, setstyleNavbar] = useState({})

  useEffect(() => {
    if (isMobile) {
      setstyleNavbar({
        top: 0,
        left: 0,
      })
    } else {
      setstyleNavbar({
        zIndex: 3,
        position: "absolute",
        top: 0,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: '100%',
        opacity: 0.8,
      })
    }
    return () => {
      setstyleNavbar({})
    }
  }, [isMobile]);

  return (
    <div>
      <Navbar style={styleNavbar} expand="md" className="main-navigation2">
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="mr-auto mr-md-0 ml-0 main-menu justify-content-md-end"
        >
          <Nav className="me-auto"
            navbar
            fill
            activeKey={activeItem}
          >
            {menuItems.map((e) => (
              <Nav.Link
                key={e.key}
                href={e.link}
                active={e.key === activeItem}
                target={e.key === "ayuda-conductor" && "_blank"}
              >
                <NavIcon icon={e.icon}  />
                <p className="linknavs2">{e.label}</p>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}

function NavIcon({ icon }) {
  return <img style={{
    width: '80%'
  }} src={`img/${icon}`} className="nav-icon" />;
}


const menuItems = [

  {
    key: "ayuda-conductor",
    label: "AYUDA AL CONDUCTOR",
    icon: 'AYUDAALCONDUCTOR.png',
    link:
      "https://api.whatsapp.com/send?phone=573243222725&text=Necesito%20informaci%C3%B3n",
  },
  {
    key: "help-client",
    label: "SERVICIO AL CLIENTE",
    icon: 'ATENCIONALCLIENTE.png',
    link: "/",
  },
  {
    key: "PAISES",
    label: "PAISES",
    icon: 'ICONOPAISES.png',
    link: "/",
  },
];


