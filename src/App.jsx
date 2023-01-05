import React, { Suspense } from "react";
import { ThreeDots } from "react-loader-spinner";
import { BrowserRouter } from "react-router-dom";
import WaveLogo from "./assets/images/Wave-Logo.png";
import AppRoutes from "./routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex items-center  flex-col justify-center">
            <img src={WaveLogo} alt="logo" className="w-3/12 md:w-1/12" />
            <ThreeDots
              height="40"
              width="40"
              color="#6558F5"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        }
      >
        {/* <ToastContainer> */}
        <AppRoutes />
        {/* </ToastContainer> */}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
