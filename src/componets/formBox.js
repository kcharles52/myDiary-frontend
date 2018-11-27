import React, { Component, Fragment } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./RegisterForm";

//forms
class FormBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTab: true
    };
  }

  toggling=()=> {
    this.setState(prevState => ({
      displayTab: !prevState.toggle
    }));
  }

  render() {
    let tab;
    this.state.displayTab ? (tab = <LoginForm {...this.props}/>) : (tab = <RegisterForm />);
    return (
      <Fragment>
        <div onClick={this.toggling}>{tab}</div>
        <div />
      </Fragment>
    );
  }
}

export default FormBox;
