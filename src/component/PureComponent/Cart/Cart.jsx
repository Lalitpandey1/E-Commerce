import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ id }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: "A001",
      title: "Avvatar Whey Protein Malai Kulfi Flavour",
      images: [
        "https://www.avvatarindia.com/images/product_images/1697552095_FOP.jpg",
        "https://www.avvatarindia.com/images/product_images/1756720772_BC.jpg",
        "https://www.avvatarindia.com/images/product_images/1756720772_BC.jpg",
        "https://www.avvatarindia.com/images/product_images/1756723496_Whey Informed Choice Certificate.jpg",
      ],
      discount: "30%",
      Price: 5289,
      Weight: "4kg",
      totalPrice: 7600,
      rating: 4.7,
      Bestcategory: "protien",
      reviews: [
        {
          username: "",
          review: "",
        },
      ],
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    },
    {
      id: "B045",
      title: "Avvatar Whey Protein Belgian Chocolate Flavour",
      images: [
        "https://www.avvatarindia.com/images/product_images/1697547406_FOP.jpg",
        "https://www.avvatarindia.com/images/product_images/1697547406_LEFT.jpg",
        "https://www.avvatarindia.com/images/product_images/1756721126_WHEY_PROTEIN_BELGIAN_4KG_LIFESTYLE_CREATIVE_AVVATAR_28-02-25-01.jpg",
        "https://www.avvatarindia.com/images/product_images/1756723496_Whey Informed Choice Certificate.jpg",
      ],
      discount: "25%",
      Price: 5490,
      totalPrice: 6186,
      rating: 4.5,
      Bestcategory: "protien",
      reviews: [
        {
          username: "",
          review: "",
        },
      ],
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    },
  ]);
  let cartValue = "";
  const handleCartValue = (val) => {
    cartValue = val;
    console.log(cartValue);
  };

  return (
    <div className="text-black flex flex-col  py-15 overflow-hidden">
      {/* title */}
      <h1 className="text-left text-3xl font-semibold">
        Your shopping cart{cartItems.length === 0 ? " is empty" : ""}
      </h1>

      {/* Empty Cart View */}
      {cartItems.length === 0 && (
        <div className="">
          <p className="text-gray-700 font-semibold text-left text-sm pt-10 my-2">
            Looks like you haven't added any items to the cart yet.
          </p>
          <hr />
        </div>
      )}

      {/* With Item */}

      <div
        className={`${
          cartItems.length === 0 ? "hidden" : "flex"
        } flex-col py-15 my-2`}
      >
        <hr className="text-gray-400" />
        {/* Products */}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            handleCartValue={handleCartValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
