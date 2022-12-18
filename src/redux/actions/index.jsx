import { data } from "autoprefixer";
import { Slide, toast } from "react-toastify";
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
        await dispatch({
          type: "SAVE_CUSTOMER_CONSENT",
          payload: data,
        });
      } else {
        await dispatch({
          type: "SAVE_CUSTOMER_CONSENT",
          payload: { status: true },
        });
        setLoading3(true);
      }
    } catch (error) {
      await dispatch({
        type: "SAVE_CUSTOMER_CONSENT",
        payload: { status: true },
      });
      setLoading3(false);
      return error;
    }
  };
};

export const loanOptions = (setLoading, urlId, bearerToken, offer, id) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      var raw = JSON.stringify({
        offer,
        _id: id,
      });
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
        `https://api.veendhq.com/users/${urlId}/loanoptions`,
        requestOptions
      );

      if (res.ok) {
        setLoading(false);
        const data = await res.json();
        toast("🦄 Loan Options Retrieved", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          theme: "colored",
          transition: Slide,
        });

        await dispatch({
          type: "GET_LOAN_OPTIONS",
          payload: data,
        });
      } else {
        setLoading(false);
        toast.error(
          "Eligibility could not be processed. Please try again later.",
          {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            theme: "colored",
            transition: Slide,
          }
        );
        await dispatch({
          type: "GET_LOAN_OPTIONS",
          payload: data,
        });
        return;
      }
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
};

export const loanTerms = (
  setLoading,
  urlId,
  bearerToken,
  amount,
  id,
  channel
) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      var raw = JSON.stringify({
        amount,
        _id: id,
        channel,
      });
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
        `https://api.veendhq.com/users/${urlId}/accept`,
        requestOptions
      );

      if (res.ok) {
        setLoading(false);
        const data = await res.json();

        await dispatch({
          type: "ACCEPT_LOAN_TERMS",
          payload: data,
        });
      } else {
        setLoading(false);
        toast.error(
          "Eligibility could not be processed. Please try again later.",
          {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            theme: "colored",
            transition: Slide,
          }
        );
        await dispatch({
          type: "ACCEPT_LOAN_TERMS",
          payload: data,
        });
        return;
      }
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
};

export const sendCustomerOTP = (setLoading, bearerToken) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      var raw = JSON.stringify({});
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
        "https://api.veendhq.com/sendotp",
        requestOptions
      );

      if (res.ok) {
        setLoading(false);
        const data = await res.json();

        await dispatch({
          type: "SEND_OTP",
          payload: data,
        });
      } else {
        setLoading(false);
        toast.error(
          "Eligibility could not be processed. Please try again later.",
          {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            theme: "colored",
            transition: Slide,
          }
        );
        await dispatch({
          type: "SEND_OTP",
          payload: data,
        });
        return;
      }
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
};

export const verifyCustomerOTP = (
  setLoading,
  bearerToken,
  otp,
  firstName,
  lastName,
  email
) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      var raw = JSON.stringify({
        firstName,
        lastName,
        email,
        otp,
      });
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
        "https://api.veendhq.com/verifyotp",
        requestOptions
      );

      if (res.ok) {
        setLoading(false);
        const data = await res.json();

        await dispatch({
          type: "VERIFY_OTP",
          payload: data,
        });
      } else {
        setLoading(false);
        toast.error("Wrong OTP. Please verify try again.", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,

          transition: Slide,
        });
        await dispatch({
          type: "VERIFY_OTP",
          payload: data,
        });
        return;
      }
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
};
