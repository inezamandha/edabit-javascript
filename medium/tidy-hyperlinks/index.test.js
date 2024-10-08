import tidyLink from './index';

describe('Javascript - Medium - 16', () => {
  test('Tidy Hyperlinks', () => {
    expect(
      tidyLink(
        'https://edabit.com/challenges',
        'Challenges',
        'Go to the challenges!'
      )
    ).toBe(
      '[Challenges](https://edabit.com/challenges "Go to the challenges!")'
    );
    expect(tidyLink('https://www.google.com', 'Google', 'Google Search')).toBe(
      '[Google](https://www.google.com "Google Search")'
    );
    expect(
      tidyLink('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Click Me!')
    ).toBe('[Click Me!](https://www.youtube.com/watch?v=dQw4w9WgXcQ)');
    expect(
      tidyLink(
        'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet',
        'Markdown Cheatsheet'
      )
    ).toBe(
      '[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)'
    );
    expect(
      tidyLink('https://www.python.org/', 'Python', 'Visit the Python Website!')
    ).toBe('[Python](https://www.python.org/ "Visit the Python Website!")');
    expect(
      tidyLink(
        'https://www.youtube.com/watch?v=O2yPnnDfqpw',
        'i just did a bad thing'
      )
    ).toBe(
      '[i just did a bad thing](https://www.youtube.com/watch?v=O2yPnnDfqpw)'
    );
    expect(
      tidyLink('https://www.reddit.com/', 'Reddit', 'the front page of reddit')
    ).toBe('[Reddit](https://www.reddit.com/ "the front page of reddit")');
  });
});
