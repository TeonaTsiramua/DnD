import { useState } from 'react';
import { Button, Sentence } from '../../components';
import { SButton, SContainer, SWrapper } from './styles';
import { wordsData } from '../../data';

const MakeSentence = () => {
  const [words, setWords] = useState(null);
  const [category, setCategory] = useState(null);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    if (words && category) {
      setStart(true);
    }
  };

  return (
    <SContainer>
      <h1>Make Sentence</h1>
      {!start && (
        <>
          <h2>Select number of words</h2>
          <SWrapper>
            <Button onClick={() => setWords(3)} selected={words === 3}>
              3 words
            </Button>
            <Button onClick={() => setWords(4)} selected={words === 4}>
              4 words
            </Button>
          </SWrapper>
          <h2>Select category</h2>
          <SWrapper>
            <Button
              onClick={() => setCategory(wordsData)}
              selected={category === wordsData}
            >
              Words
            </Button>
          </SWrapper>
          <SButton disabled={!words || !category} onClick={handleStart}>
            Start
          </SButton>
        </>
      )}
      {start && words && category && (
        <Sentence words={words} category={category} />
      )}
    </SContainer>
  );
};

export default MakeSentence;
