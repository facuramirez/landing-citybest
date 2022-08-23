import React from "react";
import FactItem from "../../components/FactItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HighwaySteps from "../../components/HighwaySteps";
import SecondaryPromotionalBannerSectionBanner from "../../components/SecondaryPromotionalBannerSection";
import DriverMainCarousel from "./components/DriverMainCarousel";

export default function Drivers() {
  return (
    <div className="page">
      <Header activeItem="drivers" />
      <InitialSection />
      <TravelWithUsSection />
      <DriverFactsSection />
      <SecondaryPromotionalBannerSectionBanner />
      <Footer />
    </div>
  );
}

function InitialSection() {
  return (
    <section className="banner  bg-secondary p-0 ">
      <DriverMainCarousel />
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
            <img src="img/paises/Mexico.png" alt="" />
            <img src="img/paises/Colombia.png" alt="" />
            <img src="img/paises/Uruguay.png" alt="" />
            <img src="img/paises/Chile.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DriverFactsSection() {
  return (
    <section className="banner">
      <div className="container">
        <div className="fact-container justify-content-center">
          <FactItem
            title="Aumenta tu renta"
            icon={<img src="img/money.svg" />}
            description="Con Citybest, en cualquier lugar usted garantiza un número constante de pasajeros que van a incrementar sus ganancias."
          />
          <FactItem
            title="Reduzca sus gastos"
            icon={<img src="img/money-2.svg" />}
            description="Nuestra aplicación aumenta su número de pasajeros. Usted va a recoger más pasajeros y manejar menos."
          />
          <FactItem
            title="Controle sus ingresos"
            icon={<img src="img/money-3.svg" />}
            description="Con nosotros aumentarás tus ganancias en un 30%, obtendrás mayor volumen de solicitudes y gastarás menos en el uso de energías limpias."
          />
          <FactItem
            title="Cuida el medio ambiente"
            icon={<img src="img/nature.svg" />}
            description="Pide tu viaje y llegará por ti un conductor calificado que te llevará cómodo, rápido y seguro"
          />
        </div>
      </div>
    </section>
  );
}
