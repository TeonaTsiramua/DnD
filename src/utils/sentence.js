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
  switch (step) {
    case stepsLength:
      return [];
    case stepsLength - 1:
      return words.flatMap((word) => word.verb);
    case 0:
    case 2:
    case 4:
      return words.flatMap((word) => word.noun);
    case 1:
    case 5:
      return words.flatMap((word) => word.sign);
    case 3:
      return stepsLength === 5
        ? words.flatMap((word) => word.sign)
        : words.flatMap((word) => word.sign2);
    default:
      return [];
  }
};
