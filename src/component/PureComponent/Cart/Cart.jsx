import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import data from "../../../assets/BestSellerData";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  addItem,
} from "../../../features/cart/cartSlice";
import { selectProductLookup } from "../../../features/cart/productSlice";

const Cart = ({ newId }) => {
  const cartItems = useSelector(selectCartItems);
  const cartValue = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 86400000);
    const day = tomorrow.getDate();
    const month = tomorrow.toLocaleDateString("en-US", { month: "short" });
    return `${day}  ${month}`;
  };

  useEffect(() => {
    if (!newId) return;
    dispatch(addItem(newId));
  }, [newId, dispatch]);

  return (
    <div className="text-black flex flex-col py-10 overflow-hidden">
      {/* title */}
      <h1 className=" text-left text-md m3:text-lg m1:text-2xl md:text-3xl font-semibold">
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
        } flex-col py-15 my-2 bg-red-500`}
      >
        <hr className="text-gray-400" />
        {/* Products */}
        {cartItems.map((item) => (
          <CartItem key={item.id} id={item.id} Qty={item.Qty} />
        ))}

        {/* Checkout Section */}
        <div className="bg-blue-500  w-full mt-15 text-left">
          <div className="flex justify-between font-semibold text-black text-sm m1:text-lg">
            <p>Your Total</p>
            <p className="font-semibold text-gray-900 text-sm m1:text-xl">
              ₹ {cartValue}
            </p>
          </div>
          <p className="text-gray-600 mt-3 text-[10px] m1:text-sm font-semibold">
            Expected Shipping{" "}
          </p>
          <p className="text-black text-[10px] m1:text-xs mb-3">
            {getTomorrowDate()}
          </p>
          <button className="self-center block  w-20 m3:w-30 m2:w-50 md:w-120 mx-auto text-white rounded-xl px-1.5 opacity-90 py-2 text-sm font-semibold my-6 bg-black">
            Checkout
          </button>
        </div>
      </div>
      <div className="my-5 w-full"></div>
    </div>
  );
};

export default Cart;
