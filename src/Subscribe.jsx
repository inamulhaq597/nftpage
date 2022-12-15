import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full flex  justify-center  lg:p-24 p-6">
      <div className="subscribediv container mx-auto rounded-3xl  ">
        <div className=" lg:p-12 subdiv text-white rounded-3xl ">
          <div class=" lg:w-full  relative text-center mb-6 p-2 ">
            <div class="  lg:-mt-4   hidden md:block   text-9xl   text-gray-200   opacity-10  font-semibold w-full  ">
              Subscribe
            </div>
            <div className="relative   text-center md:absolute text-white   right-1/3 translate-x-1/3 w-full  lg:text-4xl  text-3xl -bottom-5 ">
              Subscire Our Newsletter
            </div>
          </div>
          <div className="w-full  flex justify-center mb-3 p-2 ">
            <div className="lg:w-1/3 text-center  lg:text-lg  text-sm  text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>


          <div className="w-full flex justify-center  p-4">
            <div className=" lg:w-1/2  flex space-x-3 lg:flex-row flex-col   justify-center  items-center">
              <div className="  lg:w-full mb-3 lg:mb-0">
                <input
                  className="lg:py-4 rounded w-full text-lg outline-none  p-2 bg-[#FFFFFF] "
                  placeholder="Your Email Address"
                ></input>
              </div>
              <div className="  ">
                <button className=" py-2 px-16 mr-3 lg:mr-0 rounded-md cursor-pointer   bg-gradient-to-br from-blue-700 to-[#e026de]    lg:px-8 lg:py-4 hover:from-[#e026de]  hover:to-blue-700   lg:text-lg  text-lg font-bold  text-white  ">
                  Subscire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
