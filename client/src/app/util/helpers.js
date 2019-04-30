export const capitalize = value =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const formatHeader = value => {
  let removeNonAlpha = value.replace(/[\W_]+/g, " ");
  return removeNonAlpha
    .split(" ")
    .map(item => capitalize(item))
    .join(" ");
};
