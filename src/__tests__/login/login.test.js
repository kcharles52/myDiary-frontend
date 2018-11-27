import React from "react";
import { shallow } from "enzyme";
import expect from "expect";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import LoginAction from "../../actions/loginAction";
import { LoginForm } from "../../componets/loginForm";
import { LoginFormView } from "../../views/forms/loginFormView";
import { LOGIN_URL } from "../../appURLs/APIUrls";
import LoginReducer from "../../reducers/loginReducer";
import { LOGIN_ACTION } from "../../actions/actionTypes";

it("should contain a welcome message", () => {
  let login = shallow(<LoginFormView />);
  expect(login.contains("Welcome Back!")).toEqual(true);
});

it("unsuccesfull input", () => {
  const LoginAction = jest.fn();
  let props = {
    dispatch: jest.fn()
  };
  let event = {
    preventDefault: jest.fn()
  };
  let login = shallow(<LoginForm {...props} />);
  login.setProps({ LoginAction, user: { user: false } });
  login.instance().handleLogin(event);
});

describe("login reducer", () => {
  const initialState = {
    user: {}
  };
  it("should return logged in user", () => {
    expect(
      LoginReducer(initialState, {
        type: LOGIN_ACTION,
        payload: {}
      })
    );
  });
});

const response_data = {};
describe("login action", () => {
  let store;
  let mock;
  beforeEach(() => {
    ({ mock, store } = configureMock(mock, store));
  });
  const helperMethod = (status, action) => {
    mock.onPost(LOGIN_URL).reply(status, response_data);
    action(response_data)(store.dispatch);
    expect(store.getActions()).toEqual([]);
  };
  it("should login user", async () => {
    helperMethod(200, LoginAction);
  });
  it("error action is dispatched", async () => {
    helperMethod(400, LoginAction);
  });
});

export function configureMock(mock, store) {
  mock = new MockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
  return { mock, store };
}
