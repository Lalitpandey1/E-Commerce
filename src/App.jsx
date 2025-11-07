import { useState } from "react";
import "./App.css";

import FlexComponent from "./component/FlexOfferSlider";
import FlexNavbar from "./component/FlexNavbar";
import FlexProductCategory from "./component/FlexProductCategory";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FlexNavbar />
      <FlexComponent />
      <FlexProductCategory />
    </>
  );
}

export default App;
