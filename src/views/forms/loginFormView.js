import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {Link} from "react-router-dom";

export const LoginFormView = (props)=>{
  LoginFormView.propTypes = {
    handleInputChange: PropTypes.func,
    handleLogin: PropTypes.func
  };
  let {handleLogin, handleInputChange } = props;
  return(
    <div id="login">
      <h2>Welcome Back!</h2>
      <Form onSubmit={handleLogin}>
        <FormGroup className="field-wrap">
          <Label for="Email">Email Address <span className="req">*</span></Label>
          <Input type="email" name="email" id="Email" onChange={handleInputChange} />
        </FormGroup>
        <FormGroup className="field-wrap">
          <Label for="examplePassword">Password <span className="req">*</span></Label>
          <Input type="password" name="password" id="LoginPassword" onChange={handleInputChange}/>
        </FormGroup>
        <div className="forgot-p">
          <Link to="/">Forgot Password ?</Link>
        </div>
        <Button id="Login" type="submit" className="button button-block" > LOG IN </Button>

      </Form>
    </div>
  );

};

export default LoginFormView;
