export const refKeys = [
  'noun1',
  'sign1',
  'noun2',
  'sign2',
  'noun3',
  'sign3',
  'verb',
];

const createSentence = (keys, omitIndices) => {
  return keys
    .filter((_, index) => !omitIndices.includes(index))
    .reduce((acc, key) => {
      acc[key] = null;
      return acc;
    }, {});
};

export const threeWordSentence = createSentence(refKeys, [4, 5]);
export const fourWordSentence = createSentence(refKeys, []);

export const getSteps = (step, count) => {
  return step < count - 1 ? refKeys[step] : 'verb';
};

export const get5Steps = (step) => getSteps(step, 5);
export const get7Steps = (step) => getSteps(step, 7);

export const getWords = (step, words, stepsLength) => {
  const noun = words.flatMap((word) => word.noun);
  const sign = words.flatMap((word) => word.sign);
  const verb = words.flatMap((word) => word.verb);
  const adpositions = words.flatMap((word) => word.adpositions);

  switch (step) {
    case stepsLength:
      return verb;
    case stepsLength - 1:
      return verb;
    case 0:
    case 2:
    case 4:
      return noun;
    case 1:
    case 5:
      return sign;
    case 3:
      return stepsLength === 5 ? sign : adpositions;
    default:
      return verb;
  }
};

export const generateWords = (array, word1, word2) => {
  function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
  }

  const filteredWord = array.filter(
    (item) => item.word !== word1 && item.word !== word2
  );

  const selectedWords = array.filter(
    (item) => item.word === word1 || item.word === word2
  );

  const shuffled = shuffleArray(filteredWord);
  const randomItems = shuffled.slice(0, 5);

  const words = shuffleArray([...selectedWords, ...randomItems]);

  return words;
};
