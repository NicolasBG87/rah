import React, { useState, useContext } from "react";
import ReactTooltip from "react-tooltip";

import Input from "app/components/Input";
import Checkbox from "app/components/Checkbox";
import Button from "app/components/Button";
import PasswordReset from "app/components/PasswordReset";

import { AuthContext } from "app/util/auth";
import { ModalContext } from "app/components/Modal";
import * as validator from "app/util/validator";

const initialFormData = {
  email: "",
  password: "",
  rememberMe: false
};

const Login = ({ history, changeView }) => {
  const [formData, setFormData] = useState(initialFormData);
  const { login } = useContext(AuthContext);
  const { useModal, closeModal } = useContext(ModalContext);

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

  const onPasswordReset = () => {
    const modalConfig = {
      title: "Reset Password",
      body: <PasswordReset closeModal={closeModal} />
    };
    useModal(modalConfig);
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
      <div className="Login__forgot-password">
        <sub onClick={onPasswordReset}>Forgot Password?</sub>
      </div>
      <div className="CheckBoxWrapper" data-tip data-for="RememberMe">
        <ReactTooltip
          className="extraClass"
          id="RememberMe"
          type="dark"
          effect="solid"
        >
          <span>You will remain logged in until you manually logout.</span>
        </ReactTooltip>
        <Checkbox
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={onCheckboxChange}
          label="Remember me?"
        />
      </div>
      <br />
      <Button large={true} label="Login" onClick={onLogin} />
      <span className="Login__no-account" onClick={changeView}>
        I don't have an account
      </span>
    </form>
  );
};

export default Login;
