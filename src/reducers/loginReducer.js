import { LOGIN_ACTION } from "../actions/actionTypes";
const initialState = {
  user: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      ...state,
      user: action.payload
    };
  default:
    return state;
  }
}
