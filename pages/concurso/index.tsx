import React from "react";
import Button from "../../components/Button";
import FactItem from "../../components/FactItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SecondaryPromotionalBannerSectionBanner from "../../components/SecondaryPromotionalBannerSection";
import CompetitionMainCarousel from "./components/CompetitionMainCarousel";

export default function Competition() {
  return (
    <div className="page">
      <Header activeItem="competition" />
      <InitialSection />
      <BannerSection />
      <FactsSection />
      <SecondaryPromotionalBannerSectionBanner />
      <Footer />
    </div>
  );
}

function InitialSection() {
  return (
    <section className="banner  bg-secondary p-0 ">
      <CompetitionMainCarousel />
      {/*  <div className="row ">
        <div className="d-none d-lg-block col-lg-2"></div>
        <div className="col-12 col-lg-6 mx-auto text-center">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-lg-7 col-xl-4">
              <div className="d-flex align-items-center">
                <div className="w-100 mr-2">
                  <h1 className="text-strong text-primary">Registrate</h1>
                  <h1 className="text-strong  text-white">y gana</h1>
                </div>

                <div className="d-none d-md-block">
                  <img
                    src="img/arrows.svg"
                    className="section-img"
                    style={{ width: 60 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12  col-lg-5 col-xl-8">
              <div>
                <img
                  src="img/note9.png"
                  className="section-img w-50"
                  style={{
                    maxWidth: 200,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 col-lg-2  d-none d-lg-block">
          <div className="d-none d-md-flex justify-content-end align-items-center h-100">
            <img
              src="img/arrows.svg"
              className="img-arrows rotate-180"
              alt=""
            />
          </div>
        </div>
      </div>
     */}
    </section>
  );
}

function BannerSection() {
  return (
    <section className="banner  bg-primary  pl-lg-0">
      <div className="row d-flex ">
        <div className="col-12 col-lg-2 d-none d-lg-flex">
          <img src="img/arrows-third.svg" className="w-80" alt="" />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
          <div className="d-flex flex-column  ">
            <p className="text-strong mb-3 h3">
              Concurso Citybest{" "}
              <span className="text-strong text-secondary h3">conductores</span>
            </p>

            <span>
              Con el afán de premiar a nuestros nuevos clientes, lanzamos la
              campaña denominada “DESCARGA CITYBEST Y GANA”.
            </span>

            <div className="flags-section">
              <img src="img/col.svg" alt="" />
              <img src="img/bol.svg" alt="" />
              <img src="img/ecua.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <div className="d-flex h-100 w-100 flex-column justify-content-center align-items-center">
            <Button className="btn-outline btn-lg w-50 w-md-0" size="lg">
              <strong>Ver bases y condiciones</strong>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactsSection() {
  return (
    <section className="banner">
      <div className="container">
        <div className="fact-container justify-content-center">
          <FactItem
            title="Xiaomi RedmiNote 9"
            icon={<img src="img/gift.svg" />}
            description="Solo tienes que registrarte, descargar nuestra app conductor y ya estarás participando por un Xiaomi Redmi Note 9 y recuerda mientras más viajes realizas con CityBest, más posibilidades tendrás de ganar."
          />
          <FactItem
            title="Bases y condiciones"
            icon={<img src="img/paper.svg" />}
            description="Revisa las bases y condiciones de nuestro concurso en el siguiente enlace."
          />
          <FactItem
            title="Derecho al premio"
            icon={<img src="img/cup.svg" />}
            description="Los clientes cuyos nombres resultaren ganadores de los sorteos tendrán derecho a adjudicarse el premio."
          />
        </div>
      </div>
    </section>
  );
}
