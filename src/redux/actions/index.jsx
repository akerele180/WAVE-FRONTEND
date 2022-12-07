import { Navigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import { REGISTER_CUSTOMER } from "../actionTypes";
// import { GETRequest, sendGETRequest } from "../../utils/hooks";
export const getOrganizationInitialize = (setLoading) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      var myHeaders = new Headers();
      myHeaders.append("x-tag", "veend-setup");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const res = await fetch(
        "https://api.veendhq.com/organization?client=waveafricabusinessconsultinglimited",
        requestOptions
      );

      if (res.ok) {
        setLoading(false);

        const data = await res.json();
        await dispatch({
          type: "GET_ORGANIZATION_INITIALIZE",
          payload: data.data,
        });
      } else {
        setLoading(false);
        return;
      }
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
};

export const registerCustomer = (setLoading2, phonenumber) => {
  return async (dispatch) => {
    setLoading2(true);
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "x-tag",
        "OWU5MWQ5N2U1YzgzZGFhZWM0ZTc4NzMyYzgwOGMxZTY1MTc1N2ExNGJhOGE2OTk1NTNlODk1M2IzZjcxYzgzYS8vLy8vLzE2NTYwMTIxNzQ4MDI="
      );

      var raw = JSON.stringify({
        phonenumber,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const res = await fetch(
        "https://api.veendhq.com/register",
        requestOptions
      );

      if (res.ok) {
        setLoading2(false);
        const data = await res.json();
        toast.success("🦄 Customer Registered", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,

          theme: "colored",
          transition: Slide,
        });

        await dispatch({
          type: "REGISTER_CUSTOMER",
          payload: data,
        });
      } else {
        setLoading2(false);
        return;
      }
    } catch (error) {
      setLoading2(false);
      return error;
    }
  };
};

export const customerConsent = (setLoading3, id, bearerToken) => {
  return async (dispatch) => {
    try {
      var raw = '{\n "consent": "yes"\n}';

      var requestOptions = {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${bearerToken}`,
          "x-tag":
            "OWU5MWQ5N2U1YzgzZGFhZWM0ZTc4NzMyYzgwOGMxZTY1MTc1N2ExNGJhOGE2OTk1NTNlODk1M2IzZjcxYzgzYS8vLy8vLzE2NTYwMTIxNzQ4MDI=",
          "Content-Type": "application/json",
        }),
        body: raw,
        redirect: "follow",
      };

      const res = await fetch(
        `https://api.veendhq.com/users/${id}/consent`,
        requestOptions
      );

      if (res.ok) {
        const data = await res.json();
        toast.success("🦄 Consent Saved", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          theme: "colored",
          transition: Slide,
        });

        await dispatch({
          type: "SAVE_CUSTOMER_CONSENT",
          payload: data,
        });
      } else {
        toast.error("You are not eligible for loan at the moment", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          theme: "colored",
          transition: Slide,
        });
        setLoading3(true);
        <Navigate to="/" replace={true} />;
        return;
      }
    } catch (error) {
      setLoading3(false);
      return error;
    }
  };
};
