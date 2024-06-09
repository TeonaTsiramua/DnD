import { useEffect } from 'react';

const useShuffleArray = (array, shuffledArray, setShuffledArray) => {
  useEffect(() => {
    const shuffle = () => {
      const shuffled = array.slice().sort(() => Math.random() - 0.5);
      if (JSON.stringify(shuffled) === JSON.stringify(array)) {
        shuffle(); // If shuffled array is equal to initial array, shuffle again
      } else {
        setShuffledArray(shuffled);
      }
    };
    shuffle();
  }, [array, setShuffledArray]);

  return shuffledArray;
};

export default useShuffleArray;
