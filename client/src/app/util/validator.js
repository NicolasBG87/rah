export const isEmail = value => {
  return value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
};

export const isName = value => {
  return value.length > 2 && value.match(/^[a-zA-Z]+$/);
};

export const isPassword = value => {
  return (
    value.length > 6 &&
    value.length < 25 &&
    /[A-Z]/.test(value) &&
    /[a-z]/.test(value) &&
    /\d/.test(value)
  );
};

export const isPasswordConfirm = (value1, value2) => {
  return isEqual(value1, value2);
};

export const isSecretAnswer = value => {
  return value.length > 2;
};

export const isEqual = (value1, value2) => {
  return value1 === value2;
};
