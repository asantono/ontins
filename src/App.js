import CarouselOne from "./carousel/CarouselOne";
import Contact from "./contact/Contact";
import "./css/main.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Relationship from "./relationship/Relationship";
import Save from "./save/Save";
import ServiceList from "./services/ServiceList";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";

function App() {
  return (
    <div className="page-container">
      <Header />
      <CarouselOne />
      <Relationship />
      <Save />
      <Services />
      <ServiceList />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
