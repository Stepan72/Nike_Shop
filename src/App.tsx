import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./../sections";
import { Nav } from "../components";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default App;

/// Popular products 1:46:40
