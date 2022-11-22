import { toast } from "react-toastify";
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

      if (res.status === 200) {
        setLoading(false);

        const data = await res.json();
        await dispatch({
          type: "GET_ORGANIZATION_INITIALIZE",
          payload: data.data,
        });
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      return error;
    }
  };
};
