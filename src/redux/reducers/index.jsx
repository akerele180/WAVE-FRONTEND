import { combineReducers } from "redux";
import { customerReducer } from "./customerReducer";
import { organizationReducer } from "./organzationReducer";

const reducers = combineReducers({
  organization: organizationReducer,
  registeredCustomer: customerReducer,
});

export default reducers;
