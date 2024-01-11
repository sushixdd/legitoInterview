// stores testdata such as strings

export const shortPassword = "123456";
export const usedEmail = "used@email.cz";

export const errorMessageList = {
  allEmpty: [
    "User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., email: Email is invalid, password: Path `password` is required.",
  ],
  firstNameEmpty: [
    "User validation failed: firstName: Path `firstName` is required.",
  ],
  lastNameEmpty: [
    "User validation failed: lastName: Path `lastName` is required.",
  ],
  emailEmpty: ["User validation failed: email: Email is invalid"],
  emailUsed: ["Email address is already in use"],
  passwordEmpty: [
    "User validation failed: password: Path `password` is required.",
  ],
  passwordShort: [
    `User validation failed: password: Path \`password\` (\`${shortPassword}\`) is shorter than the minimum allowed length (7).`,
  ],
};
