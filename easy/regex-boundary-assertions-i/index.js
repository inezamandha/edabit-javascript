function isJS(path) {
  return path.match(/\.js$|\.jsx$/) ? true : false;
}

export default isJS;
