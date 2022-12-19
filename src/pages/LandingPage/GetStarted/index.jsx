import React from "react";
import GetStartedImage from "../../../assets/images/WAVE_WebApp(4).png";

import { Link } from "react-router-dom";
import { Heading } from "../../LandingPage/components/Heading";

const GetStarted = () => {
  return (
    <div className="max-md:mt-5 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative">
      <div>
        <Heading heading={"Get Started"} />
        <Link className="" to="/loan-apply" state={"Apply for Quick Loans"}>
          <button className="mt-10 mb-2 p-3 w-full md:w-6/12 cursor-pointer bg-primary-light ease-in duration-75 hover:-translate-y-1">
            Quick Loans
          </button>
          <br />
        </Link>
        <Link className="" to="/loan-apply" state={"Apply for Salary Loan"}>
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

      <div className="max-md:hidden">
        <img src={GetStartedImage} alt="get_started_image" />
      </div>
    </div>
  );
};

export default GetStarted;
