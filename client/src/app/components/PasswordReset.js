import React, { useState, useContext } from "react";

import Input from "app/components/Input";
import Select from "app/components/Select";

import * as validator from "app/util/validator";
import { AuthContext } from "app/util/auth";

const initialFormData = {
  email: "",
  new_password: "",
  new_passwordConfirm: "",
  secret_question: "default",
  secret_answer: ""
};

const PasswordReset = ({ closeModal }) => {
  const [formData, setFormData] = useState(initialFormData);
  const { resetPassword } = useContext(AuthContext);

  const onInputChange = e => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onPasswordReset = e => {
    e.preventDefault();
    resetPassword(formData).then(response => closeModal());
  };

  return (
    <form className="Login" onSubmit={onPasswordReset}>
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
        name="new_password"
        value={formData.new_password}
        onChange={onInputChange}
        validator={validator.isPassword}
        label="NEW PASSWORD"
      />
      <Input
        type="password"
        name="new_passwordConfirm"
        value={formData.new_passwordConfirm}
        onChange={onInputChange}
        validator={validator.isPassword}
        label="NEW PASSWORD CONFIRM"
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
      <div className="Actions">
        <button type="submit" onClick={onPasswordReset}>
          SUBMIT
        </button>
      </div>
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

export default PasswordReset;
