import React from "react";

import Subscribe from "./Subscribe";

const Error404page = () => {
  return (
    <>
     
      <section className=" relative h-screen flex items-center justify-center">
        <div className="errorsubdiv  h-full w-screen absolute bottom-top left-0     "></div>
        <div className=" container p-6 lg:p-0    flex justify-center mx-auto relative ">
          <div className=" lg:w-1/2 p-6  shadow-lg    bg-[#08092D] text-center text-white">
            <div data-aos="fade-up" >  <span className="text-[#7311EF]  font-semibold text-[160px]">4</span>
            <span  className="text-[#8915EB] font-semibold text-[160px]">0</span>
            <span className="text-[#A51BE8] font-semibold text-[160px]">4</span></div>
          

            <h1 className="text-white mb-4  text-4xl">Page Not Found</h1>
            <p className="  text-lg mb-8  text-gray-400">
              The page you are looking for might have been removed had its
              <br></br>
              name changed or is temporarily unavailable
            </p>

            <div data-aos="fade-down" className="flex justify-center  ">
              <button className=" cursor-pointer hover:-translate-y-1 ease duration-200   rounded-md bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700  px-7 py-3 lg:text-lg  text-xl  font-semibold lg:font-medium text-white  lg:px-8 lg:py-4">
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </section>
      <Subscribe></Subscribe>
    </>
  );
};

export default Error404page;
