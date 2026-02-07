import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-5">
      {/* NAME */}
      <h2 className="text-4xl font-semibold text-black">
        {productInfo.productName}
      </h2>

      {/* PRICE */}
      <p className="text-xl font-semibold text-black">
        {productInfo.price} DT
      </p>

      {/* DESCRIPTION */}
      <p className="text-base text-gray-600">
        {productInfo.des}
      </p>

      <p className="text-sm text-gray-500">
        Be the first to leave a review.
      </p>

      {/* COLORS */}
      <p className="font-medium text-lg text-black">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>

      {/* ✅ ADD TO CART (CHANGED STYLE ONLY) */}
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 rounded-md text-white text-lg font-semibold transition duration-300"
        style={{ backgroundColor: "#A2664E" }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "#8E5743")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "#A2664E")
        }
      >
        Add to Cart
      </button>

      {/* CATEGORY */}
      <p className="font-normal text-sm text-gray-600">
        <span className="text-base font-medium text-black">
          Categories:
        </span>{" "}
        Spring collection, Streetwear, Women <br />
        <span className="font-medium text-black">SKU:</span> N/A
      </p>
    </div>
  );
};

export default ProductInfo;
