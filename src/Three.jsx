import React from "react";

const Three = () => {
  return (
    <div className="container mx-auto    flex  flex-col lg:flex-row text-white mb-24">
      {/* lift */}
      <div className="lg:w-1/2   lg:relative flex  justify-center">
        <div className=" p-6 lg:p-0 lg:w-60 lg:z-40 lg:absolute lg:top-0 lg:left-12 ">
          <img className="rounded-xl" alt="" src="/combo2.jpg"></img>
        </div>
        <div className=" hidden lg:block w-60 z-40  absolute -bottom-10 left-32 flex-shrink-0  border-[15px] rounded-xl  border-black ">
          <img alt="" src="/combo3.jpg"></img>
        </div>
        <div className=" hidden lg:block w-80 z-40  absolute right-24   top-20  ">
          <img className="rounded-xl" alt="" src="/cambo1.jpg"></img>
        </div>
        <div className=" hidden lg:block bg-gradient-to-r  from-blue-700 to-[#e026de]  top-20 absolute w-96 h-96 rounded-xl"></div>
      </div>

      {/* right */}
      <div className="lg:w-1/2  flex justify-center  ">
        <div className="  w-[80%]">
          {/* 1 */}
          <div class=" w-full relative  mb-12 ">
            <div class="  -mt-4   hidden md:block   text-9xl   text-gray-200   opacity-10    font-bold w-full  ">
              <h1 data-aos="fade-left">About</h1>
            </div>
            <div className="relative  md:text-start  md:absolute   right-1/3 translate-x-1/3 w-full  text-4xl  -bottom-10 ">
              Let's Drive Into The World of NFT With Devvata
            </div>
          </div>
          {/* hed */}
          <div className="flex justify-center mb-2 ">
            <div className="  ">
              <p className="  text-lg text-[#888DAC]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes
              </p>
            </div>
          </div>

          {/* timer */}
          <div className=" flex mb-2">
            <div className=" w-1/2 flex justify-center items-center text-center">
              <div className="w-1/3 flex justify-center  ">
                <img className=" w-3/6" alt="" src="/image.svg"></img>
              </div>
              <div className="  text-5xl font-semibold ">525 +</div>
            </div>
            <div className=" w-1/2 flex justify-center items-center text-center">
              <div className="w-1/3 flex justify-center  ">
                <img className="w-3/6 " alt="" src="/heandshake.svg"></img>
              </div>
              <div className="  text-5xl font-semibold ">250 +</div>
            </div>
          </div>
          <div className="mb-10  text-lg text-[#888DAC]">
            Consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          </div>

          <div className="flex justify-center  lg:justify-start">
            <button className="rounded-md  cursor-pointer hover:-translate-y-1 ease duration-200   bg-gradient-to-br from-blue-700 to-[#e026de]   lg:px-6 lg:py-4 hover:from-[#e026de]  hover:to-blue-700  px-7 py-3 lg:text-lg  text-lg  font-bold  text-white  ">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
