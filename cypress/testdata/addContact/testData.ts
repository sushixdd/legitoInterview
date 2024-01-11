// stores testdata such as strings
export const placeholder = {
  firstName: "First Name",
  lastName: "Last Name",
  dateOfBirth: "yyyy-MM-dd",
  email: "example@email.com",
  phone: "8005551234",
  address1: "Address 1",
  address2: "Address 2",
  city: "City",
  stateOrProvince: "State or Province",
  postalCode: "Postal Code",
  country: "Country",
};

export const buttonString = {
  cancel: "Cancel",
  submit: "Submit",
};

export const errorMessageList = {
  allEmpty:
    "Contact validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.",
  // when all fields that have conditional validation are invalid
  // there are at least 2 different errors for postal code (wrong and too long), but i'll just cover this one
  allFail:
    "Contact validation failed: birthdate: Birthdate is invalid, email: Email is invalid, phone: Phone number is invalid, postalCode: Path `postalCode` (`wrongPostal`) is longer than the maximum allowed length (10).",
};

export const mockDataFormFail = {
  firstName: "Samplefirstname",
  lastName: "Samplelastname",
  dateOfBirth: "randomText",
  email: "wrongEmail",
  phone: "wrongPhone",
  postalCode: "wrongPostal",
};
