import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const SpecialCase = () => {
  const products = useSelector((state) => state.orebiReducer.products);

  return (
    <div className="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
      
      {/* CART ONLY */}
      <Link to="/cart">
        <div
          className="
            bg-white/80 
            w-16 h-[70px] 
            rounded-md 
            flex flex-col gap-1 
            text-[#884B2C] 
            justify-center items-center 
            shadow-testShadow 
            overflow-x-hidden 
            group 
            cursor-pointer 
            relative
          "
        >
          {/* ICON ANIMATION */}
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill
              className="text-2xl text-[#884B2C] 
                         -translate-x-12 
                         group-hover:translate-x-3 
                         transition-transform duration-200"
            />

            <RiShoppingCart2Fill
              className="text-2xl text-[#884B2C] 
                         -translate-x-3 
                         group-hover:translate-x-12 
                         transition-transform duration-200"
            />
          </div>

          <p className="text-xs font-semibold font-titleFont">
            Buy Now
          </p>

          {/* BADGE */}
          {products.length > 0 && (
            <span
              className="
                absolute top-1 right-2 
                bg-[#884B2C] 
                text-white 
                text-xs 
                w-4 h-4 
                rounded-full 
                flex items-center justify-center 
                font-semibold
              "
            >
              {products.length}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
