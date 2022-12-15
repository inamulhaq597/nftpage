import React from "react";
import Card from "./Card";

const Blog = () => {
  const cardData = [
    {
      img: "/Blog1.jpg",
      title: "5 Reasons the Metaverse Will Go Crazy in the Next Year",
      buttonText: "Insight",
      
    },
    {
      img: "/Blog2.jpg",
      title: "5 Reasons You Should Own Digital Collectibles",
      buttonText: "Digital",
      
    },
    {
      img: "/Blog3.jpg",
      title: "Top Ways to Make Money with NFTs in 2022 You Must Try",
      buttonText: "Insight",
      
    },
  ];

  return (
    <div className=" container mx-auto rounded-3xl   ">
      <div className=" lg:p-12  text-white rounded-3xl ">
        <div class=" lg:w-full relative text-center mb-6 p-2 ">
          <div class="  lg:-mt-4   hidden md:block   text-9xl   text-gray-200   opacity-10  font-semibold w-full  ">
            <h1 data-aos="fade-up">Our Blog</h1>
          </div>
          <div className="relative   text-center md:absolute text-white   right-1/3 translate-x-1/3 w-full  text-4xl  -bottom-5 ">
            Lates Blog & Articles
          </div>
        </div>
        <div className="w-full  flex justify-center mb-3 p-2 ">
          <div className="lg:w-1/3 text-center  text-lg   text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
        </div>
      </div>
      <div className="flex  lg:flex-row flex-col ">
        {cardData.map((v, i) => (
          <Card img={v.img} title={v.title} buttonText={v.buttonText} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
