import React from "react";
import Banner from "../../components/Banner/Banner";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import { bg } from "../../assets/images"; // import your homepage background

const Home = () => {
  return (
    <div
      className="w-full mx-auto bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* You can also add a semi-transparent overlay if you want */}
      
        <Banner />
        <div className="max-w-container mx-auto px-4">
          <Sale />
          <NewArrivals />
          <SpecialOffers />
        </div>
     
    </div>
  );
};

export default Home;
