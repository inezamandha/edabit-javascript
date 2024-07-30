function sortNumsAscending(arr) {
  return arr?.length > 0 ? arr.sort((a, b) => a - b) : [];
}

export default sortNumsAscending;
