import Chance from "chance";

export const generateRandomEmail = (baseUsername) => {
  const chance = new Chance();
  const today = new Date();
  const day = today.getDate();
  const milisec = today.getMilliseconds();
  // apparently months are numbered 0-11
  const month = today.getMonth() + 1;

  // convert to doubledigit if not already so the result looks better
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  const randomString: string = chance
    .string({ length: 6, pool: "abcdefghijklmnopqrstuvwxyz" })
    .toString();

  // construct suffix for our email
  const suffix = formattedDay + formattedMonth + milisec;

  // this will be our complete email;
  // i'm taking advantage of the fact email doesn't have to be valid, therefore putting another layer of rng in there cause why not
  const result = baseUsername + "+" + suffix + "@" + randomString + ".cz";

  return result;
};
