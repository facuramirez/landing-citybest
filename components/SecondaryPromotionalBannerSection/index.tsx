import HighwaySteps from "../HighwaySteps";

export default function SecondaryPromotionalBannerSectionBanner() {
  return (
    <section className="banner bg-secondary pl-lg-0">
      <div className="row d-flex align-items-center">
        <div className="col-2 col-md-2  d-none d-md-block">
          <div className="d-none d-md-flex justify-content-end align-items-center h-100">
            <img src="img/arrows.svg" className="img-arrows" alt="" />
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="w-100 d-flex align-items-center justify-content-center flex-column  ">
            <h2 className="text-center text-strong mb-3">
              ¿Preparado para una nueva manera de viajar?
            </h2>

            <HighwaySteps primary />

            <div className="mt-2">
              <a>
                <span className="text-strong">Regístrate</span> para comenzar a
                conducir
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2"></div>
      </div>
    </section>
  );
}
