import React from "react";
import Navbar from "../PureComponent/Navbar";
import Contact from "../PureComponent/Contact";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="text-black">
      <Navbar />
      <div className="w-full my-5">
        <Contact />
      </div>
    </div>
  );
};

export default ContactUs;
