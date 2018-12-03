import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";

const reducers = combineReducers({
  loginReducer,
  registerReducer
});

export default reducers;
