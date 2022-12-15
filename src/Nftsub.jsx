import React from "react";
import Four from "./Four";
import Profile from "./Profile";
import Question from "./Question";
import Subscribe from "./Subscribe";

const Nftsub = () => {
  return (
    <>
      
      <section className="mb-36 relative h-[250px] flex items-center justify-center">
        <div className="contactsubdiv h-full w-screen absolute bottom-top left-0    "></div>
        <div>
          <h1 className="text-[#FFFFF8]    font-semibold text-5xl">
            NFT Collection
          </h1>
        </div>
      </section>
      <Four></Four>
      <Profile></Profile>
      <Question></Question>
      <Subscribe></Subscribe>
    </>
  );
};

export default Nftsub;
