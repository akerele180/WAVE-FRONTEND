import React, { useRef, useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loanTerms } from "../../../redux/actions";

const Stage2 = () => {
  const [loading, setLoading] = useState(false);
  const { registeredCustomer } = useSelector(
    (state) => state.registeredCustomer
  );
  const { loanOptions } = useSelector((state) => state.registeredCustomer);
  const loanTerms2 = useSelector((state) => state?.registeredCustomer?.loanTerms);


  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (loanTerms2?.status === "success") {
      navigate("/loan-application-3");
    }
  }, [loanTerms2]);

  return (
    <div className="max-w-[500px] mx-auto shadow-lg rounded p-2">
      <h1 className="text-center text-4xl font-medium mb-3">
        Loan Application
      </h1>
      <p className="flex items-center text-center justify-center rounded border border-black p-2 my-3 bg-primary">
        <span className="rounded-full bg-orange-400 text-black  mr-1">
          <TiTickOutline size={20} />
        </span>{" "}
        Maximum Eligible amount is: &#8358;{loanOptions?.data?.maxAmount}
      </p>
      <p className="text-center my-2">How much do you want to borrow?</p>
      <form
        ref={formRef}
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          let req = formRef.current;

          for (let i = 0; i < req.length - 1; i++) {
            if (req[i].checked) {
              const getCustomerLoanTerms = async () => {
                await dispatch(
                  loanTerms(
                    setLoading,
                    registeredCustomer?.data?._id,
                    registeredCustomer?.data?.token,
                    req[i].value,
                    loanOptions?.data?._id,
                    "WEB"
                  )
                );
              };
              getCustomerLoanTerms();
            }
          }
        }}
      >
        {loanOptions?.data?.options?.map((item, idx) => (
          <div className="rounded border p-3 mb-3 cursor-pointer" key={idx}>
            <input
              type="radio"
              name="options"
              id={idx}
              value={item.replace(",", "")}
              className="accent-secondary-dark active:accent-secondary-dark focus:accent-secondary-dark hover:accent-secondary-dark"
            />
            <label htmlFor={idx} className="pl-1">
              &#8358;{item}
            </label>
          </div>
        ))}

        <button
          type="submit"
          className="bg-secondary-dark text-white mx-auto text-center py-2 px-6 cursor-pointer hover:bg-secondary hover:text-black flex justify-center"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Stage2;
