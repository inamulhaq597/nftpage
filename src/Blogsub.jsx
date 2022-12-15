import React from "react";
import Card from "./Card";
import Subscribe from "./Subscribe";

const Blogsub = () => {
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
    {
      img: "/blogpix4.jpg",
      title: "Top Ways to Make Money with NFTs in 2022 You Must Try",
      buttonText: "NFT",
    },
  ];
  return (
    <>
     
      <section className="mb-36 relative h-[250px] flex items-center justify-center">
        <div className="contactsubdiv h-full w-screen absolute bottom-top left-0    ">
          
              </div>
              <div>
            <h1 className="text-[#FFFFF8]    font-semibold text-5xl">
            Our Blog
            </h1>
          </div>
      </section>
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
        {/* 2 */}
        <div className="grid xl:grid-cols-2 max-w-[1200px] mx-auto  mb-12 ">
          {cardData.map((v, i) => (
            <Card img={v.img} title={v.title} buttonText={v.buttonText} />
          ))}
                  
                  
        </div>
        {/* 3 */}
        <div className="flex justify-center  ">
          <button className=" cursor-pointer hover:-translate-y-1 ease duration-200   rounded-md bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de]  hover:to-blue-700  lg:text-lg  text-xl  font-semibold  text-white  px-20 py-4">
            Lead More
          </button>
        </div>
          </div>
          <Subscribe></Subscribe> 
    </>
  );
};

export default Blogsub;
