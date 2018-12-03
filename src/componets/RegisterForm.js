import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import RegisterFormView from "../views/forms/registerFormView";
// import LoginAction from "../actions/loginAction";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: ""
      }
    };
  }

  render() {
    return (
      <div>
        <RegisterFormView {...this.props} />
      </div>
    );
  }
}

// RegisterForm.propTypes = {};

export default RegisterForm;
