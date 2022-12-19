import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const LandingPage = lazy(() => import("../pages/LandingPage"));
const HomePage = lazy(() => import("../pages/LandingPage/HomePage"));
const ContactUsPage = lazy(() => import("../pages/LandingPage/ContactUsPage"));
const AboutUsPage = lazy(() => import("../pages/LandingPage/AboutUsPage"));
const ProductPage = lazy(() => import("../pages/LandingPage/ProductPage"));
const GetStarted = lazy(() => import("../pages/LandingPage/GetStarted"));
const POF = lazy(() => import("../pages/LandingPage/ProofOfFunds"));
const Error404 = lazy(() => import("../pages/ErrorPage"));
const ApplyForLoan = lazy(() => import("../pages/LandingPage/ApplyForLoan"));
const Stage1 = lazy(() =>
  import("../pages/LandingPage/LoanApplication/Stage1")
);
const Stage2 = lazy(() =>
  import("../pages/LandingPage/LoanApplication/Stage2")
);
const Stage3 = lazy(() =>
  import("../pages/LandingPage/LoanApplication/Stage3")
);
const Stage4 = lazy(() =>
  import("../pages/LandingPage/LoanApplication/Stage4")
);

import Stage5 from "../pages/LandingPage/LoanApplication/Stage5";
import TermsAndCondition from "../pages/LandingPage/T&C";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/proof-of-funds" element={<POF />} />
        <Route path="/loan-apply" element={<ApplyForLoan />} />
        <Route path="/loan-application-1" element={<Stage1 />} />
        <Route path="/loan-application-2" element={<Stage2 />} />
        <Route path="/loan-application-3" element={<Stage3 />} />
        <Route path="/loan-application-4" element={<Stage4 />} />
        <Route path="/verify-otp" element={<Stage5 />} />
      </Route>
      <Route path="T&C" element={<TermsAndCondition />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
