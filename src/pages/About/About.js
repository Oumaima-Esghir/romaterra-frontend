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
    <div className="w-full relative bg-[#FBF7ED]">
      
      {/* BREADCRUMBS */}
      <div className="px-4 md:px-16 py-1">
        <Breadcrumbs 
          title="About" 
          prevLocation={prevLocation} 
          className="text-[#884B2C] text-xs"
        />
      </div>

      {/* BACKGROUND SECTION */}
      <div
        className="w-full h-[85vh] md:min-h-screen flex bg-no-repeat bg-center bg-cover items-start md:items-center"
        style={{
          backgroundImage: `url(${ourStoryImg})`,
        }}
      >

        {/* LEFT CONTENT */}
        <div className="px-4 md:px-16 max-w-sm mt-32 md:mt-0">

          {/* TITLE (lower on mobile) */}
          <h1
            className="mb-2"
            style={{
              fontFamily: "'Style Script', cursive",
              fontSize: "32px",
              color: "#884B2C",
            }}
          >
            Our Story
          </h1>

          {/* TEXT (short lines on mobile) */}
          <p className="text-black text-xs leading-relaxed max-w-[120px] md:max-w-sm">
            At Artifacts Ceramics, where clay becomes story.
            Inspired by nature, tradition, we shape timeless pieces by hand.
            Each creation carries its own identity, celebrating imperfection, authenticity, and the beauty of slow creation, 
            while bringing warmth and character into modern living spaces.
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;