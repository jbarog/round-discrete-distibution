/* eslint-disable no-undef */
import { DEFAULT_PLAIN_DISTRIBUTION } from './test-objects';
import getMaxIndex from '../src/get-max-index';

describe('test getMaxIndex', () => {
  test('should return max on plain array', async () => {
    const result = getMaxIndex(DEFAULT_PLAIN_DISTRIBUTION);
    expect(result).toEqual(1);
  });
});
