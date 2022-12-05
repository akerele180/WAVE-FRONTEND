import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Button.style.css";
import Illustration from "../../../assets/images/undraw_transfer_money_re_6o1h.svg";
import Fade from "react-reveal/Fade";

const HomePage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-md:mt-10 lg:grid lg:grid-cols-2 items-center justify-center px-4 lg:w-[85vw] lg:mx-auto h-[calc(100vh-82px)] relative"
    >
      <Fade left>
        <div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold pb-5 lg:leading-[3.5rem]">
              Get Quick Cash in <br />{" "}
              <span className="text-primary">30 Minutes</span>
            </h1>
            <p className="pb-3">
              Get instant access to quick loans for emergency and personal loan
              within the next 30 minutes. No Paper work!
            </p>
            <p className="pb-3">
              We also offer Federal and Sate civil servants under Remita payroll
              Instant loans! No stress...
            </p>
          </div>
          <span className="max-lg:hidden w-full">
            <NavLink
              to="/get-started"
              className="w-full slide border-2 px-5 py-4 font-medium text-secondary-dark border-secondary-dark hover:bg-secondary uppercase hover:text-[#fff]"
            >
              <button className="font-bold text uppercase px-5 py-4 mt-5">
                Apply now &rarr;
              </button>
            </NavLink>
          </span>
        </div>
      </Fade>

      <Fade right>
        <div className="text-center max-lg:pb-10">
          <img
            className="w-3/4 mx-auto max-lg:py-5 lg:float-right"
            src={Illustration}
            alt=""
          />
          <span className="lg:hidden w-full">
            <NavLink
              to="/get-started"
              className="w-full slide border-2 px-5 py-4 font-medium text-secondary-dark border-secondary-dark hover:bg-secondary uppercase hover:text-[#fff]"
            >
              <button className="font-bold text uppercase px-5 py-4 mt-5 ">
                Apply now &rarr;
              </button>
            </NavLink>
          </span>
        </div>
      </Fade>
    </motion.section>
  );
};

export default HomePage;

{
  /* <div className="max-md:hidden">
        <div className="md:absolute top-1/2 -translate-y-1/2 -right-[15%] circle w-[350px] h-[350px] bg-primary rounded-full"></div>
        <div className="md:absolute top-1/2 -translate-y-1/2 -right-0 circle w-[350px] h-[350px] bg-secondary rounded-full"></div>
      </div> */
}
