import React from "react";

const Roadmap = () => {
  return (
    <div className="container mx-auto  mt-40  flex  flex-col lg:flex-row text-white mb-24">
      {/* lift */}
      <div className="lg:w-1/2  flex justify-center  order-2 lg:order-1">
        <div className=" p-4 lg:w-[80%]">
          {/* 1 */}
          <div class=" w-full relative mb-6 ">
            <div class="  -mt-4   hidden md:block   text-9xl   text-gray-200   opacity-10    font-bold w-full  ">
              <h1 data-aos="fade-left">Roadmap</h1>
            </div>
            <div className="relative  text-center  md:absolute   right-1/2 translate-x-1/3 w-full  text-4xl  -bottom-1 ">
              Devvata Road Map
            </div>
          </div>
          {/* hed */}
          <div className="flex justify-center mb-8 ">
            <div className=" ">
              <p className="  text-lg text-[#888DAC]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>

          <div className="border-l p-4 border-gray-800">
            <div className=" w-full flex items-center mb-2 ">
              <div className=" flex rounded-lg items-center py-3 justify-center w-1/6   bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700 ">
                <img alt="" src="download-cloud.svg"></img>
              </div>
              <div className="">
                <h1 className=" mb-2 ml-2  text-3xl">Launch</h1>
                <p className=" ml-2 text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
            <div className=" w-full flex items-center mb-2">
              <div className=" flex rounded-lg items-center py-3 justify-center   w-1/6   bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700  ">
                <img alt="" src="cpu.svg"></img>
              </div>
              <div className="">
                <h1 className=" mb-2 ml-2  text-3xl">Community Giveaway</h1>
                <p className=" ml-2 text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
            <div className=" w-full flex  items-center mb-2 ">
              <div className=" flex  rounded-lg   items-center py-3 justify-center   w-1/6  bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700  ">
                <img alt="" src="shield.svg"></img>
              </div>
              <div className="">
                <h1 className=" mb-2 ml-2  text-3xl">Merchandise Drop</h1>
                <p className=" ml-2 text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
            <div className=" w-full flex items-center mb-2 ">
              <div className=" flex  rounded-lg   items-center py-3 justify-center   w-1/6   bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700 ">
                <img alt="" src="compass.svg"></img>
              </div>
              <div className="">
                <h1 className=" mb-2 ml-2  text-3xl">Collaboration</h1>
                <p className=" ml-2 text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
            <div className=" w-full items-center flex mb-2 ">
              <div className=" flex  rounded-lg  items-center py-3 justify-center   w-1/6  bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700 ">
                <img alt="" src="/award.svg"></img>
              </div>
              <div className="">
                <h1 className=" mb-2 ml-2  text-3xl">Future Drops</h1>
                <p className=" ml-2 text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right */}

      <div className="lg:w-1/2 w-[430px]   lg:relative flex order-1 lg:order-2 justify-center">
        <div className=" ml-14  p-6 lg:p-0 lg:w-60 lg:z-40 lg:absolute lg:top-0 lg:left-12 ">
          <img
            className=" hidden  lg:block rounded-xl"
            alt=""
            src="/roadmappix1.jpg"
          ></img>
        </div>

        <div className="  lg:w-[432px] lg:z-40  lg:absolute lg:right-12   lg:top-28  ">
          <img className="   rounded-xl" alt="" src="/roadmappix2.jpg"></img>
        </div>
        <div className=" hidden lg:block   bg-gradient-to-r  from-blue-700 to-[#e026de]  top-20 absolute w-96 h-96 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Roadmap;
