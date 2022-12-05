import React, { lazy } from "react";
import { AnimatePresence } from "framer-motion";
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
import WaveModal from "../components/Modal";

const AppRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/proof-of-funds" element={<POF />} />
          <Route path="/loan-apply" element={<ApplyForLoan />} />
          <Route path="/component" element={<WaveModal />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
