// ?? A function that will randomly make an Id in eth address format that will be shortened
export const makeId = (length) => {
  // create an empty string variable that will be modified later with let
  let result = '';

  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  // This loops over the index until we reach the length, The number sent/passed as function parameter
  for (let i = 0; i < length; i += 1) {
    // Append a random letter or character to our result array
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
