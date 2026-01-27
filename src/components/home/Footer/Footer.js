import React from "react";
import Image from "../../designLayouts/Image";
import {
  logo,
  instagram,   
  facebook ,
  bg    
} from "../../../assets/images";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          imgSrc={bg}
          className="w-full h-full object-cover"
        />
        
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-8 py-8">

        {/* TOP LINE */}
        <hr className="border-t-2 border-[#884B2C] w-full" />

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LOGO */}
          <div className="w-48">
            <Image
              imgSrc={logo}
              className="w-full object-contain"
            />
          </div>

          {/* COPYRIGHT */}
          <p
            className="text-xl text-center"
            style={{
              fontFamily: "'Syne', sans-serif",
              color: "#884B2C",
            }}
          >
            © 2025 RomaTerra.tn All rights reserved
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/roma.terra.ceramics/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition"
            >
              <Image
                imgSrc={instagram}
                className="w-10 h-10 object-contain"
              />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100083099422111&locale=fr_FR"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition"
            >
              <Image
                imgSrc={facebook}
                className="w-10 h-10 object-contain"
              />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;



