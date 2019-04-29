export const isEmail = value => {
  return value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
};

export const isName = value => {
  return value.length > 2 && value.match(/^[a-zA-Z]+$/);
};

export const isPassword = value => {
  return value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/);
};

export const isPasswordConfirm = (value1, value2) => {
  return (
    value1.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/) &&
    isEqual(value1, value2)
  );
};

export const isSecretAnswer = value => {
  return value.length > 2;
};

export const isEqual = (value1, value2) => {
  return value1 === value2;
};
