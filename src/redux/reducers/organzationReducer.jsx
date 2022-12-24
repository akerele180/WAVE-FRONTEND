import { GET_ORGANIZATION_INITIALIZE } from "../actionTypes";

const initialState = {
  organization: {},
  loading: false,
};

export const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORGANIZATION_INITIALIZE:
      return {
        ...state,
        organization: action.payload,
      };

    default:
      return state;
  }
};
