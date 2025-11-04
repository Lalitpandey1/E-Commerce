import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
// import HeroSlider from "./component/HeroSlider";
// import Caraousel from "./component/Caraousel";
import OfferSlider from "./component/OfferSlider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <OfferSlider />
      {/* <Caraousel /> */}
      {/* <HeroSlider /> */}
    </>
  );
}

export default App;
