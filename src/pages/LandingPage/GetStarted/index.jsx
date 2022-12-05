import React from "react";
import { Heading } from "../components/Heading";
import GetStartedImage from "../../../assets/images/WAVE_WebApp(4).png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const GetStarted = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-md:mt-5 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative"
    >
      <Fade left>
        <div>
          <Heading heading={"Get Started"} />
          <Link to="/loan-apply">
            <button className="mt-10 mb-2 p-3 w-full md:w-6/12 cursor-pointer bg-primary-light ease-in duration-75 hover:-translate-y-1">
              Quick Loans
            </button>
            <br />
          </Link>
          <Link to="/loan-apply">
            <button className="my-2 p-3 w-full md:w-6/12 cursor-pointer bg-orange-light ease-in duration-75 hover:-translate-y-1">
              Salary Loans
            </button>
          </Link>
          <br />
          <Link to="/proof-of-funds">
            <button className="my-2 p-3 w-full md:w-6/12 cursor-pointer bg-primary ease-in duration-75 hover:-translate-y-1">
              Proof of Funds
            </button>
          </Link>
          <br />
        </div>
      </Fade>
      <Fade right>
        <div className="max-md:hidden">
          <img src={GetStartedImage} alt="" />
        </div>
      </Fade>
    </motion.section>
  );
};

export default GetStarted;
