function matchLastItem(arr) {
  return arr.slice(0, -1).join('') === arr[arr.length - 1];
}

export default matchLastItem;
