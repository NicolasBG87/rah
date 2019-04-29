import React, { useState, useContext } from "react";

import Input from "app/components/Input";
import Checkbox from "app/components/Checkbox";
import Button from "app/components/Button";

import { AuthContext } from "app/util/auth";
import * as validator from "app/util/validator";

const initialFormData = {
  email: "",
  password: "",
  rememberMe: false
};

const Login = ({ history, changeView }) => {
  const [formData, setFormData] = useState(initialFormData);
  const { login } = useContext(AuthContext);

  const onInputChange = e => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onCheckboxChange = () => {
    setFormData({
      ...formData,
      rememberMe: !formData.rememberMe
    });
  };

  const onLogin = e => {
    e.preventDefault();
    login(formData, redirectToMain);
  };

  const redirectToMain = () => {
    history.push("/");
  };

  return (
    <form className="Login" onSubmit={onLogin}>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={onInputChange}
        validator={validator.isEmail}
        label="EMAIL"
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={onInputChange}
        validator={validator.isPassword}
        label="PASSWORD"
      />
      <sub className="Login__forgot-password">Forgot Password?</sub>
      <div className="CheckBoxWrapper">
        <Checkbox
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={onCheckboxChange}
          label="Remember me?"
        />
      </div>
      <Button large={true} label="Login" onClick={onLogin} />
      <span className="Login__no-account" onClick={changeView}>
        I don't have an account
      </span>
    </form>
  );
};

export default Login;
