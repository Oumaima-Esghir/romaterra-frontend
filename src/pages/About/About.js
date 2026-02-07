import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ourStoryImg from "../../assets/images/ourstory.png";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "Home");
  }, [location]);

  return (
    <div className="w-full h-screen relative">
      <Breadcrumbs title="About" prevLocation={prevLocation} />

      {/* FULL SCREEN BACKGROUND IMAGE */}
      <div
        className="w-full h-full flex flex-col items-absolute justify-absolute text-absolute"
        style={{
          backgroundImage: `url(${ourStoryImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "absolute",
          backgroundSize: "cover",
        }}
      >
        {/* TITLE */}
        <div className="flex justify-center mb-10">
          <svg viewBox="0 0 1400 1000" className="w-full max-w-6xl">
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              stroke="#884B2C"
              strokeWidth="12"
              paintOrder="stroke fill"
              style={{ fontFamily: "'Style Script', cursive", fontSize: "160px" }}
            >
              Our Story
            </text>
          </svg>
        </div>

        {/* DESCRIPTION TEXT */}
        <p className="text-black text-lg sm:text-xl leading-relaxed max-w-3xl px-6">
          At Roma Terra, we craft timeless ceramics inspired 
          by the elegance of ancient Rome. We believe that every 
          object should tell a story of earth, history, and bringing 
          a fragment of Rome into your home.
        </p>
      </div>
    </div>
  );
};

export default About;
