import CarouselOne from "./carousel/CarouselOne";
import Contact from "./contact/Contact";
import "./css/main.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Relationship from "./relationship/Relationship";
import Save from "./save/Save";
import ServiceList from "./services/ServiceList";
import Services from "./services/Services";

function App() {
  return (
    <div className="page-container">
      <Header />
      <CarouselOne />
      <Relationship />
      {/* <RelationshipCard /> */}
      <Save />
      <Services />
      <ServiceList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
