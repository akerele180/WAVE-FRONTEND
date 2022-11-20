import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/LandingPage/HomePage";
import ContactUsPage from "../pages/LandingPage/ContactUsPage";
import AboutUsPage from "../pages/LandingPage/AboutUsPage";
import ProductPage from "../pages/LandingPage/ProductPage";
import GetStarted from "../pages/LandingPage/GetStarted";
import POF from "../pages/LandingPage/ProofOfFunds";

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
        </Route>
        <Route path="*" element={<>Not found...404</>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
