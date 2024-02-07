import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { GiCircleClaws } from "react-icons/gi";
import { FaAnglesUp } from "react-icons/fa6";
import Multi from "./Multi";

const Main = () => {
  const [single, setSingle] = useState(false);

  const [showUpArrow, setShowUpArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Adjust this value based on when you want the up arrow to appear
      const threshold = 200;
      setShowUpArrow(scrollPosition > threshold);
    };
    // Attach the event listener
    window.addEventListener("scroll", handleScroll);
    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" ">
      <div className="border  h-[900px]">hello</div>
      <div className="border px-[20%] ">
        <div className=" mt-12">
          <h1 className="text-3xl font-semibold">New Launches</h1>
          <div className="mt-2 mb-20 h-[400px] "><Multi /></div>
        </div>
      </div>

      <div className="border h-[500px]  px-[10%]">
        <div className="border mt-10 h-[400px]"></div>
      </div>

      <div className="border h-[800px] px-[15%]">
        <div className="border h-[450px] mt-3">
          <Carousel/>
        </div>
      </div>

      <div className=" lg:h-[1500px] h-[1000px] px-6 lg:px-[11%] mb-5 lg:gap-7 gap-3 grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-2 grid-rows-6 ">
        <div className="col-span-1 row-span-2  border relative  duration-300">
          <div className="absolute h-full w-full border hover:bg-slate-600 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-white text-3xl">Relive Knit Snekers</p>
              <button class="relative overflow-hidden group bg-white hover:bg-black text-black hover:text-white transition-all duration-500 p-2 px-5 mt-4">
                <span class="absolute inset-0 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 duration-500 transition-transform"></span>
                <span class="relative z-10   ">VIEW STYLE</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1  border relative  duration-300">
          <div className="absolute h-full w-full border hover:bg-slate-600 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-white text-3xl">Relive Knit Loafers</p>
              <button class="relative overflow-hidden group bg-white hover:bg-black text-black hover:text-white transition-all duration-500 p-2 px-5 mt-4">
                <span class="absolute inset-0 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 duration-500 transition-transform"></span>
                <span class="relative z-10 ">VIEW STYLE</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1  border relative  duration-300">
          <div className="absolute h-full w-full border hover:bg-slate-600 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-white text-3xl">Eco Flip</p>
              <button class="relative overflow-hidden group bg-white hover:bg-black text-black hover:text-white transition-all duration-500 p-2 px-5 mt-4">
                <span class="absolute inset-0 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 duration-500 transition-transform"></span>
                <span class="relative z-10 ">VIEW STYLE</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 lg:row-span-1 col-span-2 row-span-2"></div>

        <div className="col-span-1 lg:row-span-2  row-span-1 border relative  duration-300">
          <div className="absolute h-full w-full border hover:bg-slate-600 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-white text-3xl">Eco Slides</p>
              <button class="relative overflow-hidden group bg-white hover:bg-black text-black hover:text-white transition-all duration-500 p-2 px-5 mt-4">
                <span class="absolute inset-0 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 duration-500 transition-transform"></span>
                <span class="relative z-10 ">VIEW STYLE</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:row-span-1 row-span-2  border relative  duration-300">
          <div className="absolute h-full w-full border hover:bg-slate-600 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-white text-3xl">Cotton Clasic Snekers</p>
              <button class="relative overflow-hidden group bg-white hover:bg-black text-black hover:text-white transition-all duration-500 p-2 px-5 mt-4">
                <span class="absolute inset-0 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 duration-500 transition-transform"></span>
                <span class="relative z-10 ">VIEW STYLE</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1  border relative  duration-300">
          <div className="absolute h-full w-full border hover:bg-slate-600 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-white text-3xl">Spotlight Slipons</p>
              <button class="relative overflow-hidden group bg-white hover:bg-black text-black hover:text-white transition-all duration-500 p-2 px-5 mt-4">
                <span class="absolute inset-0 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 duration-500 transition-transform"></span>
                <span class="relative z-10 ">VIEW STYLE</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border px-[20%] ">
        <div className="border mt-12">
          <h1 className="text-3xl font-semibold">All Products </h1>
          <div className="border mb-10"><Carousel /></div>
        </div>
      </div>

      <div className="border h-[600px] px-[20%] p-10">
        <div className="border h-[500px] text-center">
          <h1 className="text-3xl font-semibold">Hot Seller</h1>
          <div className="border mt-10 h-[420px]"></div>
        </div>
      </div>

      <div className="border h-[1000px] flex justify-center items-center gap-5 p-5">
        <div className="border h-full md:w-1/2 w-full flex">
          <div className="border h-full w-1/2 flex justify-center">
            <div
              className="border w-5 p-5 rounded-full pr-9 h-[6%] mt-[80%] bg-slate-400  animate-pulse"
              onClick={() => setSingle(true)}
            >
              <GiCircleClaws />
            </div>
          </div>
          <div className="border h-full w-1/2 ">
            <div className="border h-1/2 ">
              <div className="border h-full  flex justify-center">
                <div
                  className="border w-5 p-5 rounded-full pr-9 h-[12%] mt-[50%] bg-slate-400  animate-pulse"
                  onClick={() => setSingle(true)}
                >
                  <GiCircleClaws />
                </div>
              </div>
            </div>
            <div className="border h-1/2 ">
              <div className="border h-full  flex justify-center">
                <div
                  className="border w-5 p-5 rounded-full pr-9 h-[12%] mt-[50%] bg-slate-400  animate-pulse"
                  onClick={() => setSingle(true)}
                >
                  <GiCircleClaws />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border h-full w-1/2      ${single ? "md:block hidden" : "hidden"}`}
        >
          <div className="border h-[80%]">1</div>
          <div className="border h-[20%] text-center ">
            <button class="relative border w-full h-[23%]  overflow-hidden group bg-white hover:bg-black text-black hover:text-white transition-all duration-500 p-2 px-5 mt-[15%]">
              <span class="absolute inset-0 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 duration-500 transition-transform"></span>
              <span class="relative z-10 ">VIEW STYLE</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border h-[550px] p-10 pt-20 bg-slate-300 flex justify-center">
        <div className="border md:w-[35%] w-1/2 ">1</div>
        <div className="border md:w-[35%] w-1/2">2</div>
      </div>

      <div className="border h-[550px] px-[15%] ">
        <div className="border h-[450px] mt-8">
          <Carousel/>
        </div>
      </div>

      <div className="border text-center h-[600px] md:px-[20%] px-[5%]">
        <h1 className="text-3xl mt-10">Customer Review</h1>
        <div className=" h-[60%] flex gap-6 mt-10">
          <div className="border md:w-[30%] w-[35%]">1</div>
          <div className="border md:w-[30%] w-[35%]">2</div>
          <div className="border md:w-[30%] w-[35%]">3</div>
        </div>
        <button class="border relative overflow-hidden group bg-black hover:bg-white text-white hover:text-black transition-all duration-500 p-2 px-5 mt-4">
          <span class="absolute inset-0 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 duration-500 transition-transform"></span>
          <span class="relative z-10   ">VIEW ALL REVIEW</span>
        </button>
      </div>

      <div className="border h-[650px]"></div>

      <div className="border text-center h-[600px] md:px-[20%] px-[5%]">
        <h1 className="text-3xl mt-10">Our blogs</h1>
        <div className=" h-[60%] flex gap-6 mt-10">
          <div className="border w-[30%]">1</div>
          <div className="border w-[30%]">2</div>
          <div className="border w-[30%]">3</div>
        </div>
        <button class="border relative overflow-hidden group bg-black hover:bg-white text-white hover:text-black transition-all duration-500 p-2 px-5 mt-4">
          <span class="absolute inset-0 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 duration-500 transition-transform"></span>
          <span class="relative z-10   ">VIEW ALL BLOGS</span>
        </button>
      </div>
      {showUpArrow && (
        <div
          className="fixed bottom-4 right-4 cursor-pointer border p-5 text-white bg-black rounded-full" onClick={scrollToTop}>
             <span>
               <FaAnglesUp />
            </span>
        </div>
      )}
    </div>
  );
};

export default Main;
