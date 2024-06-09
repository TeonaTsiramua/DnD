import { useState } from 'react';
import { Button, Sentence } from '../../components';
import { SContainer, SWrapper } from './styles';

const MakeSentence = () => {
  const [words, setWords] = useState(null);
  return (
    <SContainer>
      <h1>Make Sentence</h1>
      <SWrapper>
        <Button onClick={() => setWords(3)}>3 words</Button>
        <Button onClick={() => setWords(4)}>4 words</Button>
      </SWrapper>
      {words === 3 && <Sentence words={3} />}
      {words === 4 && <Sentence words={4} />}
    </SContainer>
  );
};
export default MakeSentence;
