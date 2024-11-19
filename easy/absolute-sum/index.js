/**
 *
 * @param {number[]} arr
 * @returns {number}
 */

function getAbsSum(arr) {
  return arr
    .map((number) => Math.abs(number))
    .reduce((partialSum, a) => partialSum + a, 0);
}

export default getAbsSum;
