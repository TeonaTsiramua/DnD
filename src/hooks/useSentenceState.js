import { useState, useEffect, useCallback } from 'react';
import { getWords } from '../utils/sentence';
import useWordDrag from './useWordDrag';

export const useSentenceState = (words, sentence, getSteps) => {
  const [step, setStep] = useState(0);
  const [selectedWords, setSelectedWords] = useState(sentence);
  const [highlightedBox, setHighlightedBox] = useState(null);
  const [currentWords, setCurrentWords] = useState([]);
  const [fadedWords, setFadedWords] = useState([]);

  const getCurrentWords = useCallback(() => {
    const selectedWordsLength = Object.keys(selectedWords).length;

    return getWords(step, words, selectedWordsLength);
  }, [step, words, selectedWords]);

  useEffect(() => {
    const newCurrentWords = getCurrentWords();
    setCurrentWords(newCurrentWords);

    const newFadedWords = newCurrentWords.filter((item) =>
      Object.values(selectedWords).some(
        (selectedItem) => selectedItem && selectedItem.word === item.word
      )
    );
    setFadedWords(newFadedWords);
  }, [selectedWords, step, getCurrentWords]);

  const handleSelect = (item, boxType) => {
    setSelectedWords((prevSelectedWords) => ({
      ...prevSelectedWords,
      [boxType]: item,
    }));
    setStep((prevStep) => prevStep + 1);
  };

  const { refs, handleDragStart, handleDragEnd } = useWordDrag({
    step,
    handleSelect,
    setHighlightedBox,
    getSteps,
  });

  const clearSelectedWords = () => {
    setSelectedWords(sentence);
    setStep(0);
    setHighlightedBox(null);
    setFadedWords([]);
  };
  const goBack = () => {
    if (step === 0) {
      clearSelectedWords();
      return;
    }

    setStep((prevStep) => prevStep - 1);
    setHighlightedBox(null);

    setSelectedWords((prevSelectedWords) => {
      const newSelectedWords = { ...prevSelectedWords };

      const keys = Object.keys(newSelectedWords);
      const lastKey = keys[step - 1];

      newSelectedWords[lastKey] = null;

      return newSelectedWords;
    });

    setFadedWords(() => {
      const newFadedWords = currentWords.filter((item) =>
        Object.values(selectedWords).some(
          (selectedItem) => selectedItem && selectedItem.word === item.word
        )
      );
      return newFadedWords;
    });
  };

  return {
    selectedWords,
    fadedWords,
    highlightedBox,
    currentWords,
    refs,
    handleDragStart,
    handleDragEnd,
    clearSelectedWords,
    goBack,
  };
};
