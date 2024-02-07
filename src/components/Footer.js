import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { SlSocialYoutube } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { PiLinkedinLogoLight } from "react-icons/pi";

const Footer = () => {
  const Shop = [
    "Sneakers",
    "Slip Ons",
    "Athleisure",
    "Slippers",
    "Clothing",
    "Everyday collection",
    " Sole Max collection",
  ];

  const Information = [
    "Track Your Order",
    "Positive Change",
    "The Journey",
    "Why Neeman's",
    "Our Stores",
    "Press",
    "Blog",
    "FAQ"
  ];

  const Guides = [
    "Schedule a Return / Exchange",
    "Shoe Care",
    "Returns Policy",
    "Privacy Policy",
    "Cookie Policy",
   " Terms & Conditions"
  ];


  return (
    <div className="border md:h-[800px] h-full bg-black text-white">
      <div className=" text-center mt-10  ">
        <h1 className="md:text-4xl text-2xl mt-3 font-semibold">
          Our page has come to an end, but our
        </h1>
        <h1 className="md:text-4xl text-2xl  mt-3 font-semibold">
          relationship with you has not.
        </h1>
        <h4 className="text-xl  mt-12 ">STAY SUSTAINABLE AND SUBSCRIBE NOW</h4>
        <input
          type="email"
          placeholder="Enter your email address"
          className=" text-black md:w-[15%]  mt-10 p-3 outline-none"
        />
        <button className="bg-yellow-600 p-3 hover:text-black ">
          SUBSCRIBE
        </button>
      </div>

      <div className=" md:flex justify-center  space-y-5 md:space-y-0 h-[50%] gap-[17%] mt-10">
        <div className="border-b-4 md:border-b-0 ">
          <h4>SHOP</h4>
          {Shop.map((list) => (
            <p className="mt-4">{list}</p>
          ))}
        </div>
        <div className="border-b-4 md:border-b-0">
          <h4>INFORMATION</h4>
          {Information.map((list) => (
            <p className="mt-4">{list}</p>
          ))}
        </div>
        <div>
          <h4>GUIDES</h4>
          {Guides.map((list) => (
            <p className="mt-4">{list}</p>
          ))}
        </div>
      </div>

      <div className=" flex justify-center h-[60px]">
            <div className="border-t-2 w-1/2 flex justify-center gap-10 ">
                <div className="mt-5 ">
                <SlSocialInstagram className="" />
                </div>
                <div className="mt-5">
                <CiFacebook />
                </div>
                <div className="mt-5">
                <SlSocialYoutube />
                </div>
                <div className="mt-5">
                <RiTwitterXLine />
                </div>
                <div className="mt-5">
                <PiLinkedinLogoLight />
                </div>
            </div>
      </div>
    </div>
  );
};

export default Footer;
