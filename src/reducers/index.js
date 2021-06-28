import {combineReducers} from "redux";
import auth from "./auth";
import message from "./message";
import tutorials from "./tutuorials";

export default combineReducers({
  auth,
  message,
  tutorials
});