import React from "react";
import "./App.css";
import BrandSlider from "./components/BrandSlider";
import Tracks from "./components/Tracks/Tracks";
import Judges from "./components/Judges";
import Support from "./components/Support";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import KickStart from "./components/KickStart";
import Prizes from "./components/Prizes";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <KickStart />
      <Prizes />
      <Tracks />
      <BrandSlider />
      <Judges />
      <Support />
      <Footer />
    </div>
  );
};

export default App;
