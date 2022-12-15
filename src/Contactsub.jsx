import React from "react";

import Subscribe from "./Subscribe";

const Contactsub = () => {
  return (
    <>
     
      <section className="lg:mb-36 mb-12 relative lg:h-[250px] h-[100px] flex items-center justify-center">
        <div className="contactsubdiv h-full w-screen absolute bottom-top left-0    ">
          
              </div>
              <div>
            <h1 className="text-[#FFFFF8]    font-semibold text-4xl">
            Contact Us
            </h1>
          </div>
      </section>
      <section className=" flex  lg:items-end  ">
        <div className="text-white container mx-auto rounded-md  flex lg:p-20 p-6 lg:flex-row flex-col lg:items-center ">
          <div className="lg:w-1/2  ">
            <div class=" w-full relative mb-6 ">
              <div class="     hidden md:block   text-8xl   text-gray-200   opacity-10    font-bold w-full  ">
                <h1 data-aos="fade-left">Contact</h1>
              </div>
              <div className="relative  lg:text-center  md:absolute   lg:right-1/2 lg:translate-x-1/3 w-full  lg:text-4xl   text-2xl -bottom-1 ">
                Get In Touch With Devvata
              </div>
            </div>
            <div className=" lg:p-2  mb-8  ">
              <p className=" text-ellipsis overflow-hidden text-base  text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </div>
            <div className=" rounded-md lg:p-2 ">
              <div className="flex mb-6 lg:flex-row flex-col">
                <div className=" flex mb-6 lg:w-[50%] ">
                  <div className=" flex rounded-lg items-center  justify-center  w-[20%] bg-[#E026DE]  ">
                    <img alt="" src="map-pin.svg"></img>
                  </div>

                  <div className="w-full p-4 ">
                    <h1 className="  lg:text-2xl  text-xl font-bold">Location</h1>
                    <p className="text-gray-400">Jl. Raya Ubud No. 88</p>
                  </div>
                </div>

                <div className="  flex mb-6 lg:w-[50%]">
                  <div className=" flex rounded-lg items-center  justify-center  w-[20%]  bg-[#1F00FC]  ">
                    <img alt="" src="share-2.svg"></img>
                  </div>

                  <div className="w-full p-4 ">
                    <h1 className="  lg:text-2xl  text-xl font-bold">Social Media</h1>
                    <p className="text-gray-400">@devvata_nft</p>
                  </div>
                </div>
              </div>
              <div className="flex mb-6 lg:flex-row flex-col ">
                <div className=" mb-6 flex lg:w-[50%]">
                  <div className=" flex rounded-lg items-center  justify-center  w-[20%]  bg-[#1F00FC]  ">
                    <img alt="" src="phone-forwarded.svg"></img>
                  </div>

                  <div className="w-full p-4 ">
                    <h1 className="  lg:text-2xl  text-xl font-bold">Phone Number</h1>
                    <p className="text-gray-400">(+62)81 2316 9081</p>
                  </div>
                </div>
                <div className="  flex mb-6 lg:w-[50%] ">
                  <div className=" flex rounded-lg items-center  justify-center  w-[20%]  bg-[#E026DE]  ">
                    <img alt="" src="inbox.svg"></img>
                  </div>

                  <div className="w-full p-4 ">
                    <h1 className="  lg:text-2xl  text-xl font-bold">Drop Us a Line</h1>
                    <p className="text-gray-400">support@domain.com</p>
                  </div>
                </div>
              </div>

              <div className="flex h-24    items-end   justify-between">
                <div>
                  <h1 className="  text-2xl font-bold">
                    Official Social Media :
                  </h1>
                </div>
                <div className="lg:w-1/2   text-white  space-x-4">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class=" p-3 bg-gray-800 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-white   hover:text-[#E026DE]  transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      class="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="p-3 bg-gray-800 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-white   hover:text-[#E026DE]  transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="p-3 bg-gray-800 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-white   hover:text-[#E026DE]  transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 w-full ">
            <section class="  mb-12 lg:mb-0 ">
              <div class="lg:px-6  ">
                <div class=" flex justify-center h-full lg:w-[100%] rounded-md   shadow-2xl  bg-[#050622] g-6">
                  <div class="w-5/6 p-2 ">
                    <form>
                      <div class="mb-8 mt-6">
                        <input
                          type="text"
                          class="form-control block w-full px-4 py-4 text-xl font-normal text-white bg-[#050622] bg bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700  focus:outline-none"
                          id="exampleFormControlInput2"
                          placeholder="Your Name"
                        />
                      </div>

                      <div class="mb-8">
                        <input
                          type="email"
                          class="form-control block w-full px-4 py-4 text-xl font-normal text-white bg-[#050622] bg bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700  focus:outline-none"
                          id="exampleFormControlInput2"
                          placeholder="Email address"
                        />
                      </div>

                      <div class="mb-8">
                        <input
                          type="text"
                          class="form-control block w-full px-4 py-4 text-xl font-normal text-white bg-[#050622] bg bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700  focus:outline-none"
                          id="exampleFormControlInput2"
                          placeholder="Your Subject"
                        />
                      </div>

                      <div class="mb-8">
                        <input
                          type="text"
                          class="form-control block w-full px-4 py-16 text-xl font-normal text-white bg-[#050622] bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700  focus:outline-none"
                          id="exampleFormControlInput2"
                          placeholder="Your Message"
                        />
                      </div>

                      <div class=" lg:text-left">
                        <button
                          type="button"
                          class="inline-block px-7 py-4 bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Subscribe></Subscribe>
    </>
  );
};

export default Contactsub;
