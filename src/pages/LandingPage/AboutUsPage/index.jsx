import { motion } from "framer-motion";
import React from "react";
import AboutImage from "../../../assets/images/WAVE_WebApp(2).png";
import { Heading } from "../components/Heading";
import "./styled.css";

const AboutUsPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-md:mt-5 px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative lg:grid items-center"
      // className="max-md:mt-5 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative"
    >
      <div>
        <Heading heading={"About Us"} />
        <div className="flex max-lg:flex-col-reverse">
          <p className="pb-3 pt-4 md:pt-10 max-md:mt-3">
            Wave is a Fintech company that offers loans, target savings and
            Investments. <br />
            We are here to cushion all your financial worries by providing ease,
            access, flexibilty and convenience.
          </p>

          <div className="basis-3/4">
            <img src={AboutImage} alt="" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsPage;
