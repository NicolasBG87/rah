import React, { useState, useContext } from "react";

import Input from "app/components/Input";
import Checkbox from "app/components/Checkbox";
import Button from "app/components/Button";
import Select from "app/components/Select";
import { ToastContext } from "app/components/Toast";
import { APIContext } from "config/api";

// import api from "config/api";
import * as validator from "app/util/validator";

const initialFormData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirm: "",
  secret_question: "default",
  secret_answer: "",
  agreement: false
};

const Register = ({ changeView }) => {
  const [formData, setFormData] = useState(initialFormData);
  const { useToast } = useContext(ToastContext);
  const { createUser } = useContext(APIContext);

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
      agreement: !formData.agreement
    });
  };

  const onRegister = e => {
    e.preventDefault();
    const passwordsMatch = validator.isEqual(
      formData.password,
      formData.password_confirm
    );
    const agreed = formData.agreement;

    if (!agreed) {
      return useToast({
        message: "You have to agree to our terms and condiditions"
      });
    }

    if (!passwordsMatch) {
      setFormData({
        ...formData,
        password: "",
        password_confirm: ""
      });
      return useToast({ message: "Passwords do not match!" });
    }

    createUser(formData);
  };

  return (
    <form className="Register" onSubmit={onRegister}>
      <Input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={onInputChange}
        validator={validator.isName}
        label="FIRST NAME"
      />
      <Input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={onInputChange}
        validator={validator.isName}
        label="LAST NAME"
      />
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
      <Input
        type="password"
        name="password_confirm"
        value={formData.password_confirm}
        onChange={onInputChange}
        validator={validator.isPassword}
        label="CONFIRM PASSWORD"
      />
      <div className="FormGroup">
        <Select
          name="secret_question"
          value={formData.secret_question}
          onChange={onInputChange}
          options={options}
        />
        <Input
          type="text"
          name="secret_answer"
          value={formData.secret_answer}
          onChange={onInputChange}
          validator={validator.isSecretAnswer}
        />
      </div>
      <div className="CheckBoxWrapper">
        <Checkbox
          name="agreement"
          checked={formData.agreement}
          onChange={onCheckboxChange}
          label="Agree to terms and conditions?"
        />
      </div>
      <br />
      <Button large={true} label="Register" onClick={onRegister} />
      <span className="Register__no-account" onClick={changeView}>
        I already have an account
      </span>
    </form>
  );
};

const options = [
  "Mother's middle name",
  "Street you've grown in",
  "Elementary school",
  "First car",
  "Second pet's name"
];

export default Register;
