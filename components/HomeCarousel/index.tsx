import { useEffect, useState } from "react";
import { useResponsive } from "react-hooks-responsive";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from "../Header";
const urlLandingCarousel = ["slide-01.svg", "slide-02.svg", "slide-03.svg"];
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import MainPromotionalBanner from "../MainPromotionalBanner";



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
          return() => {
            setstylesmobile(  {})
          }
        }, [isMobile]);

  return (
    <div  >

      <div style={stylesmobile} className="d-block d-xl-block">
        <Carousel
          showStatus={false}
          showThumbs={false}
          className="main-header-carousel"
          autoPlay={false}
          infiniteLoop
        >

        <Slide
            id='slide-01'
            backgroundImage={
              <img
                src={`${
                  "/img/home/slide-01.svg"
                }`}
              />
            }
          />

<Slide
            id='slide-01'
            backgroundImage={
              <img
                src={`${
                  "/img/home/slide-01.svg"
                }`}
              />
            }
          />

      <Slide
            id='slide-01'
            backgroundImage={
              <img
                src={`${
                  "/img/home/slide-01.svg"
                }`}
              />
            }
          />

         
        </Carousel>
        
      </div>

      

    </div>
  );
}
