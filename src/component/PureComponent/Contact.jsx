import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Connect with us */}
      <div className="w-full md:w-[50%] bg-blue-400 flex items-center text-white justify-center py-10">
        <div className="flex flex-col mx-auto w-[50%] bg-[#38CB89] rounded-lg py-3">
          <p>Need Help&nbsp;?</p>
          <p>
            Mail Us&nbsp;
            <span className="italic ">@Lalitpandey4all@gmail.com</span>
          </p>
          <div className="flex items-center gap-1">
            <RiErrorWarningLine />
            <p>FAQs</p>
          </div>
          <button className="text-[#38CB89] bg-white w-40 self-center rounded-sm py-1">
            Help Center
          </button>
        </div>
      </div>

      {/* Help Center */}
      <div className="w-full md:w-[50%] bg-amber-400 flex items-center justify-center py-10">
        <div className="flex flex-col mx-auto w-[50%] bg-white rounded-lg py-3">
          <p>Connect with Us</p>
          <div className="flex gap-5 text-[#38CB89]">
            <IoLogoInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
