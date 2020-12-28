import { useRef, createRef } from "react";
import Contact from "./contact/Contact";
import "./css/main.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Save from "./save/Save";
import Services from "./services/Services";

function App() {
  return (
    <div>
      <Header />

      <Save />
      <Services />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
