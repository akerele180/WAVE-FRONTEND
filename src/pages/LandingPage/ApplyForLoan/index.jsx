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

    return () => {
      console.log("fetching done");
    };
  }, [organization]);

  const options = bankListOptions?.map((banks) => {
    return { label: banks.bankName, value: banks._id };
  });

  const handleSubmitt = (data) => {
    dispatch(registerCustomer(setLoading2, data.phone_number));
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
              onSubmit={
                handleSubmit(handleSubmitt)

                // handleCustomerApplication(phoneRef.current.value);
                // dispatch(registerCustomer(setLoading2, phoneRef.current.value))
              }
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
                      href="/src/assets/docs/Wave Term_Conditions and Privacy Policy.pdf"
                      target="_blank"
                      download="WAVE - Terms & condition, Privacy Policy"
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
          {/* <button
            type="button"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => setShowConsentModal(true)}
          >
            Launch demo modal
          </button> */}
          {/* Footer nav for social links */}
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
    if (loading3) {
      navigate("/");
      window.location.reload();
    }
    setTimeout(() => {
      navigate("/loan-application-1");
    }, 500);
  }, [loading3]);

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

// const WaveConsentModal = (props) => {
//   return (
//     <div
//       className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
//       id="exampleModal"
//       tabindex="-1"
//     >
//       <div className="modal-dialog relative w-auto pointer-events-none">
//         <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
//           <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
//             <h5
//               className="text-xl font-medium leading-normal text-gray-800"
//               id="exampleModalLabel"
//             >
//               Consent
//             </h5>
//             <button
//               type="button"
//               className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="modal-body relative p-4 text-center font-light">
//             I hereby authorize{" "}
//             <strong>Waveafricabusinessconsultinglimited </strong>to obtain my
//             personal dara from 3rd parties, deduct loan settlements from my
//             salary and debit bank accounts linked to my identity for repayments.
//             I acknowledge that all information provided is accurate and
//             understand that once approved, this application is irreversible.
//           </div>
//           <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
//             <button
//               type="button"
//               className="px-6
//           py-2.5
//           bg-purple-600
//           text-white
//           font-medium
//           text-xs
//           leading-tight
//           rounded
//           shadow-md
//           hover:bg-purple-700 hover:shadow-lg
//           focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
//           active:bg-purple-800 active:shadow-lg
//           transition
//           duration-150
//           ease-in-out"
//               data-bs-dismiss="modal"
//             >
//               Decline
//             </button>
//             <button
//               type="button"
//               className="px-6
//       py-2.5
//       bg-blue-600
//       text-white
//       font-medium
//       text-xs
//       leading-tight
//       rounded
//       shadow-md
//       hover:bg-blue-700 hover:shadow-lg
//       focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
//       active:bg-blue-800 active:shadow-lg
//       transition
//       duration-150
//       ease-in-out
//       ml-1"
//             >
//               Consent
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const WaveConsentModal = () => {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <button
//         className="bg-blue-200 text-black active:bg-blue-500
//       font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         Fill Details
//       </button>
//       {showModal ? (
//         <>
//           <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
//                   <h3 className="text-3xl font=semibold">General Info</h3>
//                   <button
//                     className="bg-transparent border-0 text-black float-right"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
//                       x
//                     </span>
//                   </button>
//                 </div>
//                 <div className="relative p-6 flex-auto">
//                   <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
//                     <label className="block text-black text-sm font-bold mb-1">
//                       First Name
//                     </label>
//                     <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
//                     <label className="block text-black text-sm font-bold mb-1">
//                       Last Name
//                     </label>
//                     <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
//                     <label className="block text-black text-sm font-bold mb-1">
//                       Address
//                     </label>
//                     <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
//                     <label className="block text-black text-sm font-bold mb-1">
//                       City
//                     </label>
//                     <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
//                   </form>
//                 </div>
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : null}
//     </>
//   );
// };
