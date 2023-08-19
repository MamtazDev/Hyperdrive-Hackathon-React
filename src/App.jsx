import React from "react";
import "./App.css";
import BrandSlider from "./components/BrandSlider";
import Tracks from "./components/Tracks/Tracks";

const App = () => {
  return (
    <div>
      <Tracks />
      <BrandSlider />
    </div>
  );
};

export default App;
