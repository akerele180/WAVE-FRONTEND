import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Button.style.css";
import Illustration from "../../../assets/images/undraw_transfer_money_re_6o1h.svg";

const HomePage = () => {
  return (
    <div className="max-md:mt-10 lg:grid lg:grid-cols-2 items-center justify-center px-4 lg:w-[85vw] lg:mx-auto h-[calc(93vh-82px)] relative">
      <div>
        <div id="main-text">
          <h1 className="text-3xl md:text-5xl font-bold pb-5 lg:leading-[3.5rem]">
            Get Quick Cash in <br className="max-lg:hidden" />{" "}
            <span className="text-primary">30 Minutes</span>
          </h1>
          <p className="pb-3">
            Get instant access to quick loans for emergency and personal loan
            within the next 30 minutes. No Paper work!
          </p>
          <p className="pb-3">
            We also offer Federal and State civil servants under Remita payroll
            Instant loans! No stress...
          </p>
        </div>
        <span className="max-lg:hidden w-full" id="main-btn">
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

      <div
        className="text-center max-lg:pb-10 max-lg:w-7/12 max-md:w-10/12 max-sm:w-auto mx-auto"
        id="main-illustration"
      >
        <img
          className="w-3/4 mx-auto max-lg:py-5 lg:float-right"
          src={Illustration}
          alt="hero_image"
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
    </div>
  );
};

export default HomePage;

{
  /* <div className="max-md:hidden">
        <div className="md:absolute top-1/2 -translate-y-1/2 -right-[15%] circle w-[350px] h-[350px] bg-primary rounded-full"></div>
        <div className="md:absolute top-1/2 -translate-y-1/2 -right-0 circle w-[350px] h-[350px] bg-secondary rounded-full"></div>
      </div> */
}
