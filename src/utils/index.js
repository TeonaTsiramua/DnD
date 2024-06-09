export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const checkOrder = (shuffledItems) => {
  for (let i = 0; i < shuffledItems.length - 1; i++) {
    if (shuffledItems[i] > shuffledItems[i + 1]) {
      return false;
    }
  }
  return true;
};

export const handleMatch = (icons, setMatched, iconId, word) => {
  const icon = icons.find((i) => i.id === iconId);
  if (icon && icon.word === word) {
    setMatched((prev) => ({ ...prev, [iconId]: true }));
  }
};

export const restartGame = () => {
  window.location.reload();
};
