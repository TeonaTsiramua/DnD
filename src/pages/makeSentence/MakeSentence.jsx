import { useState } from 'react';
import { Button, Sentence } from '../../components';
import { SButton, SContainer, SWrapper } from './styles';
import { categories } from './data';

const MakeSentence = () => {
  const [words, setWords] = useState(null);
  const [category, setCategory] = useState(null);
  const [start, setStart] = useState(false);
  const [sentence, setSentence] = useState(0);

  const handleStart = () => {
    if (words && category) {
      setStart(true);
    }
  };

  const handleNextSentence = () => {
    if (sentence < 4) {
      setSentence((prevStep) => prevStep + 1);
    } else {
      setStart(false);
      setSentence(0);
      setCategory(null);
      setWords(null);
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
            {categories.map((item) => (
              <Button
                key={item.id}
                item={item}
                onClick={() => setCategory(item)}
                selected={category?.id === item.id}>
                {item.name}
              </Button>
            ))}
          </SWrapper>

          <SButton disabled={!words || !category} onClick={handleStart}>
            Start
          </SButton>
        </>
      )}
      {start && words && category && (
        <Sentence
          words={words}
          data={category.data[sentence]}
          handleNextSentence={handleNextSentence}
        />
      )}
    </SContainer>
  );
};

export default MakeSentence;
