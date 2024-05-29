import Hero from "./sections/hero/page";
import AboutUs from "./sections/aboutus/page";
import Services from "./sections/services/page";
import Products from "./sections/products/page";
import Works from "./sections/our-work/page";
import Process from "./sections/process/page";
import Reviews from "./sections/reviews/page";
import Footer from "./sections/footer/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Products />
      <Works />
      <Process />
      <Reviews />
      <Footer />
    </div>
  );
}
