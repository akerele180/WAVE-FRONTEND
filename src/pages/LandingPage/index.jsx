import React, { Children } from "react";
import Navbar from "./components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* <Children /> */}
      <code className="bg-[#ffffff] text-primary">
        if you can't see anything, then it's becuase you are in dark mode. So
        Switch!
      </code>
    </>
  );
};

export default LandingPage;
