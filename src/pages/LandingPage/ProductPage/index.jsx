import React from "react";
import { Heading } from "../components/Heading";
import ProductImage from "../../../assets/images/WAVE_WebApp.png";

const ProductPage = () => {
  return (
    <div className="max-md:mt-5 px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative lg:grid items-center">
      <div>
        <Heading heading={"Product"} />
        <div className="flex max-lg:flex-col-reverse">
          <ul className="list-disc max-md:mt-3" id="main-text">
            <p className="pb-3 pt-4 md:pt-10">
              Wave products covers <strong>EVERYONE</strong> as we offer
              services that allows you to be financial FREE such as:
            </p>
            <li className="list-disc py-1 md:py-2 ml-8">Quick Loans</li>
            <li className="list-disc py-1 md:py-2 ml-8">
              Federal Civil Servants
            </li>
            <li className="list-disc py-1 md:py-2 ml-8">
              State Civil Servants
            </li>
            <li className="list-disc py-1 md:py-2 ml-8">Proof of Funds</li>
            <li className="list-disc py-1 md:py-2 ml-8">And many more...</li>
          </ul>

          <div className="max-md:mt-5 basis-3/4" id="main-illustration">
            <img src={ProductImage} alt="product-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
