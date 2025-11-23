import React from "react";
import Navbar from "../PureComponent/Navbar";

function NotFound() {
  // const navigate = useNavigate();
  return (
    <div className="w-full text-black">
      <Navbar />
      <div className="w-full flex flex-col items-center text-sm xl:text-lg justify-center h-[80vh]">
        <h2 className="font-bold text-lg md:text-xl">404 | Page Not Found</h2>
        <br />
        <button className="border rounded-lg px-2 py-0.5 bg-black text-white">
          Go To Homepage
        </button>
      </div>
    </div>
  );
}

export default NotFound;
