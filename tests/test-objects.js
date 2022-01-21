const DEFAULT_NUMBER = 4.4;
const DEFAULT_PLAIN_DISTRIBUTION = [1.1, 4.1, 2.1, 3.1];
const DEFAULT_OBJECT_DISTRIBUTION = [
  { value: 1.1 },
  { value: 4.1 },
  { value: 2.1 },
  { value: 3.1 },
];

const EXPECTED_NORMAL_DISTRIBUTION = [
  0.1057692307692308,
  0.3942307692307693,
  0.20192307692307696,
  0.29807692307692313,
];
const EXPECTED_DECIMAL_DISTRIBUTION = [
  1.057692307692308,
  3.9423076923076925,
  2.0192307692307696,
  2.9807692307692313,
  // 2.115384615384616,
  // 7.884615384615385,
  // 4.038461538461539,
  // 5.961538461538463,
];
const EXPECTED_INTEGER_DISTRIBUTION = [
  1,
  4,
  2,
  3,
];

const defaultObjectParser = (x) => x.value;

module.exports = {
  DEFAULT_NUMBER,
  DEFAULT_PLAIN_DISTRIBUTION,
  DEFAULT_OBJECT_DISTRIBUTION,
  EXPECTED_NORMAL_DISTRIBUTION,
  EXPECTED_DECIMAL_DISTRIBUTION,
  EXPECTED_INTEGER_DISTRIBUTION,
  defaultObjectParser,
};
