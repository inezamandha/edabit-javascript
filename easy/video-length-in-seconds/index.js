function minutesToSeconds(time) {
  const minutes = Number(time.split(':')[0]);
  const seconds = Number(time.split(':')[1]);
  return seconds >= 60 ? false : minutes * 60 + seconds;
}

export default minutesToSeconds;
