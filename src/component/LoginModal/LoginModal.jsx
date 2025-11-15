import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const LoginModal = ({ toggleModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div
        className="modal-wrapper fixed z-50 left-0 right-0 opacity-85 top-0 bottom-0 bg-[#bdbdbd]"
        onClick={toggleModal}
      ></div>
      {/* Gives Background Wrapper */}
      {
        // Alignment
      }
      <div className="fixed top-1/2 z-60 max-w-[25rem] w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {/* Login Container */}
        <div className="bg-gray-200 p-5 rounded-lg shadow-xl">
          {/* Content Container */}
          <div className=" flex flex-col ">
            <div className="flex bg-[#f8f8f8] rounded-lg p-1 flex-col gap-2">
              <label htmlFor="usermail">Email</label>
              <input
                id="usermail"
                type="email"
                placeholder="Enter your email"
                className="border rounded-lg pl-2"
              />
            </div>
            <div className="flex bg-[#f8f8f8] rounded-lg p-1  flex-col my-2 gap-2">
              <label htmlFor="userpassword">Password</label>
              <input
                id="userpassword"
                type="password"
                placeholder="Enter your email"
                className="border rounded-lg pl-2"
              />
            </div>

            <button
              className="bg-white w-[50%] self-center rounded-lg border cursor-pointer bg-linear-to-r from-green-600 to-cyan-500 hover:bg-[#f8f8f8]"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("myPortalModalDiv")
  );
};

export default LoginModal;
