import Button from "../Button";
import HighwaySteps from "../HighwaySteps";

export default function MainPromotionalBanner({
  includeFlags = false,
  title = (
    <>
      Gana dinero extra <br /> conduciendo
    </>
  ),
}) {
  return (
    <section className="banner bg-primary pl-lg-0">
      <div className="row d-flex ">
        <div className="col-12 col-lg-2 d-none d-lg-flex">
          <img src="img/arrows-third.svg" className="w-80" alt="" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-0">
          <div className="d-flex flex-column  ">
            <h3 className="text-strong mb-3">{title}</h3>
            <span>Descarga la app</span>
            <HighwaySteps />

            {includeFlags && (
              <div className="flags-section">
                <img src="img/paises/Mexico.png" alt="" />
                <img src="img/paises/Colombia.png" alt="" />
                <img src="img/paises/Uruguay.png" alt="" />
                <img src="img/paises/Chile.png" alt="" />
              </div>
            )}
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center">
          <Button
            className="btn-outline btn-lg w-100 w-md-0"
            size="lg"
            onClick={() => {
              window.location.href = "https://citybest-conductores.vercel.app/";
            }}
          >
            <span className="mr-2">
              <img src="img/arrows-primary.svg" alt="" className="btn-icon" />
              <img src="img/arrows.svg" alt="" className="btn-icon-hover" />
            </span>
            <strong>¡Quiero ser conductor!</strong>
          </Button>
        </div>
      </div>
    </section>
  );
}
