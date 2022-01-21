/* eslint-disable max-len */
const sumArray = require('sum-any-array');
const identity = require('arrow-identity');
const getMaxIndex = require('./get-max-index');

const roundDiscreteDistribution = (originalDistribution, finalDistributionSize, parseDistributionFnc = identity) => {
  const originalDistributionSize = sumArray(originalDistribution, parseDistributionFnc);
  const normalDistribution = [];
  const decimalDistribution = [];
  const integerDistribution = [];
  const groupDecimals = [];
  let nonAssignedCount = finalDistributionSize;

  originalDistribution.forEach((group) => {
    const groupProportion = parseDistributionFnc(group) / originalDistributionSize;
    const groupNumber = finalDistributionSize * groupProportion;
    const integerProportion = Math.trunc(groupNumber);
    const decimalProportion = groupNumber - integerProportion;
    nonAssignedCount -= integerProportion;
    integerDistribution.push(integerProportion);
    groupDecimals.push(decimalProportion);
    decimalDistribution.push(groupNumber);
    normalDistribution.push(groupProportion);
  });

  while (nonAssignedCount > 0) {
    const index = getMaxIndex(groupDecimals);
    integerDistribution[index] += 1;
    groupDecimals[index] = -1;
    nonAssignedCount -= 1;
  }

  return {
    decimalDistribution,
    integerDistribution,
    normalDistribution,
    originalDistributionSize,
    finalDistributionSize,
  };
};

module.exports = roundDiscreteDistribution;
