import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyCustomerOTP } from "../../../redux/actions";
import { Success } from "../Responses";

const Stage5 = () => {
  const [page, setPage] = useState(false);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { registeredCustomer } = useSelector(
    (state) => state.registeredCustomer
  );
  const { verifyOTP } = useSelector((state) => state.registeredCustomer);

  useEffect(() => {
    if (verifyOTP.status === "success") {
      setPage(true);
    }
  }, [verifyOTP]);

  return (
    <>
      {page ? (
        <Success />
      ) : (
        <div className="max-w-[500px] mx-auto shadow-lg rounded p-2 mt-3">
          <form
            ref={formRef}
            className="bg-gray-300 p-3 shadow-lg w-full"
            onSubmit={async (e) => {
              e.preventDefault();
              await dispatch(
                verifyCustomerOTP(
                  setLoading,
                  registeredCustomer.data.token,
                  formRef.current[0].value,
                  registeredCustomer.data.firstName,
                  registeredCustomer.data.lastName,
                  registeredCustomer.data.email
                )
              );
            }}
          >
            <label htmlFor="otp">Enter your OTP</label>
            <br />
            <input
              type="number"
              name="otp"
              id=""
              placeholder="Enter your correct OTP"
              className="p-2 border rounded w-full block"
            />
            <div className="flex justify-center mt-8">
              <button
                className={`bg-secondary-dark text-white py-2 px-6 text-center ${
                  loading ? "cursor-wait disabled" : ""
                }`}
                type="submit"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Stage5;
