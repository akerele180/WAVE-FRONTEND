import { REGISTER_CUSTOMER } from "../actionTypes";

const initialState = {
  registeredCustomer: {},
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_CUSTOMER:
      return {
        ...state,
        registeredCustomer: action.payload,
      };
    default:
      return state;
  }
};
