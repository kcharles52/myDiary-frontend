import { LOGIN_ACTION } from "./actionTypes";
import axios from "axios";
import {LOGIN_URL } from "../appURLs/APIUrls";

const LoginAction = data => dispatch => {
  axios
    .post(LOGIN_URL, data)
    .then(res => {
      dispatch({
        type: LOGIN_ACTION,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: LOGIN_ACTION,
        payload: error.response
      });
    });
};
export default LoginAction;
