function tidyLink(url, name, hoverText) {
  return `[${name}](${url}${hoverText ? ` "${hoverText}")` : `)`}`;
}

export default tidyLink;
