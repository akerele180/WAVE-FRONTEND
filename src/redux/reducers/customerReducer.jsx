import {
  REGISTER_CUSTOMER,
  SAVE_CUSTOMER_CONSENT,
  GET_LOAN_OPTIONS,
  ACCEPT_LOAN_TERMS,
  SEND_OTP,
  VERIFY_OTP,
} from "../actionTypes";

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
    case GET_LOAN_OPTIONS:
      return {
        ...state,
        loanOptions: action.payload,
      };
    case ACCEPT_LOAN_TERMS:
      return {
        ...state,
        loanTerms: action.payload,
      };
    case SEND_OTP:
      return {
        ...state,
        sendOTP: action.payload,
      };
    case VERIFY_OTP:
      return {
        ...state,
        verifyOTP: action.payload,
      };
    default:
      return state;
  }
};
