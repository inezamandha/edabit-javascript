/**
 *
 * @param {number} number
 * @returns {number[]}
 */

function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

export default printArray;
