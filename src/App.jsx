import { useState } from "react";
import "./App.css";

import FlexComponent from "./component/FlexOfferSlider";
import FlexNavbar from "./component/FlexNavbar";
import FlexProductCategory from "./component/FlexProductCategory";
import NavBarTemplate from "./component/Template/FlexNavbar";
import Navbar from "./component/PureComponent/Navbar";
import ComponentTemplate from "./component/Template/ComponentTemplate";
import OfferSlider from "./component/PureComponent/OfferSlider";
import ProductCategories from "./component/PureComponent/ProductCategories";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarTemplate children={<Navbar />} />
      <ComponentTemplate children={<OfferSlider />} />
      <ComponentTemplate children={<ProductCategories />} />
    </>
  );
}

export default App;
