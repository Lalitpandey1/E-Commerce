import React from "react";
import NavBarTemplate from "../Template/FlexNavbar";
import ComponentTemplate from "../Template/ComponentTemplate";
import Navbar from "../PureComponent/Navbar";
import OfferSlider from "../PureComponent/OfferSlider";
import ProductCategories from "../PureComponent/ProductCategories";
import BestSellers from "../PureComponent/BestSellers";
import Supplements from "../PureComponent/Supplements";
import NewLaunched from "../PureComponent/NewLaunchedProduct";
import TimerOffer from "../PureComponent/TimerOffer";
import Contact from "../PureComponent/Contact";
import Footer from "../PureComponent/Footer";
const Landing = () => {
  return (
    <div>
      <NavBarTemplate children={<Navbar />} />
      <ComponentTemplate children={<OfferSlider />} />
      <ComponentTemplate children={<ProductCategories />} />
      <ComponentTemplate children={<BestSellers />} />
      <ComponentTemplate children={<Supplements />} />
      <ComponentTemplate children={<NewLaunched />} />
      <TimerOffer />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
