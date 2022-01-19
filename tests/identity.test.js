/* eslint-disable no-undef */
import { DEFAULT_NUMBER } from './test-objects';
import identity from '../src/identity';

describe('test identity', () => {
  test('should return identity', async () => {
    const result = identity(DEFAULT_NUMBER);
    expect(result).toEqual(DEFAULT_NUMBER);
  });
});
