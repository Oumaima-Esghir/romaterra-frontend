import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
  //bg,
} from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <section className="relative w-full min-h-screen overflow-x-hidden">

      {/* ===== FULL SCREEN BACKGROUND ===== 
      <div className="absolute inset-0 z-0">
        <Image
          imgSrc={bg}
          className="w-full h-screen object-cover"
        />
      </div>*/}

      {/* ===== CONTENT CENTERED ===== */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 lg:px-20">

        {/* ===== TITLE ===== */}
        <div className="mb-4 md:mb-8 flex justify-center w-full px-4">
          <svg viewBox="0 0 1400 300" className="w-full max-w-6xl">
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              stroke="#884B2C"
              strokeWidth="12"
              paintOrder="stroke fill"
              style={{
                fontFamily: "'Style Script', cursive",
                fontSize: "180px",
              }}
            >
              Our Collections
            </text>
          </svg>
        </div>

        {/* ===== SEE ALL LINK ===== */}
        <div className="flex justify-end w-full max-w-[1600px] mb-2 md:mb-4 px-4 md:px-0">
          <Link
            to="/journal"
            className="text-[#8B4513] underline underline-offset-2 hover:no-underline transition text-lg md:text-xl font-medium"
          >
            See All
          </Link>
        </div>

        {/* ===== COLLECTIONS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-[1600px] px-4 md:px-0">

          {/* LEFT BIG - SIGNIFICANTLY LARGER */}
          <Link to="/shop" className="group">
            <div className="relative h-[65vh] md:h-[85vh] overflow-hidden rounded-l-[2.5rem] md:rounded-l-[4rem] rounded-r-[2.5rem] md:rounded-r-none">
              <Image
                imgSrc={saleImgOne}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
                <h3
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center"
                  style={{
                    fontFamily: "'Ysabeau', sans-serif",
                    color: "#884B2C",
                    WebkitTextStroke: "3px #F4E5C8",
                  }}
                >
                  Eterna Collection
                </h3>
                <p className="mt-4 md:mt-6 text-[#884B2C] text-center text-xl md:text-2xl lg:text-3xl">
                  Luxury finishes
                </p>
                <button className="mt-6 md:mt-10 bg-white border-3 border-[#8B4513] px-8 py-4 font-semibold text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition rounded-md text-lg md:text-xl">
                  Discover
                </button>
              </div>
            </div>
          </Link>

          {/* RIGHT COLUMN - LARGER AS WELL */}
          <div className="flex flex-col gap-6 md:gap-8 h-full">
            {/* TOP RIGHT */}
            <Link to="/shop" className="group h-1/2">
              <div className="relative h-[30vh] md:h-[38.5vh] overflow-hidden rounded-tr-[2.5rem] md:rounded-tr-[4rem] rounded-l-[2.5rem] md:rounded-l-none">
                <Image
                  imgSrc={saleImgTwo}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3
                    className="text-3xl md:text-4xl lg:text-5xl font-bold"
                    style={{
                      fontFamily: "'Ysabeau', sans-serif",
                      color: "#884B2C",
                      WebkitTextStroke: "2.5px #F4E5C8",
                    }}
                  >
                    Classica Collection
                  </h3>
                    <p className="mt-4 md:mt-6 text-[#884B2C] text-center text-xl md:text-2xl lg:text-3xl">
                  Luxury finishes
                </p>
                <button className="mt-6 md:mt-10 bg-white border-3 border-[#8B4513] px-8 py-4 font-semibold text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition rounded-md text-lg md:text-xl">
                  Discover
                </button>
                </div>
              </div>
            </Link>

            {/* BOTTOM RIGHT */}
            <Link to="/shop" className="group h-1/2">
              <div className="relative h-[30vh] md:h-[38.5vh] overflow-hidden rounded-br-[2.5rem] md:rounded-br-[4rem] rounded-l-[2.5rem] md:rounded-l-none">
                <Image
                  imgSrc={saleImgThree}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3
                    className="text-3xl md:text-4xl lg:text-5xl font-bold"
                    style={{
                      fontFamily: "'Ysabeau', sans-serif",
                      color: "#884B2C",
                      WebkitTextStroke: "2.5px #F4E5C8",
                    }}
                  >
                    Modern Terra Collection
                  </h3>
                    <p className="mt-4 md:mt-6 text-[#884B2C] text-center text-xl md:text-2xl lg:text-3xl">
                  Luxury finishes
                </p>
                <button className="mt-6 md:mt-10 bg-white border-3 border-[#8B4513] px-8 py-4 font-semibold text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition rounded-md text-lg md:text-xl">
                  Discover
                </button>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sale;