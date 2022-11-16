import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import WaveLogo from "./assets/images/Wave-Logo.png";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="h-full flex justify-center items-center">
              <img src={WaveLogo} alt="" className="" />
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
