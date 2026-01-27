import React, { useRef } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  arrow1,
  arrow2,
  arrow,
  pbg,
} from "../../../assets/images";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  { _id: "201", img: spfOne, name: "Cap for Boys", price: "35", state: "out" },
  { _id: "202", img: spfTwo, name: "Tea Table", price: "180", state: "in" },
  { _id: "203", img: spfThree, name: "Headphones", price: "25", state: "in" },
  { _id: "204", img: spfFour, name: "Sun Glasses", price: "220", state: "out" },
  { _id: "205", img: spfOne, name: "Decor Vase", price: "95", state: "in" },
  { _id: "206", img: spfTwo, name: "Modern Lamp", price: "140", state: "in" },
];

const SpecialOffers = () => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const settings = {
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, rows: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, rows: 2 } },
    ],
  };

  const goToDetails = (product) => {
    const id = product.name.toLowerCase().split(" ").join("");
    navigate(`/product/${id}`, { state: { item: product } });
  };

  return (
    <section className="w-full py-32">
      {/* ===== TITLE ===== */}
      <div className="flex justify-center mb-8">
        <svg viewBox="0 0 1400 300" className="w-full max-w-6xl">
          <text
            x="50%"
            y="40%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            stroke="#884B2C"
            strokeWidth="18"
            paintOrder="stroke fill"
            style={{
              fontFamily: "'Style Script', cursive",
              fontSize: "220px",
            }}
          >
            Our Products
          </text>
        </svg>
      </div>

      {/* ===== BACKGROUND (MEDIUM) ===== */}
      <div
        className="relative bg-center bg-no-repeat py-24"
        style={{
          backgroundImage: `url(${pbg})`,
          backgroundSize: "110%", // ⭐ medium size
        }}
      >
        <div className="max-w-[1200px] mx-auto px-8 pt-16">
          {/* ===== SLIDER ===== */}
          <Slider ref={sliderRef} {...settings}>
            {products.map((item, index) => (
              <div key={index} className="p-4 text-center">
                {/* IMAGE */}
                <div
                  className="relative mx-auto w-[250px] h-[250px] overflow-hidden rounded-md border border-[#F4E5C8] group cursor-pointer"
                  onClick={() => goToDetails(item)}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />

                  {/* HOVER */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      View Details
                    </span>
                  </div>

                  {/* OUT OF STOCK */}
                  {item.state === "out" && (
                    <div className="absolute top-2 right-2 bg-[#F4E5C8]/50 border border-[#F4E5C8] px-2 py-1 rounded">
                      <span className="text-white text-md font-semibold">
                        Out of stock
                      </span>
                    </div>
                  )}
                </div>

                {/* NAME */}
                <h3 className="mt-3 text-base font-semibold text-black">
                  {item.name}
                </h3>

                {/* PRICE */}
                <p className="text-sm text-black">{item.price} DT</p>

                {/* ADD TO CART */}
                <button
                  disabled={item.state === "out"}
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: item._id,
                        name: item.name,
                        quantity: 1,
                        image: item.img,
                        price: item.price,
                      })
                    )
                  }
                  className={`group mt-3 flex items-center gap-2 px-16 py-1 rounded-md mx-auto transition text-sm
                    ${
                      item.state === "out"
                        ? "border border-gray-400 text-gray-400 cursor-not-allowed"
                        : "border border-[#884B2C] text-[#884B2C] hover:bg-[#884B2C] hover:text-white"
                    }`}
                >
                  Add to cart
                  {item.state !== "out" && (
                    <span className="relative w-4 h-4">
                      <img
                        src={arrow1}
                        alt=""
                        className="absolute inset-0 w-4 h-4 opacity-100 group-hover:opacity-0 transition"
                      />
                      <img
                        src={arrow}
                        alt=""
                        className="absolute inset-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition"
                      />
                    </span>
                  )}
                </button>
              </div>
            ))}
          </Slider>

          {/* ===== ARROWS ===== */}
<div className="max-w-[1 00px] mx-auto px-8 -mt-6 flex justify-end gap-1">
  <button onClick={() => sliderRef.current?.slickPrev()}>
    <img src={arrow2} alt="Previous" className="w-10 h-10" />
  </button>
  <button onClick={() => sliderRef.current?.slickNext()}>
    <img src={arrow1} alt="Next" className="w-10 h-10" />
  </button>
</div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
