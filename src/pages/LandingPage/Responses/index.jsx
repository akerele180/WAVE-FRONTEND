import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaHeartBroken } from "react-icons/fa";

import Successes from "../../../assets/images/WAVE_WebApp(7).png";
import Rejects from "../../../assets/images/WAVE_WebApp(8).png";

export const Reject = () => {
  return (
    <div className="md:flex flex-col place-content-center h-[calc(100vh-82px)] relative">
      <div className="mx-auto w-[300px]">
        <img src={Rejects} alt="" className="w-full max-md:w-1/2" />
      </div>
      <div>
        <p className="text-center font-medium text-orange flex justify-center">
          Oopss <FaHeartBroken size={20} />
        </p>
        <p className="text-center px-4">
          We are so sorry to inform you that you are NOT eligible for loan at
          this time. <br />
          <strong>Please ensure that your details are correct.</strong>
        </p>
        <p className="flex items-center text-center justify-center mt-4">
          <BsSuitHeartFill size={20} className="text-primary mr-1" /> WAVE
        </p>
        <div className="grid justify-center mt-4 font-medium">
          <a
            href="/"
            className="bg-secondary-dark text-white py-2 px-6 cursor-pointer"
          >
            &larr; Go Home
          </a>
        </div>
      </div>
      <p className="md:text-center absolute bottom-4 left-0 right-0">
        For any inquiries or complaint, please call this number:{" "}
        <strong>08119468747</strong> or email us at:{" "}
        <strong>loan@getwave.ng</strong>
      </p>
      {/* </motion */}
    </div>
  );
};

export const Success = () => {
  return (
    <div className="md:flex flex-col place-content-center h-[calc(100vh-82px)] relative">
      <div className="mx-auto w-[300px]">
        <img src={Successes} alt="" className="w-full max-md:w-1/2" />
      </div>
      <div>
        <p className="text-center flex justify-center items-center md:text-2xl font-bold text-orange">
          CONGRATULATIONS!!!
        </p>
        <p className="text-center px-4">
          You should receive your money in the account provided within the next
          hour.
        </p>
        <p className="flex items-center text-center justify-center mt-4">
          <BsSuitHeartFill size={20} className="text-primary mr-1" /> WAVE
        </p>
        <div className="grid justify-center mt-4 font-medium">
          <a
            href="/"
            className="bg-secondary-dark text-white py-2 px-6 cursor-pointer"
          >
            &larr; Go Home
          </a>
        </div>
      </div>

      <p className="md:text-center absolute bottom-4 left-0 right-0">
        For any inquiries or complaint, please call this number:{" "}
        <strong>08119468747</strong> or email us at:{" "}
        <strong>loan@getwave.ng</strong>
      </p>
    </div>
  );
};
