import React, { useEffect, useState, useRef } from "react";
import { Heading } from "../components/Heading";
import ProductImage from "../../../assets/images/WAVE_WebApp(1).png";
import ThankYou from "../../../assets/images/WAVE_WebApp(9).png";
import { motion } from "framer-motion";
import { BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  customerConsent,
  getOrganizationInitialize,
  registerCustomer,
} from "../../../redux/actions";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Reject } from "../Responses";

const ApplyForLoan = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [bankListOptions, setBankListOptions] = useState([]);
  const [handleCheck, setHandleCheck] = useState(false);
  const phoneRef = useRef("");
  const bankNameRef = useRef("");
  const accountNumberRef = useRef("");
  const bvnRef = useRef("");
  const checkieRef = useRef(null);

  const location = useLocation();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const { organization } = useSelector((state) => state.organization);
  const { registeredCustomer } = useSelector(
    (state) => state.registeredCustomer
  );

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

  const handleSubmitt = async (data) => {
    await dispatch(registerCustomer(setLoading2, data.phone_number));
  };

  return (
    <>
      {registeredCustomer.status === "success" ? (
        <ApplyForLoanResponse />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-md:mt-5 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative"
        >
          <div>
            <Heading heading={location?.state} />
            <form
              className="mt-5 md:mt-10"
              onSubmit={handleSubmit(handleSubmitt)}
            >
              <input
                type="number"
                className="w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Phone Number"
                ref={phoneRef}
                name="phone_number"
                {...register("phone_number", {
                  required: true,
                  minLength: {
                    value: 11,
                    message: "Not up to 11 digits.",
                  },
                  maxLength: {
                    value: 11,
                    message: "Can't be more than 11 digits.",
                  },
                })}
              />{" "}
              {errors.phone_number &&
                errors.phone_number.type === "required" && (
                  <p className="text-red-600">Phone Number is required</p>
                )}
              {errors.phone_number &&
                errors.phone_number.type === "minLength" && (
                  <p className="text-red-600">{errors.phone_number.message}</p>
                )}
              {errors.phone_number &&
                errors.phone_number.type === "maxLength" && (
                  <p className="text-red-600">{errors.phone_number.message}</p>
                )}
              <Select
                ref={bankNameRef}
                options={options}
                placeholder={"Salary Bank Name"}
                // required
                isLoading={loading}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    // borderColor: state.isFocused
                    //   ? "transparent"
                    //   : "transparent",
                    borderColor: "#e8833a",
                    borderRadius: 0,
                    padding: "2px 8px",
                    // fontSize: "1rem",
                    // color: "black",
                    // fontWeight: "medium",
                  }),
                }}
                className="focus:border-primary placeholder:text-grey placeholder:text-sm w-full fw-bold md:w-8/12 block text-sm mt-2"
                name="bank_name"
                {...register("bank_name", {
                  required: false,
                })}
              />
              {errors.bank_name && errors.bank_name.type === "required" && (
                <p className="text-red-600">Select your bank</p>
              )}
              <input
                ref={accountNumberRef}
                type="number"
                className="w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Salary Account Number"
                name="salary_account_number"
                {...register("salary_account_number", {
                  required: true,
                  minLength: {
                    value: 10,
                    message: "Not up to 10 digits yet.",
                  },
                  maxLength: {
                    value: 10,
                    message: "Can't be more than 10 digits.",
                  },
                })}
              />
              {errors.salary_account_number &&
                errors.salary_account_number.type === "required" && (
                  <p className="text-red-600">Account number is required</p>
                )}
              {errors.salary_account_number &&
                errors.salary_account_number.type === "minLength" && (
                  <p className="text-red-600">
                    {errors.salary_account_number.message}
                  </p>
                )}
              {errors.salary_account_number &&
                errors.salary_account_number.type === "maxLength" && (
                  <p className="text-red-600">
                    {errors.salary_account_number.message}
                  </p>
                )}
              <input
                ref={bvnRef}
                type="number"
                className="w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Bank Verification Number (BVN)"
                name="bvn"
                {...register("bvn", {
                  required: true,
                  maxLength: {
                    value: 11,
                    message: "Can't be more than 11 digits.",
                  },
                  minLength: {
                    value: 11,
                    message: "Not up to 11 digits yet.",
                  },
                })}
              />
              {errors.bvn && errors.bvn.type === "required" && (
                <p className="text-red-600">BVN is required</p>
              )}
              {errors.bvn && errors.bvn.type === "maxLength" && (
                <p className="text-red-600">{errors.bvn.message}</p>
              )}
              {errors.bvn && errors.bvn.type === "minLength" && (
                <p className="text-red-600">{errors.bvn.message}</p>
              )}
              {/* terms and condition here */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  defaultChecked={handleCheck}
                  className="accent-orange text-white h-[1.2rem] w-[1.2rem] cursor-pointer"
                  ref={checkieRef}
                  {...register("checkie")}
                />
                <label
                  htmlFor="consent"
                  onClick={() => {
                    setHandleCheck((handleCheck) => !handleCheck);
                  }}
                  className="cursor-pointer block"
                >
                  <em>
                    <span className="text-orange">&#9888;</span> Please, read
                    the{" "}
                    <a
                      href="../T&C"
                      target="_blank"
                      // download="../../../assets/docs/"
                      className="underline text-primary"
                    >
                      Terms and Condition
                    </a>{" "}
                    before applying for loan
                  </em>
                </label>
              </div>
              {/* terms and condition above */}
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
              <li className="px-4 cursor-pointer" id="myBtn">
                Twitter
              </li>
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
  const [loading3, setLoading3] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registeredCustomer } = useSelector(
    (state) => state.registeredCustomer
  );

  const customerConsent22 = useSelector(
    (state) => state.registeredCustomer.customerConsent
  );

  const handleCustomerConsent = async () => {
    await dispatch(
      customerConsent(
        setLoading3,
        registeredCustomer?.data._id,
        registeredCustomer?.data?.token
      )
    );
  };
  useEffect(() => {
    handleCustomerConsent();
  }, []);

  useEffect(() => {
    // if (loading3) {
    //   navigate("/");
    //   window.location.reload();
    // }

    // setTimeout(() => {
    //   navigate("/loan-application-1");
    // }, 1500);
    
    if (customerConsent22.status === "success") {
      navigate("/loan-application-1");
    }
  }, [customerConsent22]);

  return (
    <>
      {customerConsent22?.status ? (
        <Reject />
      ) : (
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
              We are currently processing your loan request. Please be patient
              with us!
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
      )}
      {/* (
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
            We are currently processing your loan request. Please be patient
            with us!
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
      ) */}
    </>
  );
};
