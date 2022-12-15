import React from "react";

const Timer = ({ img, title, text,index  }) => {
  return (
    <div className=" flex w-full ">
      <div className= {`${index === 3 ? "":"lg:border-r border-gray-800"} flex   w-full   items-center`}>
        <div className=" lg:w-[30%] w-[40%] p-6 flex lg:justify-end flex-shrink-0">
          <img className="" alt="" src={img}></img>
        </div>
        <div className=" w-3/6 lg:text-5xl   text-3xl  lg:font-semibold">
          {title} <span className="  text-blue-700 ">+</span>
          <div className="  text-sm lg:pl-3 p-1 text-gray-400">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
