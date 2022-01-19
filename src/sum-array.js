import identity from './identity';

const sumArray = (elements, parseItem = identity) => elements.reduce((prev, el) => {
  const currentValue = parseItem(el);
  return prev + currentValue;
}, 0);

export default sumArray;
