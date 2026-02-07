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
    <div className="max-w-container mx-auto px-4 pb-20">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />

      {/* IMAGE + CONTENT CONTAINER */}
      <div
        className="
          relative w-full overflow-hidden
          rounded-[40px] sm:rounded-[60px] lg:rounded-[80px]
          min-h-[520px] sm:min-h-[620px] lg:min-h-[80vh]
        "
        style={{
          backgroundImage: `url(${contact})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "cover",
        }}
      >
        {/* CONTENT */}
        <div
          className="
            relative z-10
            px-6 sm:px-10 lg:px-16
            py-10 sm:py-14 lg:py-20
            max-w-xl
          "
        >
          {/* TITLE */}
          <div className="mb-6">
            <svg viewBox="0 0 1400 300" className="w-full">
              <text
                x="0"
                y="60%"
                textAnchor="start"
                dominantBaseline="middle"
                fill="white"
                stroke="#884B2C"
                strokeWidth="18"
                paintOrder="stroke fill"
                style={{
                  fontFamily: "'Style Script', cursive",
                  fontSize: "140px",
                }}
              >
                Contact Us !
              </text>
            </svg>
          </div>

          {/* DESCRIPTION */}
          <p className="text-black text-sm sm:text-base mb-8 leading-relaxed">
            We’d love to hear from you. Whether you have a question about a
            product, an order or anything else, our team will get back to you
            shortly.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* NAME + LAST NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-black">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" w-full px-4 py-3 pr-16 rounded-md bg-white/80 border border-[#884B2C] outline-none resize-none "
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-black">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className= " w-full px-4 py-3 pr-16 rounded-md bg-white/80 border border-[#884B2C] outline-none resize-none "
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <label className="block text-sm mb-1 text-black">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" w-full px-4 py-3 pr-16 rounded-md bg-white/80 border border-[#884B2C] outline-none resize-none "
              />

              {/* SEND BUTTON */}
              <button
                type="submit"
                className="
                  absolute bottom-3 right-3
                  w-11 h-11
                  bg-[#884B2C]
                  rounded-md
                  flex items-center justify-center
                  hover:bg-[#A2664E]
                  transition
                "
              >
                <img src={send} alt="Send" className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
