import { REGISTER_CUSTOMER, SAVE_CUSTOMER_CONSENT } from "../actionTypes";

const initialState = {
  registeredCustomer: {},
  customerConsent: {},
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_CUSTOMER:
      return {
        ...state,
        registeredCustomer: action.payload,
      };
    case SAVE_CUSTOMER_CONSENT:
      return {
        ...state,
        customerConsent: action.payload,
      };
    default:
      return state;
  }
};
