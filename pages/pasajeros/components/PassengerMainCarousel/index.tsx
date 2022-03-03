import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function PassengerMainCarousel() {
  const Slide = ({ id, image, backgroundImage, title }) => {
    return (
      <div className="slide" key={id}>
        {backgroundImage}
        <div className="banner-overlay">
          <div className="container h-100 d-flex justify-content-center align-items-end">
            <div className="row w-100">
              <div className="col-12  col-lg-4">
                <div className="d-flex w-100 justify-content-start justify-content-lg-center">
                  <img
                    className="w-50 top-logo"
                    src="img/logo-vive.svg"
                    alt=""
                  />
                </div>
                {image}
              </div>
              <div className="mt-2 mt-lg-0 col-12 col-lg-8 mb-3">
                <div className="row">
                  <div className="col-12 col-sm-8  col-xl-8 order-2 order-sm-1 order-lg-1 d-flex justify-content-end justify-lg-content-start">
                    {title}
                  </div>
                  <div className="col-12  col-sm-4  col-xl-4 order-1  order-sm-2 order-lg-2 d-flex justify-content-end justify-lg-content-start ">
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
        <Carousel
          showStatus={false}
          showThumbs={false}
          className="main-header-carousel"
          autoPlay
        >
          <Slide
            id="slide-1"
            backgroundImage={
              <div className="main-carousel-background passenger" />
            }
            image={
              <img
                className="w-100 main-image"
                src="img/pasajero/pasajero-banner-2.svg"
                alt=""
              />
            }
            title={
              <img
                className="banner-title-image"
                src="img/pasajero/pasajero-banner-1.svg"
              />
            }
          />

          <Slide
            id="slide-2"
            backgroundImage={
              <div className="main-carousel-background passenger" />
            }
            image={
              <img
                className="w-100 main-image"
                src="img/pasajero/pasajero-banner-3.svg"
                alt=""
              />
            }
            title={
              <img
                className="banner-title-image"
                src="img/pasajero/pasajero-banner-1.svg"
              />
            }
          />
        </Carousel>
      </div>
    </div>
  );
}
