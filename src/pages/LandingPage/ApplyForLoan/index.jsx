import React, { useEffect, useState, useRef } from "react";
import { Heading } from "../components/Heading";
import ProductImage from "../../../assets/images/WAVE WebApp(1).png";
import ThankYou from "../../../assets/images/WAVE WebApp(9).png";
import { motion } from "framer-motion";
import { BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  getOrganizationInitialize,
  registerCustomer,
} from "../../../redux/actions";

const ApplyForLoan = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [bankListOptions, setBankListOptions] = useState([]);

  const phoneRef = useRef("");
  const bankNameRef = useRef("");
  const accountNumberRef = useRef("");
  const bvnRef = useRef("");

  const dispatch = useDispatch();
  const { organization } = useSelector((state) => state.organization);
  const { registeredCustomer } = useSelector(
    (state) => state.registeredCustomer
  );

  console.log(loading2);
  console.log(registeredCustomer);

  useEffect(() => {
    const fetches = async () => {
      await dispatch(getOrganizationInitialize(setLoading));
    };

    fetches();
  }, []);

  useEffect(() => {
    setBankListOptions(organization?.banklist);
  }, [organization]);

  const options = bankListOptions?.map((banks) => {
    return { label: banks.bankName, value: banks._id };
  });

  const handleCustomerApplication = async (phoneNo) => {
    await dispatch(registerCustomer(setLoading2, phoneNo));
  };

  const handleSubmit = () => {
    dispatch(registerCustomer(setLoading2, phoneRef.current.value));
  };

  return (
    <>
      {show ? (
        <ApplyForLoanResponse />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-md:mt-5 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative"
        >
          <div>
            <Heading heading={"Apply for Loan"} />
            <form
              className="mt-5 md:mt-10"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                console.log(
                  phoneRef.current.value,
                  bankNameRef.current.props.value.label,
                  accountNumberRef.current.value,
                  bvnRef.current.value
                );

                // handleCustomerApplication(phoneRef.current.value);
                // dispatch(registerCustomer(setLoading2, phoneRef.current.value))
              }}
            >
              <input
                type="number"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Salary Phone Number"
                ref={phoneRef}
              />
              {/* <input
                type="text"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Salary Bank Name"
              /> */}
              <Select
                ref={bankNameRef}
                options={options}
                placeholder={"Salary Bank Name"}
                // required
                isLoading={loading}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "transparent"
                      : "transparent",
                    borderColor: "#e8833a",
                    borderRadius: 0,
                    padding: "2px 8px",
                    // fontSize: "1rem",
                    // color: "black",
                    // fontWeight: "medium",
                  }),
                }}
                className="focus:border-primary placeholder:text-grey placeholder:text-sm w-full fw-bold md:w-8/12 block text-sm"
              />
              <input
                ref={accountNumberRef}
                type="number"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Salary Account Number"
              />
              <input
                ref={bvnRef}
                type="number"
                className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Bank Verification Number (BVN)"
              />

              <button
                className="bg-secondary py-3 w-4/12 mt-4"
                type="submit"
                // onClick={handleShow}
              >
                {loading2 ? "sending..." : "SEND"}
              </button>
            </form>
          </div>
          <div className="max-md:hidden">
            <img src={ProductImage} alt="" />
          </div>
          <nav className="col-span-2 max-md:hidden">
            <ul className="flex items-center justify-center">
              <li className="px-4 cursor-pointer">Twitter</li>
              <li className="px-4 cursor-pointer">Facebook</li>
              <li className="px-4 cursor-pointer">LinkedIn</li>
              <li className="px-4 cursor-pointer">Instagram</li>
              <li className="px-4 cursor-pointer">Phone Number</li>
              <li className="px-4 cursor-pointer">Email Info</li>
            </ul>
          </nav>
        </motion.section>
      )}
    </>
  );
};

export default ApplyForLoan;

const ApplyForLoanResponse = () => {
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
        <p className="text-center hidden">Thank you for contacting us!</p>
        <p className="text-center px-4">
          We are currently processing your loan request. Please be patient with
          us!
        </p>
        <p className="flex items-center text-center justify-center mt-4">
          <BsSuitHeartFill size={20} className="text-primary mr-1" /> WAVE
        </p>
      </div>
      <nav className="col-span-2 max-md:hidden absolute bottom-4 left-0 right-0">
        <ul className="flex items-center justify-center">
          <li className="px-4 cursor-pointer">Twitter</li>
          <li className="px-4 cursor-pointer">Facebook</li>
          <li className="px-4 cursor-pointer">LinkedIn</li>
          <li className="px-4 cursor-pointer">Instagram</li>
          <li className="px-4 cursor-pointer">Phone Number</li>
          <li className="px-4 cursor-pointer">Email Info</li>
        </ul>
      </nav>
    </motion.section>
  );
};
