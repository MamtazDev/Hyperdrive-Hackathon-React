import React from "react";
import "./App.css";
import BrandSlider from "./components/BrandSlider";
import Tracks from "./components/Tracks/Tracks";
import Judges from "./components/Judges";
import Support from "./components/Support";

const App = () => {
  return (
    <div>
      <Tracks />
      <BrandSlider />
      <Judges />
      <Support />
    </div>
  );
};

export default App;
