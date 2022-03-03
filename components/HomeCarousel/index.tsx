import { useResponsive } from "react-hooks-responsive";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function HomeCarousel() {
  const Slide = ({ id, backgroundImage }) => {
    return (
      <div
        className="slide"
        // style={{ background: `url(${backgroundImage})`, height: "100%" }}
        key={id}
      >
        {backgroundImage}
      </div>
    );
  };

  const breakpoints = { xs: 0, sm: 480, md: 1024 };

  const { size, orientation, screenIsAtLeast, screenIsAtMost } =
    useResponsive(breakpoints);

  const isMobile = screenIsAtMost("sm");

  return (
    <div>
      <div className="d-block d-xl-block">
        <Carousel
          showStatus={false}
          showThumbs={false}
          className="main-header-carousel"
          autoPlay
          infiniteLoop
        >
          <Slide
            id="slide-1"
            backgroundImage={
              <img
                src={`${
                  "/img/home/slide-01.svg"
                  // !isMobile
                  //   ? "/img/home/slide01_dsk.jpg"
                  //   : "/img/home/slide01_m.jpg"
                }`}
              />
            }
          />

          <Slide
            id="slide-2"
            backgroundImage={
              <img
                src={`${
                  "/img/home/slide-02.svg"
                  // !isMobile
                  //   ? "/img/home/slide02_dsk.jpg"
                  //   : "/img/home/slide02_m.jpg"
                }`}
              />
            }
          />

          <Slide
            id="slide-3"
            backgroundImage={
              <img
                src={`${
                  "/img/home/slide-03.svg"
                  // !isMobile
                  //   ? "/img/home/slide03_dsk.jpg"
                  //   : "/img/home/slide03_m.jpg"
                }`}
              />
            }
          />
        </Carousel>
      </div>
    </div>
  );
}
