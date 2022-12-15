import React, { useState } from "react";
import Navbarbtn from "./Navbarbtn";
import { Link, NavLink } from "react-router-dom";
// import { classNames } from "./utils";

const Navbar = ({setSidebar}) => {
  const [drawer, setDrawer] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  // const navData = [
  //   {
  //     img: "/Blog1.jpg",
  //     title: "5 Reasons the Metaverse Will Go Crazy in the Next Year",
  //     buttonText: "Insight",

  //   },
  //   {
  //     img: "/Blog2.jpg",
  //     title: "5 Reasons You Should Own Digital Collectibles",
  //     buttonText: "Digital",

  //   },
  //   {
  //     img: "/Blog3.jpg",
  //     title: "Top Ways to Make Money with NFTs in 2022 You Must Try",
  //     buttonText: "Insight",

  //   },
  // ];
  return (
    <section className={"     w-full "}>
      <div className="w-full border-b border-gray-800 p-3   ">
        <div className="container mx-auto  lg:p-2 p-2  h-auto flex flex-col lg:flex-row ">
          <div className="flex justify-between lg:w-1/2 z-30 ">
            <Link className="w-full lg:justify-center flex" to={"/"}>
              <div className=" items-center flex ">
                {
                  <img
                    className="lg:w-[230px] w-[180px] lg:h-8"
                    src="/logo.png"
                    alt=""
                  />
                }
              </div>
            </Link>

            <div className="outline-none  ">
              {" "}
              <button
                onClick={() => setDrawer(!drawer)}
                className="px-2 py-2  lg:hidden  block text-white"
              >
                <img width={50} height={50} src="/download.svg" alt="" />
              </button>
            </div>
          </div>

          <div
            className={`w-full flex flex-wrap space-x-4 lg:space-x-10  items-center  ${
              drawer === true ? "" : "hidden lg:flex"
            } `}
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                classNames(
                  " font-semibold  ml-2 lg:ml-0 text-base hover:text-gray-400 items-center flex",
                  isActive ? "" : "text-white"
                )
              }
            >
              Home
            </NavLink>
            <div>
              <NavLink
                to={"/aboutsub"}
                className={({ isActive }) =>
                  classNames(
                    "  font-semibold  text-base hover:text-gray-400",
                    isActive ? "" : "text-white"
                  )
                }
              >
                About
              </NavLink>
            </div>

            <Navbarbtn text={"NFT"} dropdown={[{ name: "NFT", path: "/Nftsub" },{name: "NFT Details",path:"/Nftdetailsub"}]} />
            <Navbarbtn text={"Pages"} dropdown={[{ name: "FAQ", path: "/Faqpage" },{name: "404 pages",path:"/Error404page"}]} />
            <Navbarbtn text={"Blog"} dropdown={[{ name: "Blog", path: "/Blogsub" },{name: "Single Blog",path:"/Singleblog"}]} />

            <div>
              <NavLink
                to={"/contactsub"}
                className={({ isActive }) =>
                  classNames(
                    "font-semibold   text-base hover:text-gray-400",
                    isActive ? "" : "text-white"
                  )
                }
              >
                Contact
              </NavLink>
            </div>

            <div className="  w-1/3 mt-3 lg:mt-0 flex items-left   justify-center">
              <button onClick={() => setSidebar(true)} className="">
                <img
                  className="  fill-white"
                  width={40}
                  height={50}
                  src="/align-right.svg"
                  alt="Menue"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
