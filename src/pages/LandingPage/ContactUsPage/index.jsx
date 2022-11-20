import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import ProductImage from "../../../assets/images/WAVE WebApp(3).png";
import ThankYou from "../../../assets/images/WAVE WebApp(5).png";
import { motion } from "framer-motion";
import { BsSuitHeartFill } from "react-icons/bs";

const ContactUsPage = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {show ? (
        <ContactUsPageResponse />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-md:mt-5 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative"
        >
          <div>
            <Heading heading={"Contact Us"} />
            <form
              className="mt-5 md:mt-10"
              onsubmit={(e) => {
                e.preventDefault();
                // setShow(true);
              }}
            >
              <input
                type="text"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Surname"
              />
              <input
                type="email"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Email Address"
              />
              <input
                type="tel"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Phone Number"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Enter your message"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
              />

              <button
                className="bg-secondary py-3 w-4/12 mt-4"
                type="submit"
                onClick={handleShow}
              >
                SEND
              </button>
            </form>
          </div>
          <div className="max-md:hidden">
            <img src={ProductImage} alt="" />
          </div>
          <nav className="col-span-2 max-md:hidden">
            <ul className="flex items-center justify-center">
              <li className="px-4 cursor-pointer">Twitter</li>
              <li className="px-4 cursor-pointer">Facebook</li>
              <li className="px-4 cursor-pointer">LinkedIn</li>
              <li className="px-4 cursor-pointer">Instagram</li>
              <li className="px-4 cursor-pointer">Phone Number</li>
              <li className="px-4 cursor-pointer">Email Info</li>
            </ul>
          </nav>
        </motion.section>
      )}
    </>
  );
};

export default ContactUsPage;

const ContactUsPageResponse = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:flex flex-col place-content-center h-[calc(100vh-82px)] relative"
    >
      <div className="mx-auto w-[200px]">
        <img src={ThankYou} alt="" className="w-full" />
      </div>
      <div>
        <p className="text-center">Thank you for contacting us!</p>
        <p className="text-center px-4">
          We will attend to your message within the next 2 hours
        </p>
        <p className="flex items-center text-center justify-center mt-4">
          <BsSuitHeartFill size={20} className="text-primary mr-1" /> WAVE
        </p>
      </div>
      <nav className="col-span-2 max-md:hidden absolute bottom-4 left-0 right-0">
        <ul className="flex items-center justify-center">
          <li className="px-4 cursor-pointer">Twitter</li>
          <li className="px-4 cursor-pointer">Facebook</li>
          <li className="px-4 cursor-pointer">LinkedIn</li>
          <li className="px-4 cursor-pointer">Instagram</li>
          <li className="px-4 cursor-pointer">Phone Number</li>
          <li className="px-4 cursor-pointer">Email Info</li>
        </ul>
      </nav>
    </motion.section>
  );
};
