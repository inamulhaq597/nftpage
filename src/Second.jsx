import React from "react";

const Second = () => {
  return (
    <div className=" w-full text-white flex mt-12 flex-col lg:flex-row p-3 lg:p-6 mb-28">
      <div className="lg:w-3/6 w-full">    
        <div class=" relative -mt-3">
          <div  class="      hidden md:block   text-9xl   text-gray-200   opacity-10    font-bold w-full  ">
           <h1 data-aos="fade-right">Investor</h1> 
          </div>
          <div className="relative text-center md:text-start  md:absolute   right-1/2 translate-x-1/2 text-4xl  -bottom-2 ">
            Our Partner
          </div>
        </div>
      </div>

      <div className="flex w-full  items-center mt-10 md:mt-0  justify-between">
        <div className="lg:w-2/6   w-3/6 p-2 flex items-center justify-center   opacity-25 hover:opacity-100">
          <img
            className="lg:px-16   hover:-translate-y-3 ease-out duration-700"
            alt="spo 1"
            src="/sponcer1.png"
          ></img>
        </div>

        <div className="w-2/6 p-2   hidden lg:block md:flex items-center justify-center   opacity-25 hover:opacity-100">
          <img
            className=" lg:px-16 hover:-translate-y-3 ease-out duration-700"
            alt="spo 1"
            src="/sponcer2.png"
          ></img>
        </div>

        <div className="lg:w-2/6 w-3/6  flex items-center justify-center  opacity-25 hover:opacity-100">
          <img
            className="lg:px-16  flex-shrink-0 hover:-translate-y-3 ease-out duration-700"
            alt="spo 1"
            src="/sponcer3.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Second;
