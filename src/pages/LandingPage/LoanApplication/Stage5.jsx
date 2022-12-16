import React from "react";
import { useState } from "react";
import { useRef } from "react";

const Stage5 = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-[500px] h-screen mx-auto shadow-lg rounded p-2">
      <form ref={formRef} className="bg-gray-300 p-3 shadow-lg w-full">
        <label htmlFor="otp">Enter your OTP</label>
        <br />
        <input
          type="text"
          name="otp"
          id=""
          placeholder="Enter your correct OTP"
          className="p-2 border rounded w-full block"
        />
        <div className="flex justify-center mt-8">
          <button
            className="bg-secondary-dark text-white py-2 px-6 text-center"
            type="submit"
          >
            {loading ? "Verifying" : "Verify OTP"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Stage5;
