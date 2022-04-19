const getNumberInRange = (min, max) => {
  const range = max - min;
  return min + range * Math.random();
};

export default getNumberInRange;
