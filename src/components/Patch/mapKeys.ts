export const mapKeys = (obj: any, prefix = "") => {
  let arr = [];
  for (const key in obj) {
    arr.push(key);
  }

  return arr;
};
