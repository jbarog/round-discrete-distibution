const getMaxIndex = (array) => {
  const maxValue = Math.max.apply(null, array);
  const maxIndex = array.indexOf(maxValue);
  return maxIndex;
};

export default getMaxIndex;
