import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./state/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./component/Pages/ProductPage/ProductPage.jsx";
import Cart from "./component/Pages/Cart/Cart.jsx";
import NotFound from "./component/Pages/NotFound.jsx";
import ComponentTemplate from "./component/Template/ComponentTemplate.jsx";
import ContactUs from "./component/Pages/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/products",
    element: <ComponentTemplate children={<ProductPage id={"A001"} />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/products/:id",
    element: <ComponentTemplate children={<ProductPage />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/cart",
    element: <ComponentTemplate children={<Cart />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/contactUs",
    element: <ComponentTemplate children={<ContactUs />} />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
