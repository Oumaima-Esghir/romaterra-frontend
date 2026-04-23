import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import { paginationItems } from "../../constants";
import { newArrivalProducts } from "../../components/home/NewArrivals/NewArrivals";
import { specialOfferProducts } from "../../components/home/SpecialOffers/SpecialOffers";

const slugifyProduct = (product) =>
  String(product?.productName || product?.name || "")
    .toLowerCase()
    .split(" ")
    .join("");

const allProducts = [
  ...paginationItems,
  ...newArrivalProducts,
  ...specialOfferProducts,
];

const ProductDetails = () => {
  const location = useLocation();
  const { _id } = useParams();
  const [prevLocation, setPrevLocation] = useState("/");
  const [productInfo, setProductInfo] = useState({});
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    const selectedProduct =
      location.state?.item ||
      allProducts.find((item) => slugifyProduct(item) === _id);

    if (selectedProduct) {
      setProductInfo(selectedProduct);
      if (Array.isArray(selectedProduct.images)) {
        setActiveImage(selectedProduct.images[0]);
      } else {
        setActiveImage(selectedProduct.img);
      }
    }
    setPrevLocation(location.pathname);
  }, [location, _id]);

  const images = productInfo.images || [productInfo.img];
  const productName = productInfo.productName || productInfo.name || "";

  return (
    <div className="w-full mx-auto border-b border-gray-300">
      <div className="max-w-container mx-auto px-4">

        {/* BREADCRUMB */}
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title={productName} prevLocation={prevLocation} />
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
                alt={productName}
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
                    alt={`${productName} ${index + 1}`}
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
