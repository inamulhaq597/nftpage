import React from "react";
import Timer from "./Timer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
export const timerData = [
  {
    img: "/image.svg",
    title: "525",
    text: "NFT Items",
  },
  {
    img: "/heandshake.svg",
    title: "250",
    text: "On Auction",
  },
  {
    img: "/etheruem.svg",
    title: "125",
    text: "Sold items",
  },
  {
    img: "/thumbs-up.svg",
    title: "125",
    text: "Rare items",
  },
];
const Profile = () => {
  return (
    <div className="w-full  lg:p-24 p-6 ">
      <div className="mx-auto  text-white rounded-3xl flex   flex-col">
        {/* profile */}
        <div
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-once="false"
          className=" text-white profile bg-[#08092D] flex    justify-center  flex-col lg:flex-row rounded-3xl lg:p-24 lg:mb-24 mb-12"
        >
          <div className="lg:w-full  flex justify-center items-center">
            <div className="border-8   relative  border-[#888DAC]  rounded-full">
              <img
                className="rounded-full  w-[240Px]"
                alt=""
                src="/profilepix.jpg"
              ></img>
                <div className="bg-gradient-to-br from-blue-700 to-[#e026de]  font-medium text-4xl flex justify-center items-center text-center rounded-full py-3 absolute top-0 right-0  w-[60px]">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            </div>

          
          </div>

          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            showIndicators={false}
            showArrows={false}
            preventMovementUntilSwipeScrollTolerance={true}
          >
            <div className=" profile w-full text-left p-10 pl-5">
              <p className=" mb-3  text-xl text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod<br></br> tempor incididunt ut labore et dolore magna
                Portillo Art Collector Lorem <br></br>ipsum dolor sit amet,
                elit, sed do eiusmod tempor
              </p>
              <div className=" mb-2 ">
                <ul className="flex  space-x-4">
                  <li>
                    <img alt="" src="/star.svg"></img>
                  </li>
                  <li>
                    <img alt="" src="/star.svg"></img>
                  </li>
                  <li>
                    <img alt="" src="/star.svg"></img>
                  </li>
                  <li>
                    <img alt="" src="/star.svg"></img>
                  </li>
                  <li>
                    <img alt="" src="/star.svg"></img>
                  </li>
                </ul>
              </div>
              <div className="  text-xl mb-2  font-semibold">
                Deanna Houston
              </div>
              <div className="  text-sm text-gray-300  ">Art Collector</div>
            </div>
            {/* 2 */}
            <div className="w-full text-left p-10 pl-5 ">
              <p className=" mb-3  text-xl text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod<br></br> tempor incididunt ut labore et dolore magna
                Portillo Art Collector Lorem <br></br>ipsum dolor sit amet,
                elit, sed do eiusmod tempor
              </p>
              <div className=" mb-2">
                <ul className="flex  space-x-4">
                  <li>
                    <img alt="" src="/star.svg"></img>
                  </li>
                  <li>
                    <img alt="" src="/star.svg"></img>
                  </li>
                  <li>
                    <img alt="" src="/star.svg"></img>
                  </li>
                  <li>
                    <img alt="" src="/star.svg"></img>
                  </li>
                  <li>
                    <img alt="" src="/star.svg"></img>
                  </li>
                </ul>
              </div>
              <div className="  text-xl mb-2  font-semibold">
                Deanny Portillo
              </div>
              <div className="  text-sm text-gray-300  ">Art Collector</div>
            </div>
          </Carousel>
        </div>

        {/* timer */}

        <section
          data-aos="fade-left"
          className="grid grid-cols-2 md:grid-cols-4 "
        >
          {timerData.map((v, i) => (
            <Timer img={v.img} title={v.title} text={v.text} key={i} index={i} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Profile;
