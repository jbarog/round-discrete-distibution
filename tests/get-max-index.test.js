/* eslint-disable no-undef */
const { DEFAULT_PLAIN_DISTRIBUTION } = require('./test-objects');
const getMaxIndex = require('../src/get-max-index');

describe('test getMaxIndex', () => {
  test('should return max on plain array', async () => {
    const result = getMaxIndex(DEFAULT_PLAIN_DISTRIBUTION);
    expect(result).toEqual(1);
  });
});
