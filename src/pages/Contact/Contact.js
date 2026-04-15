import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import contact from "../../assets/images/contact.png";
import send from "../../assets/images/send.png";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("Home");

  useEffect(() => {
    setPrevLocation(location.state?.data || "Home");
  }, [location]);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, lastName, message });
  };

  return (
    <div className="w-full relative bg-[#FBF7ED]">

      {/* BREADCRUMBS */}
      <div className="px-4 md:px-16 py-1">
        <Breadcrumbs 
          title="Contact" 
          prevLocation={prevLocation} 
          className="text-[#884B2C] text-xs"
        />
      </div>

      {/* BACKGROUND SECTION */}
      <div
        className="w-full h-[85vh] md:min-h-screen flex items-start md:items-center bg-no-repeat bg-center bg-[length:103%] md:bg-cover"
        style={{
          backgroundImage: `url(${contact})`,
        }}
      >

        {/* LEFT CONTENT */}
        <div className="px-4 md:px-16 max-w-sm mt-24 md:mt-0">

          {/* TITLE */}
          <h1
            className="mb-2"
            style={{
              fontFamily: "'Style Script', cursive",
              fontSize: "32px",
              color: "#884B2C",
            }}
          >
            Contact Us
          </h1>

          {/* TEXT */}
          <p className="text-black text-xs leading-relaxed max-w-[220px]">
            We’d love to hear from you. Whether you have a question
            about a product, an order, or anything else, our team will
            get back to you shortly.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-3 py-2 text-xs rounded-md bg-white/80 border border-[#884B2C] outline-none"
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="px-3 py-2 text-xs rounded-md bg-white/80 border border-[#884B2C] outline-none"
              />

            </div>

            <div className="relative">

              <textarea
                rows="3"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 pr-12 text-xs rounded-md bg-white/80 border border-[#884B2C] outline-none resize-none"
              />

              <button
                type="submit"
                className="absolute bottom-2 right-2 w-9 h-9 bg-[#884B2C] rounded-md flex items-center justify-center hover:bg-[#A2664E] transition"
              >
                <img src={send} alt="Send" className="w-4 h-4" />
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;