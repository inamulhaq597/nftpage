import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
const Question = () => {
  return (
    <div className="container mx-auto  flex  lg:flex-row flex-col">
      <div className=" lg:w-1/2 ">
        <div className="w-full px-4 order-2 ">
          <div className="mx-auto w-full max-w-md rounded-2xl  p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-gradient-to-r from-[#1d4ed8] to-[#e026de] " : ""
                    }   flex lg:w-full w-full mb-6 justify-between items-center rounded-sm bg-[#08092D] px-3 py-3 text-left text-sm   font-semibold text-white       `}
                  >
                    <span>What Are Non-Fungible Tokens (NFT) ?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-10 w-10 text-[#BF22C3]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pb-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-gradient-to-r from-blue-700 to-[#e026de] " : ""
                    }   flex lg:w-full w-full  mb-6 justify-between items-center rounded-sm bg-[#08092D] px-3 py-3 text-left text-sm   font-semibold text-white       `}
                  >
                    <span>What Are Non-Fungible Tokens (NFT) ?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-10 w-10 text-[#BF22C3]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pb-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-gradient-to-r from-blue-700 to-[#e026de] " : ""
                    }   flex lg:w-full w-full  mb-6 justify-between items-center rounded-sm bg-[#08092D] px-3 py-3 text-left text-sm   font-semibold text-white  `}
                  >
                    <span>What Are Non-Fungible Tokens (NFT) ?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-10 w-10 text-[#BF22C3]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pb-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-gradient-to-r from-blue-700 to-[#e026de] " : ""
                    }   flex lg:w-full w-full  mb-6 justify-between items-center rounded-sm bg-[#08092D] px-3 py-3 text-left text-sm   font-semibold text-white  `}
                  >
                    <span>What Are Non-Fungible Tokens (NFT) ?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-10 w-10 text-[#BF22C3]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-2 pb-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className=" lg:w-1/2   order-1 p-6">
        <div class=" w-full relative  lg:mb-6 mb-8">
          <div class="     hidden md:block   text-9xl   text-gray-200   opacity-10    font-bold w-full  ">
            Question
          </div>
          <div className="relative lg:p-4 md:text-start  text-white md:absolute   right-1/3 translate-x-1/3 w-full  lg:text-4xl  text-3xl -bottom-4">
            Popular Question About NFT
          </div>
        </div>
        {/* hed */}
        <div className=" lg:p-3 mb-6 lg:mb-0 ">
          <div className=" lg:w-4/6 ">
            <p className="  text-lg text-[#888DAC]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes
            </p>
          </div>
        </div>

        <div className="lg:p-3">
          <button className="rounded-md cursor-pointer hover:-translate-y-1 ease duration-200   bg-gradient-to-br from-blue-700 to-[#e026de]  font-bold lg:px-6 lg:py-4 hover:from-[#e026de]  hover:to-blue-700  px-5 py-3 lg:text-lg   text-white  ">
            Ask Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
