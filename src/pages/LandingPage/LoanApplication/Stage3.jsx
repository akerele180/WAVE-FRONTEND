import { useState } from "react";
import { useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendCustomerOTP } from "../../../redux/actions";

const Stage3 = () => {
  const { registeredCustomer } = useSelector(
    (state) => state.registeredCustomer
  );
  const [loading, setLoading] = useState(false);
  const { sendOTP } = useSelector((state) => state.registeredCustomer);
  // const { status } = sendOTP;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loanTerms } = useSelector((state) => state.registeredCustomer);
  let value = Object.values(loanTerms)[1];

  useEffect(() => {
    if (sendOTP?.status === "success") {
      navigate("/loan-application-4");
    }
  }, [sendOTP]);

  return (
    <div className="bg-gray-300 max-w-[500px] mx-auto shadow-lg rounded p-2">
      <h1 className="text-center text-4xl font-medium mb-3">
        Loan Application
      </h1>
      <p className="flex items-center text-center justify-center rounded border border-black p-2 my-3 bg-primary">
        <span className="rounded-full bg-orange-400 text-black  mr-1">
          <TiTickOutline size={20} />
        </span>{" "}
        Confirm Loan Application
      </p>

      <form
        className="bg-white m-2 p-5 space-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            sendCustomerOTP(setLoading, registeredCustomer?.data?.token)
          );
        }}
      >
        <p className="px-4 flex items-center justify-between">
          <span>Principal</span>
          <span>&#8358;{value.amount}</span>
        </p>
        <hr className="border-primary" />
        <p className="px-4 flex items-center justify-between">
          <span>Tenure</span>
          <span>{value.tenure} Months</span>
        </p>
        <hr className="border-primary" />
        <p className="px-4  flex items-center justify-between">
          <span>Repayment Date</span>
          <span>{value.repaymentDate.slice(0, 10)}</span>
        </p>
        <hr className="border-primary" />
        <p className="px-4  flex items-center justify-between">
          <span>Interest Rate</span>
          <span>{value.interestRate}%</span>
        </p>
        <hr className="border-primary" />
        <p className="px-4  flex items-center justify-between">
          <span>Repayment</span>
          <span>&#8358;{value.repaymentAmount}</span>
        </p>
        <hr className="border-primary" />
        <p className="px-4  flex items-center justify-between">
          <span>Upfront Fee</span>
          <span>&#8358;{value.fee}</span>
        </p>
        <hr className="border-primary" />
        <p className="px-4  flex items-center justify-between">
          <span>Installment Fee</span>
          <span>&#8358;{value.instalmentFee}</span>
        </p>
        <hr className="border-primary" />

        {/* <div className=""> */}
        <button
          type="submit"
          className="bg-secondary-dark text-white mx-auto text-center py-1 px-4 cursor-pointer hover:bg-secondary hover:text-black flex justify-center"
        >
          {" "}
          {loading ? "sending" : "Accept Terms"}
        </button>
        <button
          type="submit"
          className="bg-white border border-orange text-orange mx-auto text-center py-1 px-4 cursor-pointer hover:bg-orange hover:text-white flex justify-center"
          onClick={() => window.location.assign("get-started")}
        >
          Decline
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default Stage3;
