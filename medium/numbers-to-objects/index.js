/**
 *
 * @param {number[]} arr
 * @returns {object[]}
 */

function numObj(arr) {
  let arrayOfNumberObjects = [];

  for (let i = 0; i < arr.length; i++) {
    let numberObjects = {};
    numberObjects[arr[i].toString()] = String.fromCharCode(arr[i]);

    arrayOfNumberObjects.push(numberObjects);
  }

  return arrayOfNumberObjects;
}

export default numObj;
