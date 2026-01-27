import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";
import { cart, search } from "../../../assets/images";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // CLOSE CATEGORY MENU ON OUTSIDE CLICK
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  // SEARCH HANDLER
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full bg-[#F3ECE1] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">

          {/* CATEGORY MENU */}
          <div
            ref={ref}
            onClick={() => setShow(!show)}
            className="flex h-14 cursor-pointer items-center gap-2 text-[#884B2C]"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">Shop by Category</p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute top-36 z-50 bg-white w-auto text-[#767676] p-4 pb-6 shadow-lg"
              >
                {[
                  "Accessories",
                  "Furniture",
                  "Electronics",
                  "Clothes",
                  "Bags",
                  "Home appliances",
                ].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-1 border-b border-gray-200 hover:text-[#884B2C] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* SEARCH + CART (SAME LINE ON MOBILE) */}
          <div className="flex w-full lg:w-auto items-center gap-3">

            {/* SEARCH */}
            <div className="relative flex-1 lg:w-[400px] h-[40px] bg-white flex items-center px-4 rounded-xl">
              <input
                className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                type="text"
                onChange={handleSearch}
                value={searchQuery}
                placeholder="Search your products here"
              />

              <img
                src={search}
                alt="search"
                className="w-578 h-5 opacity-70"
              />

              {searchQuery && (
                <div className="absolute top-14 left-0 w-full max-h-96 bg-white z-50 overflow-y-scroll shadow-xl">
                  {filteredProducts.map((item) => (
                    <div
                      key={item._id}
                      onClick={() => {
                        navigate(
                          `/product/${item.productName
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          { state: { item } }
                        );
                        setSearchQuery("");
                      }}
                      className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                    >
                      <img src={item.img} alt="" className="w-16" />
                      <div>
                        <p className="font-semibold">{item.productName}</p>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CART */}
            <Link to="/cart">
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-sm">

                <img
                  src={cart}
                  alt="cart"
                  className="w-9 h-9"
                />

                <span className="absolute -top-1 -right-1 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-[#884B2C] text-white">
                  {products.length}
                </span>
              </div>
            </Link>

          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
