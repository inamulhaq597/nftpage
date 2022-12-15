import React from "react";
const First = () => {
  return (
    <div className="container mx-auto  flex text-white lg:p-28 lg:flex-row flex-col mt-12 lg:mt-0 items-center ">
      {/* lift */}
      <div className="lg:w-1/2  text-center lg:text-left">
        {/* hedline one */}
        <div className=" lg:w-5/6 w-full   flex ">
          <h1
            data-aos="fade-up"
            className="font-semibold leading-tight lg:text-7xl text-6xl  space-y-3   lg:mb-4"
          >
            Discover Rare <br></br>
            <span className="bg-gradient-to-r from-[#e026de]   to-blue-600 inline-block text-transparent bg-clip-text texthedone ">
              Digital Art{" "}
            </span>{" "}
            and
          </h1>
        </div>
        {/* hedline two */}
        <div className=" lg:w-5/6 w-full  flex  space-y-3  justify-center lg:justify-start mb-4 lg:mb-5">
          <h1
            data-aos="fade-up"
            className="font-semibold leading-tight    lg:text-7xl text-5xl "
          >
            Collect{" "}
            <span className="bg-gradient-to-r from-[#e026de]   to-blue-600 inline-block text-transparent bg-clip-text texthedone ">
              NFTs{" "}
            </span>{" "}
          </h1>
        </div>
        {/* paragraf */}
        <div className=" lg:w-5/6   flex justify-center lg:justify-start -16 mb-6">
          <p
            data-aos="fade-down"
            className="leading-normal   font-normal text-sm lg:text-lg text-gray-400"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
            <br></br>do eiusmod tempor incididunt ut labore et dolore magna
            <br></br> aliqua. Ut enim ad minim veniam nostrud
          </p>
        </div>
        {/* button */}
        <div className="flex justify-center  lg:justify-start">
          <button className=" cursor-pointer hover:-translate-y-1 ease duration-200   rounded-md bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700  px-7 py-3 lg:text-lg  text-xl  font-semibold lg:font-medium text-white  lg:px-8 lg:py-4">
            Explore Now
          </button>
        </div>
      </div>
      {/* right */}
      <div
        data-aos="fade-down"
        className="lg:w-1/2   w-[90%] lg:p-6 p-6 pixmain"
      >
        <div className="relative    ">
          <img data-aos="fade-down" alt="pixone" src="/page1pix.jpg"></img>
        </div>

        <button class="w-[150px] h-36  flex justify-center items-center   bg-[#03041A] absolute  -top-3   left-120  right-0  bottom-0    ... rounded-full  text-white ">
          {/* <h1 data-aos="fade-down" className="text-white"> */}
            <img  data-aos="fade-down"
              className=" bg-clip-border"
              alt=""
              src="arrow-down-left.svg"
            ></img>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250.5"
              height="250.5"
              viewBox="0 0 250.5 250.5"
            >
              <path
                id="e-path-7fca0d8"
                d="M.25 125.25a125 125 0 11125 125 125 125 0 01-125-125"
              ></path>
              <text>
                <textPath href="#e-path-7fca0d8" startOffset="0%">
                  Explore Devvata NFT . Popular NFT Items .
                </textPath>
              </text>
            </svg> */}
          {/* </h1> */}
        </button>
      </div>
    </div>
  );
};

export default First;
