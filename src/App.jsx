import "./App.css";
import Cart from "./component/Pages/Cart/Cart";
import Landing from "./component/Pages/Landing";
import NotFound from "./component/Pages/NotFound";
import ProductPage from "./component/Pages/ProductPage/ProductPage";
import ComponentTemplate from "./component/Template/ComponentTemplate";

function App() {
  return (
    <>
      {/* <Landing /> */}
      <ComponentTemplate children={<NotFound id={"I777"} />} />
    </>
  );
}

export default App;
