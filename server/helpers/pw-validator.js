/**
 * Validates the password and returns message if invalid
 *
 * @param {String} password
 * @returns {String}
 */
module.exports = password => {
  let message = "";
  if (password.length < 6)
    return (message =
      "Password must have at least 6 character, one uppercase letter, one lowercase letter, one number");
  if (password.length > 25)
    return (message =
      "Password must have at least 6 character, one uppercase letter, one lowercase letter, one number");
  if (!/[A-Z]/.test(password))
    return (message =
      "Password must have at least 6 character, one uppercase letter, one lowercase letter, one number");
  if (!/[a-z]/.test(password))
    return (message =
      "Password must have at least 6 character, one uppercase letter, one lowercase letter, one number");
  if (!/\d/.test(password))
    return (message =
      "Password must have at least 6 character, one uppercase letter, one lowercase letter, one number");

  return message;
};
