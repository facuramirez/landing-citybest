import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { isMobile } from 'react-device-detect';

export default function HomeCarousel() {
  const Slide = ({ id, backgroundImage }) => {
    return (
      <div
        className="slide"
        key={id}
      >
        {backgroundImage}
      </div>
    );
  };

  const [stylesmobile, setstylesmobile] = useState({
  })

  useEffect(() => {
    if (isMobile) {
      setstylesmobile({})
    } else {
      setstylesmobile({
        top: 0,
      })

    }
    return () => {
      setstylesmobile({})
    }
  }, [isMobile]);

  return (
    <div  >

      <div style={stylesmobile} className="d-block d-xl-block">
        <Carousel
          showStatus={false}
          showThumbs={false}
          className="main-header-carousel"
          autoPlay
          infiniteLoop
          interval={3000}
        >

          <Slide
            id='slide-01'
            backgroundImage={
              <img
                src={`${"/img/home/FOTO11.svg"
                  }`}
              />
            }
          />

          <Slide
            id='slide-01'
            backgroundImage={
              <img
                src={`${"/img/home/FOTO23.svg"
                  }`}
              />
            }
          />

          <Slide
            id='slide-01'
            backgroundImage={
              <img
                src={`${"/img/home/FOTO24.svg"
                  }`}
              />
            }
          />


        </Carousel>

      </div>



    </div>
  );
}
