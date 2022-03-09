import { isMobile } from "react-device-detect";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header/Header2";
import HeaderMobile from "../../components/Header/HeaderMobile";
import SecondaryPromotionalBannerSectionBanner from "../../components/SecondaryPromotionalBannerSection";
import NewsCarousel from "./components/NewsCarousel";

export default function NewspaperPage() {
  return (
    <div className="page">
      {isMobile && <HeaderMobile />}
      <Header activeItem="newspaper" />
      <InitialSection />
      <SecondaryPromotionalBannerSectionBanner />
      <Footer />
    </div>
  );
}

function InitialSection() {
  return (
    <section className="banner d-flex justify-content-center news-section">
      <NewsCarousel />
    </section>
  );
}
