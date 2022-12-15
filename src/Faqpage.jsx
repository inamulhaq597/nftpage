import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";
import Blog from "./Blog";
import { timerData } from "./Profile";
import Subscribe from "./Subscribe";
import Timer from "./Timer";

const Faqpage = () => {
  return (
    <>
      
      <section className="mb-36 relative h-[250px] flex items-center justify-center">
        <div className="contactsubdiv h-full w-screen absolute bottom-top left-0    ">
          
              </div>
              <div>
            <h1 className="text-[#FFFFF8]    font-semibold text-5xl">
            Frequently Asked Questions
            </h1>
          </div>
      </section>
      {/* 2 */}
      <div className=" lg:p-12  text-white rounded-3xl ">
        <div class=" lg:w-full relative text-center mb-6 p-2 ">
          <div class="  lg:-mt-4   hidden md:block   text-9xl   text-gray-200   opacity-10  font-semibold w-full  ">
            <h1 data-aos="fade-up">Question</h1>
          </div>
          <div className="relative   text-center md:absolute text-white   right-1/3 translate-x-1/3 w-full  lg:text-4xl  text-2xl  -bottom-5 ">
            Popular Question About NFT
          </div>
        </div>
        <div className="w-full  flex justify-center mb-3 p-2 ">
          <div className="lg:w-1/3 text-center  lg:text-lg   text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
        </div>
      </div>

      {/* 3 */}

      <div className="container mx-auto  flex justify-center lg:p-12 lg:flex-row flex-col ">
        <div className="text-white  flex justify-center lg:p-8 lg:w-4/6  ">
          <div className="lg:w-5/6 px-4 order-2  w-full ">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-gradient-to-r from-[#1d4ed8] to-[#e026de] "
                        : ""
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

        {/* 2 */}
        <div className="text-white  flex justify-center lg:p-8 lg:w-4/6">
          <div className="lg:w-5/6 px-4 w-full order-2 ">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-gradient-to-r from-[#1d4ed8] to-[#e026de] "
                        : ""
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
      {/* 4 */}
      <div className="w-full  p-10  container mx-auto">
        <div className="  text-white  flex   justify-center  bg-[#08092D] h-52 flex-col">
          <section
            data-aos="fade-left"
            className="grid grid-cols-2 md:grid-cols-4 "
          >
            {timerData.map((v, i) => (
              <Timer
                img={v.img}
                title={v.title}
                text={v.text}
                key={i}
                index={i}
              />
            ))}
          </section>
        </div>
          </div>
          {/* 5 */}
          <Blog></Blog>
          <Subscribe></Subscribe> 
    </>
  );
};

export default Faqpage;
