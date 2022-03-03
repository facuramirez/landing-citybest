import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function CompetitionMainCarousel() {
  const Slide = ({ id, image, backgroundImage, title }) => {
    return (
      <div className="slide" key={id}>
        {backgroundImage}
        <div className="banner-overlay">
          <div className="container h-100 d-flex justify-content-center align-items-end">
            <div className="row w-100">
              <div className="col-12  col-lg-6 order-2 order-lg-1">
                <div className="d-none d-lg-flex  w-100 justify-content-start justify-content-lg-start">
                  <img
                    className="w-50 top-logo"
                    src="img/logo-vive.svg"
                    alt=""
                  />
                </div>
                {image}
              </div>
              <div className="mt-2 mt-lg-0 col-12 col-lg-6 mb-3 order-1 order-lg-2">
                <div className="row">
                  <div className="col-12 col-sm-8  col-xl-8 order-2 order-sm-1 order-lg-1 d-flex justify-content-end justify-lg-content-start">
                    {title}
                  </div>
                  <div className="d-none d-lg-flex col-12  col-sm-4  col-xl-4 order-1  order-sm-2 order-lg-2  justify-content-end justify-lg-content-start ">
                    <img className="w-50 city-logo" src="img/logo.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="d-block d-xl-block">
        {/* @ts-ignore */}
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          className="main-header-carousel"
        >
          <Slide
            id="slide-1"
            backgroundImage={
              <div className="main-carousel-background competition" />
            }
            image={
              <div className="row d-flex align-items-end">
                <div className="col-8">
                  <img
                    className="w-100 main-image"
                    src="img/concurso/concurso-banner-3.svg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="w-100 main-image competition-phone"
                    src="img/concurso/concurso-banner-2.svg"
                    alt=""
                  />
                </div>
              </div>
            }
            title={
              <div className="d-flex flex-column">
                <img
                  className="banner-title-image"
                  src="img/concurso/concurso-banner-1.svg"
                />
                <div>
                  <img
                    className="banner-title-image"
                    src="img/concurso/concurso-banner-4.svg"
                  />
                </div>
              </div>
            }
          />
        </Carousel>
      </div>
    </div>
  );
}
