import { useSentenceState } from '../../hooks/useSentenceState';
import {
  fourWordSentence,
  get5Steps,
  get7Steps,
  threeWordSentence,
} from '../../pages/makeSentence/data';

import {
  SBox,
  SContainer,
  SFadedWord,
  SFadedWrapper,
  SWord,
  SWrapper,
} from './styles';

const Sentence = ({ words }) => {
  const {
    selectedWords,
    fadedWords,
    highlightedBox,
    currentWords,
    refs,
    handleDragStart,
    handleDragEnd,
  } = useSentenceState(
    words === 3 ? threeWordSentence : fourWordSentence,
    words === 3 ? get5Steps : get7Steps
  );

  return (
    <SContainer>
      <SWrapper>
        <SFadedWrapper>
          {currentWords.map((item) => (
            <SFadedWord key={item.id}>{item.label || item.word}</SFadedWord>
          ))}
        </SFadedWrapper>
        {currentWords.map((item) => (
          <SWord
            drag={!fadedWords.includes(item)}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={() => handleDragStart(item)}
            onDragEnd={(event, info) => handleDragEnd(event, info, item)}
            whileHover={
              !fadedWords.includes(item) && { scale: 1.1, cursor: 'grab' }
            }
            whileDrag={{ scale: 1.2, cursor: 'grabbing', zIndex: 10 }}
            key={item.word}
            $faded={fadedWords.includes(item)}
          >
            {item.label || item.word}
          </SWord>
        ))}
      </SWrapper>
      <SWrapper>
        {selectedWords &&
          Object.entries(selectedWords).map(([boxType, selectedItem]) => (
            <SBox
              key={boxType}
              ref={refs[boxType]}
              $highlighted={highlightedBox === boxType}
            >
              {selectedItem && (
                <SWord>{selectedItem.label || selectedItem.word}</SWord>
              )}
            </SBox>
          ))}
      </SWrapper>
      {selectedWords.verb && (
        <p>
          {selectedWords.noun1.word}
          {selectedWords.sign1 &&
            selectedWords.sign1.word !== '-' &&
            selectedWords.sign1.word}{' '}
          {selectedWords.noun2.word}
          {selectedWords.sign2 &&
            selectedWords.sign2.word !== '-' &&
            selectedWords.sign2.word}{' '}
          {selectedWords.noun3 && selectedWords.noun3.word}{' '}
          {selectedWords.sign3 &&
            selectedWords.sign3.word !== '-' &&
            selectedWords.sign3.word}{' '}
          {selectedWords.verb.word}
        </p>
      )}
    </SContainer>
  );
};

export default Sentence;
