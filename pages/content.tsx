/* global jarallax */
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header/Header2";
import HeaderMobile from "../components/Header/HeaderMobile";
import HomeCarousel from "../components/HomeCarousel";
import MainPromotionalBanner from "../components/MainPromotionalBanner";
import { geoFindMe } from "../utils/utils";

export default function Content() {
  if (typeof window === "undefined") {
    return null;
  }

  const [country, setcountry] = useState(null);

  React.useEffect(() => {
      geoFindMe((result) => {
        setcountry(result.country_name)
      });
  }, []);

  return (
    <div className="page">
      {!isMobile ?
        <Header2 country={country} setcountry={setcountry} />
        : <HeaderMobile country={country} setcountry={setcountry} />}
      <Header />
      <HomeCarousel />
      <BannerGeneric img="FOTO26.svg"
        goto='/conductores'
      />
      {/*<MainPromotionalBanner includeFlags />*/}
      <FeaturesSection />
      <AvailabilitySection />
      <VehiclesTypesSection />
      <BannerGeneric
        img="DRIVERUSUARIO.svg"
        goto={null}
      />
      <Banner3Columns />
      <BannerGeneric
        img="playstore-appstore.svg"
        goto='https://play.google.com/store/apps/details?id=py.citybest.citybestpasajero&hl=es_CO&gl=US'
      />

      <Footer />
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <FeatureItem
              icon={<img style={{ maxWidth: '250px' }} src="img/AUTO1.png" alt="" />}
              title={<FeatureTitle title="Electromovilidad" />}
              description="Viaja con CityBest, contamos con vehículos 100% ecológicos y juntos marquemos la diferencia."
            />
          </div>
          <div className="col-12 col-md-4">
            <FeatureItem
              icon={<img style={{ maxWidth: '250px' }} src="img/AUTOCIUDAD1.png" alt="" />}
              title={<FeatureTitle title="Viaja sin preocupaciones" />}
              description="Citybest se diseñó con la seguridad como eje central. Con las funciones de prevención de incidentes, cobertura de seguro y tecnología que te mantiene conectado, nos enfocamos en que sientas tranquilidad al trasladarte"
            />
          </div>
          <div className="col-12 col-md-4">
            <FeatureItem
              icon={<img style={{ maxWidth: '250px' }} src="img/TELEFONOAUTO1.png" alt="" />}
              title={<FeatureTitle title="Realiza envíos" />}
              description="Una forma de enviar y recibir objetos desde nuestra aplicación de manera segura con la que, además, ayudamos a los conductores que encuentran en Citybest una fuente de ingresos indispensable."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureTitle({ title }) {
  return (
    <span className="d-flex align-items-center">
      {title}{" "}
      <img
        src="img/arrows-primary.svg"
        className="ml-2"
        style={{ width: 20, marginBottom: 3 }}
        alt=""
      />
    </span>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature-item-section d-flex flex-column align-items-center justify-content-center">
      {icon}

      <h4 className="title mt-1 text-center">{title}</h4>

      <p className="mt-2">{description}</p>
    </div>
  );
}

function AvailabilitySection() {
  return (
    <section className="banner bg-primary">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6 col-lg-5 mb-3 mb-md-0">
            <div className="d-flex flex-column  ">
              <h3 className="text-strong mb-3">
                Viaja entretenido <br />{" "}
                <span className="text-secondary">
                  y cuida el medio ambiente
                </span>
              </h3>

              <p>
                Que siga tu conversación en Whatsapp y disfruta de tu playlist
                favorita en Spotify durante el viaje
              </p>

              <div className="mt-2">
                <img src="img/destiny.png" className="w-100" />

                <div className="main-social-icons">
                  <div className="">
                    <img src="img/spotify.png" />
                  </div>
                  <div className="">
                    <img src="img/whatsapp.png" />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 position-relative">
            <div className="avail-phone-img d-none d-md-block mt-3">
              <img src="img/CELULAR.png" alt="" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function VehiclesTypesSection() {
  return (
    <section className="banner vehicles-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <FeatureItem
              icon={
                <img style={{ maxWidth: '250px' }} src="img/CITYBASIC.svg" />
              }
              title="Vehículos eléctricos"
              description="El costo por kilómetro de los automóviles eléctricos es sustancialmente inferior al de los automóviles de motor de combustión. Es por eso, que todos tus viajes con Citybest serán los más económicos del mercado"
            />
          </div>
          <div className="col-12 col-md-4">
            <FeatureItem
              icon={
                <img style={{ maxWidth: '250px' }} src="img/CITYGAS.svg" />
              }
              title="Vehículos a gas"
              description="El rendimiento de un auto a gas en velocidad y potencia es similar, y en muchos casos hasta mejor, que el de uno a gasolina. Es por eso, que todos tus viajes con Citybest serán los más económicos del mercado"
            />
          </div>
          <div className="col-12 col-md-4">
            <FeatureItem
              icon={
                <img style={{ maxWidth: '250px' }} src="img/CITYFULL.svg" />
              }
              title="Impacto"
              description="En Citybest contribuimos a disminuir la presencia de gases contaminantes en la atmósfera, principalmente el dióxido de carbono (CO2), monóxido de carbono (CO), entre otros."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterDownloadSection() {
  return (
    <div style={{ position: "relative" }}>
      <div className="d-none d-lg-block ml-3 download-section-item">
        <span className="mr-2">Descarga la app: </span>

        <img src="img/google-play.png" className="download-icon mr-2" alt="" />
        <img src="img/apple.png" className="download-icon mr-2" alt="" />
      </div>
      <img src="img/llamados_footer.svg" style={{ width: "100%" }} alt="" />

      <div className="mt-2 p-2 w-100 d-flex d-lg-none  download-section-item-mobile">
        <span className="mr-2">Descarga la app: </span>

        <div className="mt-2 d-flex">
          <img
            src="img/google-play.png"
            className="download-icon mr-3"
            alt=""
          />
          <img src="img/apple.png" className="download-icon mr-2 " alt="" />
        </div>
      </div>
    </div>
  );
}

function BannerGeneric({
  img,
  goto
}) {
  return (
    <div style={{ position: "relative", marginBottom: '1.5rem', border: 'none', cursor: goto != null && 'pointer' }}>
      <img onClick={
        (e) => {
          e.preventDefault();

          if (goto != null && goto.includes('https')) {
            window.open(goto, '_blank');
          } else if (goto != null && !goto.includes('https')) {
            window.location.href = goto;
          }
        }
      } src={`img/${img}`} style={{ width: "100%" }} alt="" />
    </div>
  );
}

const Banner3Columns = () => {

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  }

  return (

    <div style={{
    }} className={!isMobile && "row mb-5"} >

      <div style={{
        paddingLeft: 0,
      }} className="col-12 col-md-4 pr-0">
        <img
          style={{
            cursor: "pointer",
          }}
          onClick={() => handleClick('https://www.mercadopago.cl/')}
          src="img/FOTO27.svg"
          className="w-100"
          alt=""
        />
      </div>

      <div style={{
        paddingLeft: 0
      }} className="col-12 col-md-4 ml-0 pr-0">
        <img
          style={{
            cursor: "pointer"
          }}
          onClick={() => handleClick('https://www.hihonor.com/cl/')}
          src="img/FOTO28.svg"
          className="w-100"
          alt=""
        />
      </div>

      <div style={{
        paddingLeft: 0
      }} className="col-12 col-md-4 pr-0">
        <img
          onClick={() => handleClick('https://jac.mx/?keyword=jac%20sunray%20precio&creative=499627464601&gclid=CjwKCAiAjoeRBhAJEiwAYY3nDGp6zLgUeybju4UNCmEbFdfBO1JaJRkAEvCjzY4FZs5eB556XdEA6RoCNn4QAvD_BwE')}
          style={{
            width: "84%",
            cursor: "pointer"
          }}
          src="img/FOTO29.svg"
          className={isMobile ? "w-100" : "w-80"}
          alt=""
        />
      </div>
    </div>

  )
}