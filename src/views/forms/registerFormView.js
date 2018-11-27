import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const RegisterFormView = (props)=>{
  RegisterFormView.propTypes = {
    handleInputChange: PropTypes.func,
    handleRegister: PropTypes.func
  };
  let {handleRegister, handleInputChange } = props;
  return(
    <div className='RegisterForm'>
      <h2>Register for an Account</h2>
      <Form onSubmit={handleRegister}>
               
        <div className="top-row">
          <FormGroup className="field-wrap">
            <Label> First Name
              <span className="req">*</span>
            </Label>
            <Input type="text" id="FirstName" required autoComplete="off" onChange={handleInputChange} />
          </FormGroup>
          <FormGroup className="field-wrap">
            <Label>Last Name
              <span className="req">*</span>
            </Label>
            <Input type="text" id="LastName" required autoComplete="off" onChange={handleInputChange} />
          </FormGroup>
        </div>
        <FormGroup className="field-wrap">
          <Label>Email Address
            <span className="req">*</span>
          </Label>
          <Input type="email" id="Email" required autoComplete="off" onChange={handleInputChange} />
        </FormGroup>
        <FormGroup className="field-wrap">
          <Label>Set Password
            <span className="req">*</span>
          </Label>
          <Input type="password" id="password" required autoComplete="off" onChange={handleInputChange} />
        </FormGroup>
        <FormGroup className="field-wrap">
          <Label>Confirm Password
            <span className="req">*</span>
          </Label>
          <Input type="password" id="password2" required autoComplete="off" onChange={handleInputChange} />
        </FormGroup>
        <Button type="submit" className="button button-block" >Get Started</Button>
      </Form>
    </div>

  );

};

export default RegisterFormView;
