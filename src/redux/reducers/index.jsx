import { combineReducers } from "redux";
import { organizationReducer } from "./organzationReducer";

const reducers = combineReducers({ organization: organizationReducer });

export default reducers;
