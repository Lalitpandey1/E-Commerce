import { useState } from "react";
import "./App.css";
import NavBarTemplate from "./component/Template/FlexNavbar";
import Navbar from "./component/PureComponent/Navbar";
import ComponentTemplate from "./component/Template/ComponentTemplate";
import OfferSlider from "./component/PureComponent/OfferSlider";
import ProductCategories from "./component/PureComponent/ProductCategories";
import BestSellers from "./component/PureComponent/BestSellers";
import Supplements from "./component/PureComponent/Supplements";
import NewLaunchedProduct from "./component/PureComponent/NewLaunchedProduct";
import TimerOffer from "./component/PureComponent/TimerOffer";
import Contact from "./component/PureComponent/Contact";
import Footer from "./component/PureComponent/Footer";

function App() {
  const [count, setCount] = useState(0);
  // #38CB89 => green

  return (
    <>
      <NavBarTemplate children={<Navbar />} />
      <ComponentTemplate children={<OfferSlider />} />
      <ComponentTemplate children={<ProductCategories />} />
      <ComponentTemplate children={<BestSellers />} />
      <ComponentTemplate children={<Supplements />} />
      <ComponentTemplate children={<NewLaunchedProduct />} />
      <TimerOffer />
      <Contact />
      <NavBarTemplate
        children={<Footer />}
        color={"bg-[#2B2B2B]"}
        Mdwidth={855}
      />
    </>
  );
}

export default App;
