import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Button.style.css";

const HomePage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-md:mt-10 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold pb-5 md:leading-[3.5rem]">
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
        <span className="w-full">
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
      <div className="max-md:hidden">
        <div className="md:absolute top-1/2 -translate-y-1/2 -right-[15%] circle w-[350px] h-[350px] bg-primary rounded-full"></div>
        <div className="md:absolute top-1/2 -translate-y-1/2 -right-0 circle w-[350px] h-[350px] bg-secondary rounded-full"></div>
      </div>
    </motion.section>
  );
};

export default HomePage;
