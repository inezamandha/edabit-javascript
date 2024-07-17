function findIndex(arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return i;
    }
  }
}

export default findIndex;
