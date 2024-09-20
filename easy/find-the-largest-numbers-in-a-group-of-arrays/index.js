function findLargestNums(arr) {
  return arr.map((subArray) => Math.max(...subArray));
}

export default findLargestNums;
