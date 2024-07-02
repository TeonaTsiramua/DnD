import { useSentenceState } from '../../hooks/useSentenceState';
import {
  fourWordSentence,
  get5Steps,
  get7Steps,
  threeWordSentence,
} from '../../utils/sentence';
import Result from './Result';

import {
  SBox,
  SButton,
  SContainer,
  SFadedWord,
  SFadedWrapper,
  SWord,
  SWrapper,
} from './styles';

const Sentence = ({ words, data, handleNextSentence }) => {
  const {
    step,
    setStep,
    selectedWords,
    fadedWords,
    highlightedBox,
    currentWords,
    refs,
    handleDragStart,
    handleDragEnd,
    clearSelectedWords,
    goBack,
  } = useSentenceState(
    data,
    words === 3 ? threeWordSentence : fourWordSentence,
    words === 3 ? get5Steps : get7Steps
  );

  const hanleReset = () => {
    clearSelectedWords();
  };

  const handleGoBack = () => {
    goBack();
  };

  const dragProps = (item) =>
    (words === 3 ? step < 5 : step < 6) &&
    !fadedWords.includes(item) && {
      drag: true,
      dragConstraints: { top: 0, bottom: 0, left: 0, right: 0 },
      dragElastic: 1,
      onDragStart: () => handleDragStart(item),
      onDragEnd: (event, info) => handleDragEnd(event, info, item),
      whileHover: {
        scale: 1.1,
        cursor: 'url(/assets/hand2.png), grab',
      },
      whileDrag: {
        scale: 1.2,
        boxShadow: '0 0 10px yellow',
        cursor: 'url(/assets/grab2.png), grabbing',
        zIndex: 10,
      },
    };

  return (
    <SContainer>
      <button onClick={() => setStep(0)}>არსებითი სახელი</button>
      <button onClick={() => setStep(1)}>ბრუნვის ნიშნები</button>
      <button onClick={() => setStep(4)}>ზმნა</button>

      {step === 0 && <p>არსებითი სახელი</p>}
      {step === 1 && <p>ბრუნვის ნიშნები</p>}
      {step === 2 && <p>არსებითი სახელი</p>}
      {step === 3 && <p>თანდებულები</p>}
      {step === 4 && <p>არსებითი სახელი</p>}
      {step > 4 && <p>ზმნა</p>}

      <SWrapper>
        <SFadedWrapper>
          {currentWords.map((item) => (
            <SFadedWord $label={item.label} key={item.id}>
              {item.label || item.word}
            </SFadedWord>
          ))}
        </SFadedWrapper>

        {currentWords.map((item) => (
          <SWord
            {...dragProps(item)}
            key={item.id}
            $faded={fadedWords.includes(item)}
            $label={item.label}>
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
              $highlighted={highlightedBox === boxType}>
              {selectedItem && (
                <SWord $label={selectedItem.label}>
                  {selectedItem.label || selectedItem.word}
                </SWord>
              )}
            </SBox>
          ))}
      </SWrapper>

      <SWrapper>
        <SButton
          disabled={!selectedWords.noun1}
          onClick={hanleReset}
          data-tooltip="Reset">
          🔄
        </SButton>
        <SButton
          disabled={!selectedWords.noun1}
          onClick={handleGoBack}
          data-tooltip="Go Back">
          ⬅️
        </SButton>
      </SWrapper>

      <Result selectedWords={selectedWords} />

      <button
        disabled={!selectedWords.verb}
        onClick={() => {
          handleNextSentence();
          hanleReset();
        }}>
        შემდეგი
      </button>
    </SContainer>
  );
};

export default Sentence;
