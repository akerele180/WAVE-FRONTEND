import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Heading } from "../components/Heading";
import ThankYou from "../../../assets/images/WAVE_WebApp(10).png";
import ProofOfFundz from "../../../assets/images/WAVE_WebApp(11).png";
import { BsSuitHeartFill } from "react-icons/bs";

import { toast } from "react-toastify";
import { Bars } from "react-loader-spinner";
import { useForm } from "react-hook-form";

const ProofOfFunds = () => {
  const [loading, setLoading] = useState(false);
  const [emailInfo, setEmailInfo] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const form = useRef();

  const sendEmail = () => {
    setLoading(true);

    emailjs
      .sendForm(
        "service_yc9jwse",
        "template_wz96lrt",
        form.current,
        "AJ02V-9d8EP0SzfAW"
      )
      .then(
        (result) => {
          setLoading(false);
          if (!result) {
            setTimeout(() => {
              setLoading(false);
            }, 10000);
          }
          toast.success("Application Sent", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          handleShow();
          reset();
        },
        (error) => {
          toast.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <>
      {show ? (
        <ProofOfFundsResponse />
      ) : (
        <div className="max-md:mt-5 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(93vh-82px)] relative">
          <div>
            <Heading heading={"Apply for Proof of Funds"} />
            <form
              ref={form}
              className="mt-5 md:mt-10"
              onSubmit={handleSubmit(sendEmail)}
            >
              <input
                type="text"
                className="w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                name="first_name"
                placeholder="First Name"
                autoComplete="false"
                {...register("first_name", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Name must be greater than 3 letters",
                  },
                })}
                aria-invalid={errors.first_name ? "true" : "false"}
              />
              {errors.first_name && errors.first_name.type === "required" && (
                <p className="text-red-600">First Name is required</p>
              )}
              {errors.first_name && errors.first_name.type === "minLength" && (
                <p className="text-red-600">{errors.first_name.message}</p>
              )}
              <input
                type="text"
                className="w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Last Name"
                name="last_name"
                {...register("last_name", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Name must be greater than 3 letters",
                  },
                })}
              />
              {errors.last_name && errors.last_name.type === "required" && (
                <p className="text-red-600">Last Name is required</p>
              )}
              {errors.last_name && errors.last_name.type === "minLength" && (
                <p className="text-red-600">{errors.last_name.message}</p>
              )}
              <input
                type="email"
                className="w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Email Address"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "This is not a valid email",
                  },
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="text-red-600">Email is required.</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
              <input
                type="tel"
                className="w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Whatsapp Number"
                name="whatsapp"
                {...register("whatsapp", {
                  required: true,
                  pattern: {
                    value:
                      "((^+)(234){1}[0–9]{10})|((^234)[0–9]{10})|((^0)(7|8|9){1}(0|1){1}[0–9]{8})",
                    message: "Must follow the standard '234**********'",
                  },
                })}
              />
              {errors.whatsapp && errors.whatsapp.type === "required" && (
                <p className="text-red-600">whatsapp is required.</p>
              )}
              {errors.whatsapp && errors.whatsapp.type === "pattern" && (
                <p className="text-red-600">{errors.whatsapp?.message}</p>
              )}
              <input
                type="number"
                className={`w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary ${
                  errors.whatsapp && "border-red-600"
                }`}
                placeholder="Amount needed?"
                name="amount_needed"
                {...register("amount_needed", {
                  required: true,
                  pattern: {
                    value: "^[0-9]",
                    message: "Amount must be in numbers only",
                  },
                })}
              />
              {errors.amount_needed &&
                errors.amount_needed.type === "required" && (
                  <p className="text-red-600">Amount needed is required.</p>
                )}
              {errors.amount_needed &&
                errors.amount_needed.type === "pattern" && (
                  <p className="text-red-600">{errors.amount_needed.message}</p>
                )}
              <input
                type="date"
                className="w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="How soon do you need the funds?"
                name="when_needed"
                {...register("when_needed", { required: true })}
              />
              {errors.when_needed && errors.when_needed.type === "required" && (
                <p className="text-red-600">Date is required</p>
              )}
              <input
                type="number"
                className="w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="How long do you need the funds for (in weeks)?"
                name="loan_duration"
                {...register("loan_duration", {
                  required: true,
                  pattern: {
                    value: "^[0-9]",
                    message: "Duration must be a number",
                  },
                })}
              />
              {errors.loan_duration &&
                errors.loan_duration.type === "required" && (
                  <p className="text-red-600">Loan duration is required</p>
                )}
              {errors.loan_duration &&
                errors.loan_duration.type === "pattern" && (
                  <p className="text-red-600">{errors.type.message}</p>
                )}
              <input
                type="text"
                className="w-full md:w-8/12 block border border-orange mt-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                placeholder="Referral Name (Optional)"
                name="referral_name"
                {...register("referral")}
              />
              <button
                className="bg-secondary flex items-center justify-center text-center py-3 w-4/12 mt-4 disabled"
                type="submit"
              >
                {loading ? (
                  <Bars
                    height="24"
                    width="24"
                    color="#000"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperclassName="text-center flex items-center justify-center"
                    visible={true}
                  />
                ) : (
                  "APPLY"
                )}
              </button>
            </form>
          </div>
          <div className="max-md:hidden">
            <img src={ProofOfFundz} alt="proof_of_funds_image" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProofOfFunds;

const ProofOfFundsResponse = () => {
  return (
    <div className="md:flex flex-col place-content-center h-[calc(93vh-82px)] relative">
      <div className="mx-auto w-[300px]">
        <img src={ThankYou} alt="thank_you_response_image" className="w-full" />
      </div>
      <div>
        <p className="text-center mb-3 text-2xl text-orange">Thank you</p>
        <p className="text-center px-4">
          We will reach out to you in the next 24 hours
        </p>
        <p className="flex items-center text-center justify-center mt-2 font-bold ">
          <BsSuitHeartFill size={20} className="text-primary mr-1" /> WAVE
        </p>
      </div>
      <p className="col-span-2 max-md:hidden absolute bottom-4 left-0 right-0 text-center">
        For any inquiries or compliant, please call this number{" "}
        <strong>0123456789</strong> or email <strong>loan@getwave.ng</strong>
      </p>
    </div>
  );
};
