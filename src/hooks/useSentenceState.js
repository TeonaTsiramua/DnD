import { useState, useEffect, useCallback } from 'react';
import { words } from '../pages/makeSentence/data';
import useWordDrag from './useWordDrag';

export const useSentenceState = (sentence, getSteps) => {
  const [step, setStep] = useState(0);
  const [selectedWords, setSelectedWords] = useState(sentence);
  const [highlightedBox, setHighlightedBox] = useState(null);
  const [currentWords, setCurrentWords] = useState([]);
  const [fadedWords, setFadedWords] = useState([]);

  const getCurrentWords = useCallback(() => {
    const selectedWordsLength = Object.keys(selectedWords).length;

    if (step === selectedWordsLength) {
      return [];
    } else if (step === selectedWordsLength - 1) {
      return words.flatMap((word) => word.verb);
    } else if (step % 2 === 0) {
      return words.flatMap((word) => word.noun);
    } else if (step % 2 === 1) {
      return words.flatMap((word) => word.sign);
    } else {
      return [];
    }
  }, [step, selectedWords]);

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

  return {
    selectedWords,
    fadedWords,
    highlightedBox,
    currentWords,
    refs,
    handleDragStart,
    handleDragEnd,
  };
};
