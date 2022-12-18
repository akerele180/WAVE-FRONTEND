import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Stage4 = () => {
  const { registeredCustomer } = useSelector(
    (state) => state.registeredCustomer
  );
  const navigate = useNavigate();

  const value = Object.values(registeredCustomer)[1];

  return (
    <div className="bg-gray-300 max-w-[500px] mx-auto shadow-lg rounded p-2">
      <h1 className="text-center text-4xl font-medium mb-3">
        Personal Details
      </h1>

      <p className="mt-2 font-medium mb-3">Confirm your identity</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/verify-otp");
        }}
      >
        <label htmlFor="3_months" className="">
          First Name
        </label>
        <br />
        <input
          type="text"
          readOnly
          name="first_name"
          value={value.firstName}
          id=""
          placeholder="first name"
          className="border p-1 md:p-2 w-full rounded bg-gray-100 mb-3"
        />
        <br />
        <label htmlFor="3_months" className="">
          Last Name
        </label>
        <br />
        <input
          type="text"
          readOnly
          name="last_name"
          value={value.lastName}
          id=""
          placeholder="last name"
          className="border p-1 md:p-2 mb-3 w-full rounded bg-gray-100"
        />
        <br />
        <label htmlFor="3_months" className="">
          Phone Number
        </label>
        <br />
        <input
          type="text"
          readOnly
          name="phone_number"
          value={value.phoneNumber}
          id=""
          placeholder="0809 000 1111"
          className="border p-1 md:p-2 w-full rounded bg-gray-100 mb-3"
        />
        <br />
        <label htmlFor="3_months" className="">
          Email Address
        </label>
        <br />
        <input
          type="text"
          readOnly
          name="email"
          id="email"
          value={value.email}
          placeholder="youremail@xyz.com"
          className="border p-1 md:p-2 w-full rounded bg-gray-100 mb-3"
        />
        <br />

        <button
          type="submit"
          className="bg-secondary-dark text-white mx-auto text-center py-2 px-6 cursor-pointer hover:bg-secondary hover:text-black flex justify-center"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default Stage4;
