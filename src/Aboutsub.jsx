import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Blog from "./Blog";

import { timerData } from "./Profile";
import Roadmap from "./Roadmap";
import Subscribe from "./Subscribe";
import Three from "./Three";
import Timer from "./Timer";

const Aboutsub = () => {
  return (
    <>

      <section className="mb-36 relative h-[250px] flex items-center justify-center">
        <div className="contactsubdiv h-full w-screen absolute bottom-top left-0    ">
          
              </div>
              <div>
            <h1 className="text-[#FFFFF8]    font-semibold text-4xl">
            About Us
            </h1>
          </div>
      </section>

      <Three></Three>

      {/* 2 */}
      <section>
        <div className=" lg:p-12  mb-6  text-white rounded-3xl ">
          <div class=" lg:w-full relative text-center mb-6 lg:p-2 p-4 ">
            <div class="  lg:-mt-4   hidden md:block   text-9xl   text-gray-200   opacity-10  font-semibold w-full  ">
              <h1 data-aos="fade-up">Approach</h1>
            </div>
            <div className="relative   lg:text-center text-start md:absolute text-white   right-1/3 translate-x-1/3 w-full  lg:text-4xl   text-3xl -bottom-5 ">
              We Are So Different From Other Creators
            </div>
          </div>
          <div className="w-full  flex justify-center mb-3 lg:p-2 p-4">
            <div className="lg:w-1/3 lg:text-center  text-lg   text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className=" container mx-auto flex lg:flex-row  flex-col mb-12 border-t border-gray-800 ">
        <div className="  lg:w-1/3 mt-12">
          <div className="  ">
            <div className=" lg:text-3xl  text-2xl font-semibold p-3 text-white">
              Our Vission
            </div>
            <div className=" p-3  text-gray-400   lg:text-xl  text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing e sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostru exercitation dolore magna
            </div>
            <div className="text-white  ">
              <div className=" hover:text-white items-center flex space-x-3 p-3 transition-all ease duration-500 text-lg font-semibold text-[#E026DE]  cursor-pointer hover:-translate-y-2">
                <span>Read More</span>{" "}
                <AiOutlineArrowRight size={20} color="#E026DE" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 mt-12">
          <div className="  ">
            <div className=" lg:text-3xl  text-2xl font-semibold p-3 text-white">
              Our Mission
            </div>
            <div className=" p-2  text-gray-400   lg:text-xl  text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing e sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostru exercitation dolore magna
            </div>
            <div className="text-white  ">
              <div className=" hover:text-white items-center flex space-x-3 p-3 transition-all ease duration-500 text-lg font-semibold text-[#E026DE]  cursor-pointer hover:-translate-y-2">
                <span>Read More</span>{" "}
                <AiOutlineArrowRight size={20} color="#E026DE" />
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="lg:w-1/3 mt-12">
          {" "}
          <div className="  ">
            <div className=" lg:text-3xl  text-2xl font-semibold p-3 text-white">
              Our Awards
            </div>
            <div className=" p-2  text-gray-400   lg:text-xl  text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing e sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostru exercitation dolore magna
            </div>
            <div className="text-white  ">
              <div className=" hover:text-white items-center flex space-x-3 p-3 transition-all ease duration-500 text-lg font-semibold text-[#E026DE]  cursor-pointer hover:-translate-y-2">
                <span>Read More</span>{" "}
                <AiOutlineArrowRight size={20} color="#E026DE" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Roadmap></Roadmap>
      <div className="w-full  lg:p-24 p-6 ">
      <div className="mx-auto  text-white rounded-3xl flex   flex-col">
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
      <Blog></Blog>
      <Subscribe></Subscribe>
    </>
  );
};

export default Aboutsub;
