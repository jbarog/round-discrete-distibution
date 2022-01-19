/* eslint-disable max-len */
/* eslint-disable no-undef */
import {
  DEFAULT_PLAIN_DISTRIBUTION,
  DEFAULT_OBJECT_DISTRIBUTION,
  EXPECTED_NORMAL_DISTRIBUTION,
  EXPECTED_DECIMAL_DISTRIBUTION,
  EXPECTED_INTEGER_DISTRIBUTION,
  defaultObjectParser,
} from './test-objects';

import roundDiscretePopulation from '../src/round-discrete-population';

const checkResult = (results, finalPopulation, [decDist, intDist, normDist]) => {
  expect(results.finalPopulation).toEqual(finalPopulation);
  expect(results.decimalDistribution).toEqual(decDist);
  expect(results.integerDistribution).toEqual(intDist);
  expect(results.normalDistribution).toEqual(normDist);
};

describe('test roundDiscretePopulation', () => {
  test('should round plain number distribution on same event', async () => {
    const results = roundDiscretePopulation(DEFAULT_PLAIN_DISTRIBUTION, 10);
    checkResult(results, 10, [
      EXPECTED_DECIMAL_DISTRIBUTION,
      EXPECTED_INTEGER_DISTRIBUTION,
      EXPECTED_NORMAL_DISTRIBUTION,
    ]);
  });
  test('should round plain number distribution on change events', async () => {
    const results = roundDiscretePopulation(DEFAULT_PLAIN_DISTRIBUTION, 20);
    const doubleDefaultValues = (a) => a.map((x) => 2 * x);
    checkResult(results, 20, [
      doubleDefaultValues(EXPECTED_DECIMAL_DISTRIBUTION),
      doubleDefaultValues(EXPECTED_INTEGER_DISTRIBUTION),
      EXPECTED_NORMAL_DISTRIBUTION,
    ]);
  });
  test('should round object distribution', async () => {
    const results = roundDiscretePopulation(DEFAULT_OBJECT_DISTRIBUTION, 10, defaultObjectParser);
    checkResult(results, 10, [
      EXPECTED_DECIMAL_DISTRIBUTION,
      EXPECTED_INTEGER_DISTRIBUTION,
      EXPECTED_NORMAL_DISTRIBUTION,
    ]);
  });
});
