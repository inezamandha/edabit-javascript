function wormLength(worm) {
  if (worm.split('').every((item) => item === '-') && !!worm.length) {
    return `${worm.length * 10} mm.`;
  }

  return 'invalid';
}

export default wormLength;
