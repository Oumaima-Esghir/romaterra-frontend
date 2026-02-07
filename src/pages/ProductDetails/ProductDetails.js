import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("/");
  const [productInfo, setProductInfo] = useState({});
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (location.state?.item) {
      setProductInfo(location.state.item);
      if (Array.isArray(location.state.item.images)) {
        setActiveImage(location.state.item.images[0]);
      } else {
        setActiveImage(location.state.item.img);
      }
    }
    setPrevLocation(location.pathname);
  }, [location]);

  const images = productInfo.images || [productInfo.img];

  return (
    <div className="w-full mx-auto border-b border-gray-300">
      <div className="max-w-container mx-auto px-4">

        {/* BREADCRUMB */}
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title={productInfo.name} prevLocation={prevLocation} />
        </div>

        {/* PRODUCT CARD */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-8 pb-12 rounded-lg
                     bg-white border-2"
          style={{ borderColor: "#884B2C" }}
        >

          {/* IMAGE GALLERY */}
          <div>
            <div className="w-full h-[420px] border rounded-md overflow-hidden">
              <img
                src={activeImage}
                alt={productInfo.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-4 mt-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`w-24 h-24 border rounded-md overflow-hidden
                    ${
                      activeImage === img
                        ? "border-[#884B2C]"
                        : "border-gray-300 hover:border-[#884B2C]"
                    }`}
                >
                  <img
                    src={img}
                    alt={`${productInfo.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="flex flex-col justify-center gap-6">
            <ProductInfo productInfo={productInfo} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
