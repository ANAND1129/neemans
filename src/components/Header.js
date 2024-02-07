import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Marquee from "react-fast-marquee";
import { GiRunningShoe } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Slippers from "./Slippers";
import Clothing from "./Clothing";
import Brand from "./Brand";
import Shoes from "./Shoes";
import Reviews from "./Reviews";
import Offers from "./Offers";
import Help from "./Help";


const Header = () => {
  const [hover, setOnhover] = useState(false);
  const [search, setCloseSearch] = useState(true);
  const [currentHoveredItem, setCurrentHoveredItem] = useState(null);

  const Onsearch = () => {
    setCloseSearch(false);
  };

  const OnHover = () => {
    setOnhover(!hover);
  };

  const onItemHover = (item) => {
    setCurrentHoveredItem(item);
  };

  const onItemLeave = () => {
    setCurrentHoveredItem(null);
  };

  const componentMapping = {
    SHOES: <Shoes />,
    SLIPPERS: <Slippers />,
    CLOTHING: <Clothing />,
    BRAND: <Brand />,
    REVIEWS:<Reviews/>,
    OFFERS:<Offers/>,
    HELP:<Help/>
  };

  const NavHead = [
    "SHOES",
    "SLIPPERS",
    "CLOTHING",
    "BRAND",
    "REVIEWS",
    "OFFERS",
    "HELP",
  ];

  return (
    <div className="border fixed z-[999] ">
      <div className=" flex  justify-between bg-slate-400 ">
        <div className=" p-2 flex w-[60%] ml-14">
          <Marquee speed={200}>
            <div className="flex gap-40">
              <div className="flex gap-2">
                <div>
                  <GiRunningShoe />
                </div>
                <h1 className="text-sm ">NEW LAUNCH - WALK HIGHER</h1>
              </div>
              <div>
                <h1 className="text-sm ">NEW LAUNCH - GRIP FIT SLIP ON</h1>
              </div>
              <div className="flex gap-2">
                <div>
                  <GiRunningShoe />
                </div>
                <h1 className="text-sm ">NEW LAUNCH - TRAVEL SLIDES</h1>
              </div>
            </div>
          </Marquee>
        </div>
        <div className=" flex gap-3 p-1">
          <h4 className="">LOGIN/SIGNUP</h4>
          <h4 className="">TRACK YOUR ORDER</h4>
          <div className="">
            <div className="" onMouseOver={() => OnHover()}>
              HELP
            </div>
            <div
              className={`   ${hover ? "block" : "hidden"}`}
              onMouseLeave={() => OnHover()}
            >
              <div className="border absolute right-5 mt-4 w-auto  h-auto bg-white">
                <div className="border text-lg p-2 hover:bg-slate-500">
                  <h1>Return & Exchange</h1>
                </div>
                <div className="border text-lg p-2 hover:bg-slate-500">
                  <h1>Track your order</h1>
                </div>
                <div className="border text-lg p-2 hover:bg-slate-500">
                  <h1>Contact Us</h1>
                </div>
                <div className="border text-lg p-2 hover:bg-slate-500">
                  <h1>Bulk Inquiry</h1>
                </div>
                <div className="border text-lg p-2 hover:bg-slate-500">
                  <h1>#Ask neeman's</h1>
                </div>
                <div className="border text-lg p-2 hover:bg-slate-500">
                  <h1>Return Policy</h1>
                </div>
                <div className="border text-lg p-2 hover:bg-slate-500">
                  <h1>Shoe Care</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex bg-white  justify-between">
        <div className=" text-xl p-3">
          <h1>NEEMAN'S</h1>
        </div>
        <div className=" flex w-[50%] justify-between ">
          {NavHead.map((items) => (
            <div
              className="p-4 text-lg"
              onMouseEnter={() => onItemHover(items)}
              onMouseLeave={onItemLeave}
            >
              <h1 className="hover:underline cursor-pointer" id="index">{items}</h1>
              {currentHoveredItem === items && componentMapping[items]}
            </div>
          ))}
        </div>
        <div className=" w-[13%] p-3 gap-10 flex ">
          <div className="flex " onClick={() => Onsearch()}>
            <CiSearch className="mt-1 cursor-pointer" />
            <h1 className="ml-2 cursor-pointer">SEARCH</h1>
          </div>
          <div className="flex">
            <FiShoppingCart className="mt-1" />
            <h1 className="ml-2">
              CART
              <span className="ml-2 border p-1 bg-yellow-500 rounded-full">
                0
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className={`absolute z-[999] bg-white w-screen border flex p-4 h-[70px] ${search ? "hidden" : "block"}`}>
        <div className="">
          <BsSearch className="mt-3 mr-4" />
        </div>
        <div className=" w-[95%]">
          <input
            className="w-full text-xl p-2 outline-none "
            type="text"
            placeholder="SEARCH...."
          />
        </div>
        <div className=" ">
          <RxCross1 className="mt-3 ml-5" onClick={() => setCloseSearch(true)} />
        </div>
      </div>
    </div>
  );
};

export default Header;

