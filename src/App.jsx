import { useState } from "react";
import "./App.css";
import NavBarTemplate from "./component/Template/FlexNavbar";
import Navbar from "./component/PureComponent/Navbar";
import ComponentTemplate from "./component/Template/ComponentTemplate";
import OfferSlider from "./component/PureComponent/OfferSlider";
import ProductCategories from "./component/PureComponent/ProductCategories";
import BestSellers from "./component/PureComponent/BestSellers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NavBarTemplate children={<Navbar />} />
      <ComponentTemplate children={<OfferSlider />} />
      <ComponentTemplate children={<ProductCategories />} /> */}
      {/* <ComponentTemplate children={<ProductSlider />} /> */}
      <ComponentTemplate children={<BestSellers />} />
    </>
  );
}

export default App;
