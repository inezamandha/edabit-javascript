function emotify(str) {
  const listOfWordToEmoticon = [
    {
      word: 'smile',
      emoticon: ':D',
    },
    { word: 'grin', emoticon: ':)' },
    { word: 'sad', emoticon: ':(' },
    { word: 'mad', emoticon: ':P' },
  ];

  const findEmoticon = listOfWordToEmoticon.find(
    (wordToEmoticon) => wordToEmoticon.word === str.split('Make me ')[1]
  ).emoticon;

  return `Make me ${findEmoticon}`;
}

export default emotify;
