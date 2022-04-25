export const getNumberInRange = (min, max) => {
  const range = max - min;
  return min + range * Math.random();
};

export const checkObjectForTrue = (object) => {
  const keys = Object.keys(object);
  let toReturn = false;
  keys.forEach((key) => {
    if (object[key]) {
      toReturn = true;
    }
  });
  return toReturn;
};
