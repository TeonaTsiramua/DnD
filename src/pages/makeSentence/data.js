export const words = [
  {
    noun: [
      { id: 1, label: '🍎', word: 'ვაშლ' },
      { id: 2, label: '🐶', word: 'ძაღლ' },
      { id: 3, label: '🚗', word: 'მანქანა' },
      { id: 4, label: '🌟', word: 'ვარსკვლავ' },
    ],
    verb: [
      { id: 1, word: 'ჭამს' },
      { id: 2, word: 'სვამს' },
      { id: 3, word: 'მართავს' },
      { id: 4, word: 'უყვარს' },
    ],
    sign: [
      { id: 1, word: 'ს' },
      { id: 2, word: 'ი' },
      { id: 3, word: '-' },
    ],
  },
];

export const threeWordSentence = {
  noun1: null,
  sign1: null,
  noun2: null,
  sign2: null,
  verb: null,
};

export const fourWordSentence = {
  noun1: null,
  sign1: null,
  noun2: null,
  sign2: null,
  noun3: null,
  sign3: null,
  verb: null,
};

export const get5Steps = (step) =>
  step === 0
    ? 'noun1'
    : step === 1
    ? 'sign1'
    : step === 2
    ? 'noun2'
    : step === 3
    ? 'sign2'
    : 'verb';

export const get7Steps = (step) =>
  step === 0
    ? 'noun1'
    : step === 1
    ? 'sign1'
    : step === 2
    ? 'noun2'
    : step === 3
    ? 'sign2'
    : step === 4
    ? 'noun3'
    : step === 5
    ? 'sign3'
    : 'verb';