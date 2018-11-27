import React, { Component, Fragment } from "react";
import "./assests/App.css";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store/appStore";
import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <ToastContainer />
          <AppRoutes />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
