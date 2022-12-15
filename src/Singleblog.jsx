import React from "react";
import Blog from "./Blog";
import Subscribe from "./Subscribe";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
// import { Pagination } from "swiper";
const Singleblog = () => {
  return (
    <>
      
      <section className="mb-36 relative h-[250px] flex items-center justify-center">
        <div className="contactsubdiv h-full w-screen absolute bottom-top left-0    ">
          
              </div>
              <div>
            <h1 className="text-[#FFFFF8]    font-semibold text-4xl">
            5 Reasons You Should Own Digital Collectibles
            </h1>
          </div>
      </section>
      {/* 2 */}

      <div className="container mx-auto ">
        <div className="w-full flex justify-center mb-10">
          {" "}
          <div className=" w-1/2 ">
            <img className="  rounded-lg" alt="" src="/Blog2.jpg"></img>
          </div>
        </div>
        {/* hed */}
        <div className="w-full flex  mb-12 justify-center">
          {" "}
          <div className=" w-1/2 ">
            <h1 className="text-white mb-6  text-3xl">
              NFT is an asset that has a unique code
            </h1>
            <p className="text-gray-400 mb-6 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim
            </p>
            <p className="text-gray-400 mb-6 text-lg">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim
            </p>
            <p className="text-gray-400 mb-6 text-lg">
              Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam
              massa dolor, imperdiet nec consequat a, congue id sem. Maecenas
              malesuada faucibus finibus. Donec vitae libero porttitor, laoreet
              sapien a, ultrices leo. Duis dictum vestibulum ante vitae
              ullamcorper. Phasellus ullamcorper, odio vitae eleifend ultricies,
              lectus orci congue magna, in egestas nulla libero non nisl. Etiam
              efficitur in arcu ut lacinia.
            </p>
          </div>
        </div>

        {/* slider */}
        <div className=" container mx-auto w-full flex justify-center mb-8 text-white">
          <div className="w-1/2 ">
            {" "}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src="/slide1.jpg" alt=""></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/slide2.jpg" alt=""></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/slide3.jpg" alt=""></img>
              </SwiperSlide>

              {/* <Pagination /> */}
            </Swiper>
            <p className="text-gray-400 mb-6 mt-6 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              feugiat purus. Duis turpis nunc, aliquam id nunc ac, convallis
              dictum nisi. Curabitur vehicula tincidunt sapien, vel c ac. Donec
              diam augue, consequat sit amet metus ac, bibendum mattis massa.
              Duis mollis, ligula pretium consequat aliquet, nibh purus
              fermentum mi, bibendum molestie libero enim in sapien. Curabitur
              vestibulum sit amet nibh sed blandit bibendum molestie libero enim
              in sapien.
            </p>
            <p className="text-gray-400 mb-6 text-lg">
              Donec scelerisque enim non dictum aliquet. Sed ec nunc.
              Suspendisse volutpat elit nec nisi congue tristique eu at velit.
              Curabitur pharetra ex non ullamcorper condimentum. Morbi sit amet
              dui convallis, mattis augue id, ullamcorper massa. Fusce vulputate
              sodales hendrerit.
            </p>
          </div>
        </div>
        <div className="container flex justify-center mx-auto h-auto mb-12 ">
          <div className="w-1/2 border-b border-gray-700 flex items-center h-24 justify-between">
            <div className="text-white  text-lg">
              <span className="text-gray-600">Tags</span> : Digital
            </div>
            <div className="text-white">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class=" p-3 bg-gray-800 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-white  bg-gradient-to-t  from-blue-700 to-[#e026de]  transition duration-150 ease-in-out mx-1"
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
                class="p-3 bg-gray-800 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-white   bg-gradient-to-t  from-blue-700 to-[#e026de] transition duration-150 ease-in-out mx-1"
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
                class="p-3 bg-gray-800 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-white   bg-gradient-to-t  from-blue-700 to-[#e026de] transition duration-150 ease-in-out mx-1"
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
        {/* form */}
        <div className="container mx-auto flex justify-center">
          <div className="w-1/2 mb-6">
            {" "}
            <h1 className="text-white mb-3 text-4xl"> Leave a Reply</h1>
            <p className="text-gray-500">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
        </div>
        <div class=" flex justify-center  border-b  border-gray-800  ">
          <div class="w-1/2  mb-20">
            <form>
              <div class="mb-8  text-gray-500  text-xl">
                <h1 className="mb-2">Comment *</h1>
                <input
                  type="text"
                  class="form-control block w-full px-4    py-16 text-xl font-normal text-white bg-[#03041A]  border-gray-800 border  rounded-2xl    focus:outline-[#ffffffd]"
                  id="exampleFormControlInput2"
                />
              </div>
              <div class="mb-8 mt-6 text-gray-500  text-xl">
                <h1 className="mb-2"> Name *</h1>

                <input
                  type="text"
                  class="form-control block w-full px-4 py-3 text-xl font-normal text-white bg-[#03041A]  border-gray-800 border  rounded-2xl    focus:outline-[#ffffffd]"
                  id="exampleFormControlInput2"
                />
              </div>

              <div class="mb-8 text-gray-500  text-xl">
                <h1 className="mb-2">Emaill *</h1>

                <input
                  type="email"
                  class="form-control block w-full px-4 py-3 text-xl font-normal text-white bg-[#03041A]  border-gray-800 border  rounded-2xl    focus:outline-[#ffffffd]"
                  id="exampleFormControlInput2"
                />
              </div>

              <div class="mb-8 text-gray-500  text-xl">
                <h1 className="mb-2">Website *</h1>

                <input
                  type="text"
                  class="form-control block w-full px-4 py-3 text-xl font-normal text-white bg-[#03041A]  border-gray-800 border rounded-2xl   focus:outline-[#ffffffd]"
                  id="exampleFormControlInput2"
                />
              </div>

              <div class=" lg:text-left">
                <button
                  type="button"
                  class="inline-block px-7 py-4 bg-gradient-to-br from-blue-700 to-[#e026de]   hover:from-[#e026de] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Blog></Blog>
      <Subscribe></Subscribe>
    </>
  );
};

export default Singleblog;
