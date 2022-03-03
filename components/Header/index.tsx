import { Nav, Navbar } from "react-bootstrap";

export default function Header({ activeItem = "" }) {
  return (
    <Navbar expand="lg" className="main-navigation">
      <Navbar.Brand href="/">
        <img src="./img/logo.svg" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="mr-auto mr-md-0 main-menu justify-content-md-end"
      >
        <Nav className="">
          {menuItems.map((e) => (
            <Nav.Link
              key={e.key}
              href={e.link}
              active={e.key === activeItem}
              target={e.key === "help" && "_BLANK"}
            >
              <NavIcon />
              <p className="label">{e.label}</p>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function NavIcon() {
  return <img src="img/arrows-secondary.svg" className="nav-icon" />;
}

const menuItems = [
  {
    key: "passengers",
    label: "Pasajeros",
    link: "/pasajeros",
  },
  {
    key: "drivers",
    label: "Conductores",
    link: "/conductores",
  },
  {
    key: "newspaper",
    label: "Prensa",
    link: "/prensa",
  },
  {
    key: "competition",
    label: "Concurso",
    link: "/concurso",
  },
  {
    key: "help",
    label: "Ayuda",
    link:
      "https://api.whatsapp.com/send?phone=56965734473&text=Necesito%20informaci%C3%B3n",
  },
  {
    key: "contact",
    label: "Contacto",
    link: "/contacto",
  },
];
