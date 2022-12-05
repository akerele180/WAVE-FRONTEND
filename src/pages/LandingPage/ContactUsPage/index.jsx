import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import ProductImage from "../../../assets/images/WAVE_WebApp(3).png";
import ThankYou from "../../../assets/images/WAVE_WebApp(5).png";
import { motion } from "framer-motion";
import { BsSuitHeartFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";

const ContactUsPage = () => {
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

  return (
    <>
      {show ? (
        <ContactUsPageResponse />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-md:mt-5 md:grid md:grid-cols-2 items-center justify-center px-4 md:w-[85vw] md:mx-auto h-[calc(100vh-82px)] relative"
        >
          <Fade left>
            <div>
              <Heading heading={"Contact Us"} />
              <form
                className="mt-5 md:mt-10"
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                  reset();
                })}
              >
                <input
                  type="text"
                  className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                  placeholder="First Name"
                  name="first_name"
                  {...register("first_name", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "First name must be greater than 3 letters",
                    },
                  })}
                  aria-invalid={errors.first_name ? "true" : "false"}
                />
                {errors.first_name && errors.first_name.type === "required" && (
                  <p className="text-red-600">First Name is required</p>
                )}
                {errors.first_name &&
                  errors.first_name.type === "minLength" && (
                    <p className="text-red-600">{errors.first_name.message}</p>
                  )}
                <input
                  type="text"
                  className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                  placeholder="Surname"
                  name="surname"
                  {...register("surname", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "First name must be greater than 3 letters",
                    },
                  })}
                  aria-invalid={errors.surname ? "true" : "false"}
                />
                {errors.surname && errors.surname.type === "required" && (
                  <p className="text-red-600">Surname is required</p>
                )}
                {errors.surname && errors.surname.type === "minLength" && (
                  <p className="text-red-600">{errors.surname.message}</p>
                )}
                <input
                  type="email"
                  className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
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
                  className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                  placeholder="Phone Number"
                  name="phone_number"
                  {...register("phone_number", {
                    required: true,
                    pattern: {
                      value:
                        "((^+)(234){1}[0–9]{10})|((^234)[0–9]{10})|((^0)(7|8|9){1}(0|1){1}[0–9]{8})",
                      message: "Must follow the standard '234**********'",
                    },
                  })}
                />
                {errors.phone_number &&
                  errors.phone_number.type === "required" && (
                    <p className="text-red-600">Phone Number is required.</p>
                  )}
                {errors.phone_number &&
                  errors.phone_number.type === "pattern" && (
                    <p className="text-red-600">
                      {errors.phone_number?.message}
                    </p>
                  )}
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full md:w-8/12 block border border-orange my-2 px-4 py-2 placeholder:text-sm placeholder focus:border-primary"
                  {...register("message", { required: true })}
                />
                {errors.message && errors.message.type === "required" && (
                  <p className="text-red-600">Please type in your message.</p>
                )}
                <button
                  className="bg-secondary py-3 w-4/12 mt-4"
                  type="submit"
                  // onClick={handleShow}
                >
                  SEND
                </button>
              </form>
            </div>
          </Fade>
          <Fade right>
            <div className="max-md:hidden">
              <img src={ProductImage} alt="" />
            </div>
          </Fade>
          <Fade bottom>
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
          </Fade>
        </motion.section>
      )}
    </>
  );
};

export default ContactUsPage;

const ContactUsPageResponse = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:flex flex-col place-content-center h-[calc(100vh-82px)] relative"
    >
      <div className="mx-auto w-[200px]">
        <img src={ThankYou} alt="" className="w-full" />
      </div>
      <div>
        <p className="text-center">Thank you for contacting us!</p>
        <p className="text-center px-4">
          We will attend to your message within the next 2 hours
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
