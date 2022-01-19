/* eslint-disable max-len */
import identity from './identity';
import sumArray from './sum-array';
import getMaxIndex from './get-max-index';

const roundDiscretePopulation = (originalDistribution, finalPopulation, parseDistributionFnc = identity) => {
  const population = sumArray(originalDistribution, parseDistributionFnc);
  const normalDistribution = [];
  const decimalDistribution = [];
  const integerDistribution = [];
  const groupDecimals = [];
  let nonAssignedCount = finalPopulation;

  originalDistribution.forEach((group) => {
    const groupProportion = parseDistributionFnc(group) / population;
    const groupNumber = finalPopulation * groupProportion;
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
    finalPopulation,
  };
};

export default roundDiscretePopulation;
