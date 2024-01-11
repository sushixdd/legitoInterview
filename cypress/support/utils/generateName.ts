import Chance from "chance";

export const generateName = () => {
  const chance = new Chance();
  const randomName: string = chance.string({
    length: 6,
    pool: "abcdefghijklmnopqrstuvwxyz",
  });
  return randomName;
};
