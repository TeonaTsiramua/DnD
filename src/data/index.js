let uniqueIdCounter = 1;

const id = () => uniqueIdCounter++;

export const sign = [
  { id: id(), word: 'ი' },
  { id: id(), word: 'ს' },
  { id: id(), word: 'მა' },
  { id: id(), word: 'ის' },
  { id: id(), word: 'ით' },
  { id: id(), word: 'ად' },
  { id: id(), word: 'ო' },
];

export const adpositions = [
  { id: id(), word: 'ვით' },
  { id: id(), word: 'თან' },
  { id: id(), word: 'ზე' },
  { id: id(), word: 'ში' },
  { id: id(), word: 'თვის' },
  { id: id(), word: 'გან' },
  { id: id(), word: 'კენ' },
  { id: id(), word: 'ებრ' },
  { id: id(), word: 'თანავე' },
  { id: id(), word: 'გამო' },
  { id: id(), word: 'მიერ' },
  { id: id(), word: 'ურთ' },
  { id: id(), word: 'მდე' },
];

export const noun = [
  { id: id(), label: '🍌', word: 'ბანან' },
  { id: id(), label: '🐒', word: 'მაიმუნ' },
  { id: id(), label: '🚗', word: 'მანქანა' },
  { id: id(), label: '🏠', word: 'სახლ' },
  { id: id(), label: '👨‍⚕️', word: 'ექიმ' },
  { id: id(), label: '🌺', word: 'ყვავილ' },
  { id: id(), label: '🍓', word: 'მარწყვ' },
  { id: id(), label: '🍎', word: 'ვაშლ' },
  { id: id(), label: '🍒', word: 'ალუბალ' },
  { id: id(), label: '🍧', word: 'ნაყინ' },
  { id: id(), label: '🏝️', word: 'კუნძულ' },
  { id: id(), label: '⛵', word: 'ნავ' },
  { id: id(), label: '🚢', word: 'გემ' },
  { id: id(), label: '🐬', word: 'დელფინ' },
  { id: id(), label: '🐟', word: 'თევზ' },
  { id: id(), label: '🐳', word: 'ვეშაპ' },
  { id: id(), label: '🐸', word: 'ბაყაყ' },
];

export const verb = [
  { id: id(), word: 'ჭამს' },
  { id: id(), word: 'სვამს' },
  { id: id(), word: 'მართავს' },
  { id: id(), word: 'რწყავს' },
  { id: id(), word: 'უვლის' },
  { id: id(), word: 'უვარს' },
  { id: id(), word: 'ეძახის' },
  { id: id(), word: 'ზრუნავს' },
  { id: id(), word: 'იცვამს' },
  { id: id(), word: 'მიაქვს' },
  { id: id(), word: 'მიჰყავს' },
  { id: id(), word: 'თლის' },
  { id: id(), word: 'ჭრის' },
  { id: id(), word: 'უყურებს' },
];
