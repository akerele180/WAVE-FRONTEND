import React from "react";
import { Heading } from "../components/Heading";
import GetStartedImage from "../../../assets/images/WAVE WebApp(4).png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const GetStarted = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-md:mt-5 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative"
    >
      <div>
        <Heading heading={"Get Started"} />
        <button className="mt-10 mb-2 p-3 w-full md:w-6/12 cursor-pointer bg-primary-light">
          Quick Loans
        </button>
        <br />
        <button className="my-2 p-3 w-full md:w-6/12 cursor-pointer bg-orange-light">
          Salary Loans
        </button>
        <br />
        <Link to='/proof-of-funds'>
          <button className="my-2 p-3 w-full md:w-6/12 cursor-pointer bg-primary">
            Proof of Funds
          </button>
        </Link>
        <br />
        <button className="mt-4 w-1/2 md:w-4/12  border-secondary border-2 bg-secondary px-5 py-4 font-medium hover:text-secondary-dark hover:border-secondary-dark hover:bg-[#ffffff]">
          APPLY
        </button>
      </div>
      <div className="max-md:hidden">
        <img src={GetStartedImage} alt="" />
      </div>
    </motion.section>
  );
};

export default GetStarted;
