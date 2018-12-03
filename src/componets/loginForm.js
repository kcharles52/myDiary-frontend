import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import LoginFormView from "../views/forms/loginFormView";
import LoginAction from "../actions/loginAction";
export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
  }

  handleLogin = event => {
    event.preventDefault();
    this.props.dispatch(LoginAction(this.state.user));
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.user) {
      toast.success("you have succesfully logged in", {
        autoClose: 2500,
        hideProgressBar: true
      });
      localStorage.setItem("token", nextProps.user.token);
      this.props.history.push("/home");
    } else {
      toast.error("Invalid login details", {
        autoClose: 2500,
        hideProgressBar: true
      });
    }
  }
  handleInputChange = event => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      };
    });
  };

  render() {
    return (
      <LoginFormView
        {...this.props}
        handleLogin={this.handleLogin}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}
const mapDispatchToProps = dispatch => ({ dispatch });
const mapStateToProps = state => ({
  user: state.loginReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
