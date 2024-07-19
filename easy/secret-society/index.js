function societyName(friends) {
  return friends
    .sort()
    .map((friend) => friend.charAt(0).toUpperCase())
    .join('');
}

export default societyName;
