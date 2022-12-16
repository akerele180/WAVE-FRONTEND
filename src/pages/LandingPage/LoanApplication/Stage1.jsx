import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../../redux/actions";

const Stage1 = () => {
  const [loading, setLoading] = useState(false);
  const { customerConsent } = useSelector((state) => state.registeredCustomer);
  const { registeredCustomer } = useSelector(
    (state) => state.registeredCustomer
  );
  const loanOptions2 = useSelector(
    (state) => state.registeredCustomer.loanOptions
  );
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loanOptions2?.status) {
      navigate("/loan-application-2");
    }
  }, [loanOptions2]);

  return (
    <div className="max-w-[500px] mx-auto mt-5 shadow-lg rounded p-2">
      <h1 className="text-center text-4xl font-medium mb-3">
        Loan Application
      </h1>
      <p className="flex items-center text-center justify-center rounded border border-gray-200 bg-primary-light p-2">
        <span className="rounded-full bg-orange-400 text-black  mr-1">
          <TiTickOutline size={20} />
        </span>{" "}
        You are Eligible for a Loan
      </p>
      <p className="text-center mt-6">How long do you want it for?</p>

      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          let req = formRef.current;
          for (let i = 0; i < req.length - 1; i++) {
            if (req[i].checked) {
              const getCustomerOptions = async () => {
                await dispatch(
                  actions.loanOptions(
                    setLoading,
                    registeredCustomer?.data?._id,
                    registeredCustomer?.data?.token,
                    req[i].value,
                    customerConsent?.data?._id
                  )
                );
              };
              getCustomerOptions();
            }
          }
        }}
      >
        {customerConsent?.data?.loanOptions?.map((item) => (
          <div
            className="rounded border p-3 my-2 cursor-pointer"
            key={item.offer}
          >
            <input
              type="radio"
              name="how_long"
              id={item.tenure}
              value={item.offer}
              className="accent-secondary-dark active:accent-secondary-dark focus:accent-secondary-dark hover:accent-secondary-dark"
            />
            <label htmlFor={item.tenure} className="pl-1">
              {item.title}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className={`bg-secondary-dark text-white mx-auto text-center py-2 px-6 cursor-pointer hover:bg-secondary hover:text-black flex justify-center ${
            loading ? "disabled" : "disabled"
          }`}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Stage1;
