import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo1, logo } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  //const location = useLocation();

  // Responsive menu
  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* NAVBAR BACKGROUND */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      />

      <nav className="relative h-24 max-w-container mx-auto px-6">

        {/* CENTER LOGO */}
      
       <Link
        to="/"
        className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 z-50"
       >
       <Image  imgSrc={logo1}  className="w-48 object-contain"
       />
      </Link>

        {/* NAV CONTENT */}
        <Flex className="flex items-center justify-between h-full">


          {/* LEFT MENU */}
          {showMenu && (
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-6"
            >
              {navBarList.slice(0, 3).map(({ _id, title, link }) => (
                <NavLink
  key={_id}
  to={link}
  end={link === "/"}
  className={({ isActive }) =>
    `px-6 py-2 rounded-md border text-base transition-all duration-300
    ${
      isActive
        ? "bg-[#F4E5C8] text-[#884B2C] border-[#884B2C]"
        : "border-gray-300 text-[#767676] hover:text-[#262626] hover:border-[#262626]"
    }`
  }
>
  {title}
</NavLink>
              ))}
            </motion.ul>
          )
          }

          {/* RIGHT MENU */}
          {showMenu && (
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-6"
            >
              {navBarList.slice(3).map(({ _id, title, link }) => (
               <NavLink
  key={_id}
  to={link}
  end={link === "/"}
  className={({ isActive }) =>
    `px-6 py-2 rounded-md border text-base transition-all duration-300
     ${
       isActive
         ? "bg-[#F4E5C8] border-[#884B2C] text-[#262626]"
         : "border-gray-300 text-[#767676] hover:text-[#262626] hover:border-[#262626]"
     }`
  }
>
  {title}
</NavLink>
              ))}
            </motion.ul>
          )}

          {/* MOBILE MENU ICON */}
          <HiMenuAlt2
            onClick={() => setSidenav(true)}
            className="md:hidden cursor-pointer w-8 h-6 absolute top-6 right-6 z-50"
          />
        </Flex>

        {/* MOBILE SIDE NAV */}
       {sidenav && (
          <div className="fixed inset-0 bg-black/80 z-50">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-[80%] h-full bg-white p-6 relative"
            >
              {/* Mobile Logo */}
             <div className="text-center mb-8 pb-4 border-b border-gray-200">
        <Image 
          imgSrc={logo} // use your logo here
          className="mx-auto w-48 object-contain"
        />
      </div>

              {/* Mobile Links */}
              <ul className="flex flex-col gap-6">
                {navBarList.map(({ _id, title, link }) => (
                  <NavLink
                    key={_id}
                    to={link}
                    onClick={() => setSidenav(false)}
                    className="text-xl text-gray-600 hover:text-amber-900 transition-colors duration-300"
                  >
                    {title}
                  </NavLink>
                ))}
              </ul>

              {/* Close Button */}
              <span
                onClick={() => setSidenav(false)}
                className="absolute top-6 right-6 w-10 h-10 border border-gray-300
                           flex items-center justify-center text-2xl text-gray-600
                           hover:text-red-500 hover:border-red-500 cursor-pointer
                           rounded-full"
              >
                <MdClose />
              </span>
            </motion.div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
