function detectBrowser(userAgent) {
  if (userAgent.includes('Firefox')) {
    return 'Mozilla Firefox';
  } else if (userAgent.includes('Chrome')) {
    return 'Google Chrome';
  }
  return 'Internet Explorer';
}

export default detectBrowser;
