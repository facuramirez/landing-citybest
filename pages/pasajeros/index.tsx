import FactItem from "../../components/FactItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HighwaySteps from "../../components/HighwaySteps";
import SecondaryPromotionalBannerSectionBanner from "../../components/SecondaryPromotionalBannerSection";
import PassengerMainCarousel from "./components/PassengerMainCarousel";

export default function Passengers() {
  return (
    <div className="page">
      <Header activeItem="passengers" />
      <InitialSection />
      <TravelWithUsSection />
      <PassengerFactsSection />
      <SecondaryPromotionalBannerSectionBanner />
      <Footer />
    </div>
  );
}

function InitialSection() {
  return (
    <section className="banner  bg-secondary p-0">
      <PassengerMainCarousel />
    </section>
  );
}

function TravelWithUsSection() {
  return (
    <section className="banner bg-primary  pl-lg-0">
      <div className="row">
        <div className="col-12 col-lg-2 d-none d-lg-flex">
          <img src="img/arrows-third.svg" className="w-80" alt="" />
        </div>
        <div className="col-12 col-lg-7">
          <h3 className="text-strong mb-3">Viaja con nosotros</h3>
          <span>Descarga la app</span>
          <HighwaySteps />

          <div className="flags-section">
            <img src="img/paises/MEXICO.png" alt="" />
            <img src="img/paises/COLOMBIA.png" alt="" />
            <img src="img/paises/URUGUAY.png" alt="" />
            <img src="img/paises/CHILE.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PassengerFactsSection() {
  return (
    <section className="banner">
      <div className="container">
        <div className="fact-container justify-content-center">
          <FactItem
            title="Viaja seguro"
            icon={<img src="img/security.svg" />}
            description="Tu seguridad es lo más importante. Por eso elegimos cuidadosamente a nuestros conductores y hacemos seguimiento de todas las carreras en nuestra plataforma."
          />
          <FactItem
            title="Conductor en minutos"
            icon={<img src="img/driver.svg" />}
            description="Para ti el tiempo es algo valioso. ¡Recuerda! El tiempo de espera de nuestros viajes será mas prolongado que lo habitual. Estamos impulsando el crecimiento y oferta de vehículos eléctricos, híbridos y a gas, así que  trata de tener paciencia previo a su llegada! ¡Saquemos lo mejor de nosotros y cuidemos el medio ambiente en cada ciudad!"
          />
          <FactItem
            title="Calidad y comodidad"
            icon={<img src="img/quality.svg" />}
            description="Buscamos mejorar todos los días y, por eso, revisamos las calificaciones de nuestros conductores para asegurar que te mueves solo con los mejores. Además, viaja entretenido y ¡Recuerda!, puedes acceder directamente a Spotify y WhatsApp"
          />
          <FactItem
            title="Cuida el medio ambiente"
            icon={<img src="img/nature.svg" />}
            description="Nos sumamos a los nuevos desafíos energéticos y ambientales y por ello nuestro compromiso es contribuir a la movilidad sustentable de las personas, fortaleciendo de forma continua el uso de vehículos en base a energías limpias para transportarse en el mercado Latam."
          />
        </div>
      </div>
    </section>
  );
}
