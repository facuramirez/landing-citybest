import { useEffect, useState } from "react";
import { Nav, Navbar, OverlayTrigger, Popover, PopoverContent } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { PaisesAutorizados } from "../../utils/utils";

interface HeaderProps {
  activeItem?: string;
  country?: Object;
  setcountry?: Function;
}


export default function Header2({ activeItem = "", country, setcountry }: HeaderProps) {

  const [styleNavbar, setstyleNavbar] = useState({})
  const [countrySelected, setcountrySelected] = useState(null);
  const [visibleTrigger, setvisibleTrigger] = useState(false)

  useEffect(() => {
    PaisesAutorizados.forEach(pais => {
      if (pais.nombre === country) {
        setcountrySelected({
          nombre: pais.nombre,
          img: pais.img
        })
      }
    });
  }, [country]);

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
              <OverlayTrigger
                show={visibleTrigger}
                onToggle={() => setvisibleTrigger(!visibleTrigger)}
                trigger="click" placement="bottom-start"
                overlay={
                  e.label == "PAISES" ? (<Popover
                    id="popover-basic"
                  >
                    <PopoverContent>
                      <ListCountrys
                       setcountry={setcountry}
                       setvisibleTrigger={setvisibleTrigger}
                       visibleTrigger={visibleTrigger} />
                    </PopoverContent>
                  </Popover>) : <Popover style={{ display: 'none' }} id="popover-basic"
                  >
                    <PopoverContent>
                      <ListCountrys   setcountry={setcountry}
                       setvisibleTrigger={setvisibleTrigger}
                       visibleTrigger={visibleTrigger} />
                    </PopoverContent>
                  </Popover>}
              >
                <Nav.Link
                  key={e.key}
                  href={e.label !== "PAISES" ? e.link : "#"}
                  active={e.key === activeItem}
                  target={e.key === "ayuda-conductor" && "_blank"}
                >
                  <NavIcon icon={
                    e.label === "PAISES" && countrySelected ? countrySelected.img : e.icon
                  } />
                  <p className="linknavs2">{
                    e.label === "PAISES" && countrySelected ? countrySelected.nombre : e.label
                  }</p>
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





const ListCountrys = ({
  setcountry,
  setvisibleTrigger,
  visibleTrigger
}) => {

  const HideAndShowCountry = (country:string)=>{
    setcountry(country)
    setvisibleTrigger(!visibleTrigger)
  }
  return (

    <div className="container" >
      <div className="row" style={{
        cursor: 'pointer',
        marginBottom: '5px',
        border: '1px solid #ccc',
      }}
        onClick={() => HideAndShowCountry('Mexico')}>
        <div className="col">
          <img style={{
            width: '10%'
          }} src="img/paises/MEXICO.png" className="img-fluid" />
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 'bold',
            fontFamily: 'SantanderFont',
            marginLeft: 10
          }}>Mexico</span>
        </div>
      </div>


      <div className="row" style={{
        cursor: 'pointer',
        marginBottom: '5px',
        border: '1px solid #ccc',
      }}
        onClick={() => HideAndShowCountry('Colombia')}>

        <div className="col">
          <img style={{
            width: '10%'
          }} src="img/paises/Colombia.png" className="img-fluid" />
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 'bold',
            fontFamily: 'SantanderFont',
            marginLeft: 10
          }}>Colombia</span>
        </div>
      </div>



      <div className="row" style={{
        cursor: 'pointer',
        marginBottom: '5px',
        border: '1px solid #ccc',
      }}
        onClick={() => HideAndShowCountry('Peru')}>
        <div className="col">
          <img style={{
            width: '10%'
          }} src="img/paises/PERU.png" className="img-fluid" />
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 'bold',
            fontFamily: 'SantanderFont',
            marginLeft: 10
          }}>Peru</span>
        </div>
      </div>



      <div className="row"
        style={{
          cursor: 'pointer',
          marginBottom: '5px',
          border: '1px solid #ccc',

        }}
        onClick={() => HideAndShowCountry('Chile')}>
        <div className="col">
          <img style={{
            width: '10%'
          }} src="img/paises/CHILE.png" className="img-fluid" />
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 'bold',
            fontFamily: 'SantanderFont',
            marginLeft: 10
          }}>Chile</span>
        </div>
      </div>
    </div>


  )
}
