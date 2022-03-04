/* global jarallax */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header/Header2";
import HomeCarousel from "../components/HomeCarousel";
import MainPromotionalBanner from "../components/MainPromotionalBanner";

export default function Content() {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className="page">
      <Header2 />
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
      <FooterDownloadSection />
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
              icon={<img style={{maxWidth:'250px'}}  src="img/AUTO1.png" alt="" />}
              title={<FeatureTitle title="Electromovilidad" />}
              description="Viaja con CityBest, contamos con vehículos 100% ecológicos y juntos marquemos la diferencia."
            />
          </div>
          <div className="col-12 col-md-4">
            <FeatureItem
              icon={<img style={{maxWidth:'250px'}} src="img/AUTOCIUDAD1.png" alt="" />}
              title={<FeatureTitle title="Viaja sin preocupaciones" />}
              description="Citybest se diseñó con la seguridad como eje central. Con las funciones de prevención de incidentes, cobertura de seguro y tecnología que te mantiene conectado, nos enfocamos en que sientas tranquilidad al trasladarte"
            />
          </div>
          <div className="col-12 col-md-4">
            <FeatureItem
              icon={<img style={{maxWidth:'250px'}}  src="img/TELEFONOAUTO1.png" alt="" />}
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
                <img style={{maxWidth:'150px'}} src="img/TELEFONO1.png" />
              }
              title="Vehículos eléctricos"
              description="El costo por kilómetro de los automóviles eléctricos es sustancialmente inferior al de los automóviles de motor de combustión. Es por eso, que todos tus viajes con Citybest serán los más económicos del mercado"
            />
          </div>
          <div className="col-12 col-md-4">
            <FeatureItem
              icon={
                <img style={{maxWidth:'150px'}} src="img/TELEFONO1.png" />
              }
              title="Vehículos a gas"
              description="El rendimiento de un auto a gas en velocidad y potencia es similar, y en muchos casos hasta mejor, que el de uno a gasolina. Es por eso, que todos tus viajes con Citybest serán los más económicos del mercado"
            />
          </div>
          <div className="col-12 col-md-4">
            <FeatureItem
              icon={
                  <img style={{maxWidth:'150px'}} src="img/TELEFONO1.png" />
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
    <div style={{ position: "relative",marginBottom:'1.5rem', border:'none', cursor:goto!=null&&'pointer' }}>
     <img onClick={
        (e)=>{
          e.preventDefault();
          if(goto!=null){
            window.location.href=goto;
          }
        }
     } src={`img/${img}`} style={{ width: "100%" }} alt="" />
    </div>
  );
}
