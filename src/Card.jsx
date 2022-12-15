import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ img, title, buttonText }) => {
  return (
    <div className=" p-4  ">
      <div className="">
        <div className="   relative h-[350px]  w-full p-2">
          <img
            className="rounded-2xl  absolute w-full inset-0 object-cover h-full"
            alt=""
            src={img}
          />

          <div className=" absolute bottom-8   left-6">
            <button className="bg-black text-white py-2 px-5">
              {buttonText}
            </button>
          </div>
        </div>

        <div>
          <div className=" text-2xl font-semibold p-2 text-white">{title}</div>
          <div className=" p-2  text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim...
          </div>

          <div className="text-white  ">
            <div className=" hover:text-white items-center flex space-x-3 p-3 transition-all ease duration-500 text-lg font-semibold text-[#E026DE]  cursor-pointer hover:-translate-y-2">
              <span>Read More</span>{" "}
              <AiOutlineArrowRight size={20} color="#E026DE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
