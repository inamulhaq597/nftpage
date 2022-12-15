import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Subscribe from "./Subscribe";

const Nftdetailsub = () => {
  return (
    <>
    
      <section className="lg:mb-36 mb-12 relative h-[250px] flex items-center justify-center">
        <div className="contactsubdiv h-full w-screen absolute bottom-top left-0    "></div>
        <div>
          <h1 className="text-[#FFFFF8]    font-semibold text-5xl">
            NFT Details
          </h1>
        </div>
      </section>

      <section className="lg:mb-36 ">
        <div className="container mx-auto ">
          <div className="flex lg:flex-row flex-col ">
            <div className="lg:w-1/2 text-white flex justify-center">
              <div className="text-white lg:w-[480px]   mb-8 lg:mb-0   h-auto pixmain">
                <div className=" flex p-6 space-x-3  transition-all ease duration-500 hover:-translate-y-6 ">
                  <img
                    data-aos="fade-down"
                    className="  rounded-md"
                    alt=""
                    src="/checkpix3.jpg"
                  ></img>
                </div>

                <div className="p-3 ">
                  <div className="  text-4xl text-white font-semibold flex items-center ">
                    <img alt="" src="/etheruem.svg"></img>0.24
                    <span className="text-gray-500  text-lg">($2,994.197)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2  text-white">
              <div className="  w-full  p-8">
                {/* 1 */}
                <div class=" w-full relative  mb-12 ">
                  <div class="     hidden md:block   text-8xl   text-gray-200   opacity-10    font-bold w-full  ">
                    <h1 data-aos="fade-left">Rare item</h1>
                  </div>
                  <div className="relative  text-start   md:absolute   lg:right-1/4 lg:translate-x-1/3 w-full  lg:text-4xl  text-2xl -bottom-5 ">
                    Vaporwave Sculpture
                  </div>
                </div>
                {/* hed */}
                <div className="flex justify-center mb-2 ">
                  <div className="  ">
                    <p className="  lg:text-lg text-[#888DAC]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      Duis aute irure dolor in reprehenderit in voluptate dolore
                      magna aliqua
                    </p>
                  </div>
                </div>

                {/* timer */}
                <div className="mb-6">
                  <h1 className="  lg:text-3xl  text-2xl  font-semibold">Buy On :</h1>
                </div>
                <div className=" flex mb-6 lg:flex-row flex-col ">
                  <div className="text-white  lg:mb-0 mb-6 w-1/2 lg:border-r  border-gray-700">
                    <button className=" cursor-pointer hover:-translate-y-1 ease duration-200   rounded-md bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700  px-7 py-3 lg:text-base text-base   font-semibold lg:font-medium text-white  lg:px-7 lg:py-3">
                      Opensea
                    </button>
                  </div>
                  <div className="text-white w-1/2 lg:mb-0 mb-6 lg:border-r border-gray-700 flex lg:justify-center">
                    <button className=" cursor-pointer hover:-translate-y-1 ease duration-200   rounded-md bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700  px-7 py-3 lg:text-base text-base   font-semibold lg:font-medium text-white  lg:px-8 lg:py-3">
                      Rarity
                    </button>
                  </div>
                  <div className="text-white w-1/2 lg:mb-0 mb-6 flex lg:justify-center">
                    <button className=" cursor-pointer hover:-translate-y-1 ease duration-200   rounded-md bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700  px-7 py-3 lg:text-base text-base   lg:font-medium text-white  lg:px-7 lg:py-3">
                      Analytics
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <h1 className="  lg:text-3xl  text-lg  font-semibold">Overview :</h1>
                </div>
                <div className="w-full ">
                  <p className=" lg:text-lg text-[#888DAC]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat Duis
                    aute irure dolor in reprehenderit in voluptate dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto ">
          <div className="w-full  flex justify-center  ">
            <div class=" w-full relative text-center mb-8">
              <div class="  lg:-mt-4   hidden md:block   text-8xl   text-gray-200   opacity-10    font-bold w-full  ">
                <h1 data-aos="fade-right">Popular</h1>
              </div>
              <div className="relative   text-center md:absolute text-white   right-1/3 translate-x-1/3 w-full  text-3xl  -bottom-5 ">
                Check Devvata NFT Collection
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mb-12 ">
            <div className="text-center lg:w-1/3 text-gray-500">
              {" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>

          {/* slider */}
          <div className=" container mx-auto w-full flex justify-center mb-8 text-white">
            <div className="w-5/6  ">
              {" "}
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img className="  rounded-md" src="/checkpix1.jpg" alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="  rounded-md" src="/checkpix2.jpg" alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="  rounded-md" src="/checkpix3.jpg" alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="  rounded-md" src="/checkpix4.jpg" alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img className="  rounded-md" src="/checkpix5.jpg" alt=""></img>
                </SwiperSlide>

                {/* <Pagination /> */}
              </Swiper>
            
            </div>
          </div>
        </div>
          </section>
          
          <Subscribe></Subscribe> 
    </>
  );
};

export default Nftdetailsub;
