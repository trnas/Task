import {
  landLogo,
  interior,
  calendarIcon,
  FiftyIcon,
  homeIcon,
  certiIcon,
  kitchen,
  bedroom,
  livingRoom,
  office,
} from "./assets";
import { Carousel, Footer } from "./components";
import "./App.css";
import triangle1 from './assets/Rectangle 12.svg';
import triangle2 from './assets/Rectangle 25.svg';
import WhatWeDo from "./components/WhatWeDo";
import Interior from "./components/Interior";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="triangle1">
        <img src={triangle1} />
      </div>
      <div className="triangle2">
        <img src={triangle2} />
      </div>
      <Header />
      <HeroSection />
      <Interior />
      <WhatWeDo />
      <Carousel />

      <Footer />
    </>
  );
}

export default App;
