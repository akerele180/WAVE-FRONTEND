import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import ThankYou from "../../../assets/images/WAVE WebApp(10).png";
import ProofOfFundz from "../../../assets/images/WAVE WebApp(11).png";

import { BsSuitHeartFill } from "react-icons/bs";
import { motion } from "framer-motion";

const ProofOfFunds = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {show ? (
        <ProofOfFundsResponse />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-md:mt-5 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative"
        >
          <div>
            <Heading heading={"Apply for Proof of Funds"} />
            <form
              className="mt-5 md:mt-10"
              onSubmit={(e) => {
                e.preventDefault();
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
                placeholder="Last Name"
              />
              <input
                type="email"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Email Address"
              />
              <input
                type="tel"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Whatsapp Number"
              />
              <input
                type="text"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Amount needed?"
              />
              <input
                type="text"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="How soon do you need the funds?"
              />
              <input
                type="text"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="How long do you need the funds for?"
              />

              <button
                className="bg-secondary py-3 w-4/12 mt-4"
                type="submit"
                onClick={handleShow}
              >
                APPLY
              </button>
            </form>
          </div>
          <div className="max-md:hidden">
            <img src={ProofOfFundz} alt="" />
          </div>
        </motion.section>
      )}
    </>
  );
};

export default ProofOfFunds;

const ProofOfFundsResponse = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:flex flex-col place-content-center h-[calc(100vh-82px)] relative"
    >
      <div className="mx-auto w-[300px]">
        <img src={ThankYou} alt="" className="w-full" />
      </div>
      <div>
        <p className="text-center mb-3 text-2xl text-orange">Thank you</p>
        <p className="text-center px-4">
          We will reach out to you in the next 24 hours
        </p>
        <p className="flex items-center text-center justify-center mt-2 font-bold ">
          <BsSuitHeartFill size={20} className="text-primary mr-1" /> WAVE
        </p>
      </div>
      <p className="col-span-2 max-md:hidden absolute bottom-4 left-0 right-0 text-center">
        For any inquiries or compliant, please call this number{" "}
        <strong>0123456789</strong> or email <strong>loan@getwave.ng</strong>
      </p>
    </motion.section>
  );
};
