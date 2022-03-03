import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SecondaryPromotionalBannerSectionBanner from "../../components/SecondaryPromotionalBannerSection";
import NewsCarousel from "./components/NewsCarousel";

export default function NewspaperPage() {
  return (
    <div className="page">
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
