import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SMain,
  SDraggableIcon,
  SDropZone,
  SGameContainer,
  SIconsContainer,
  SWordCard,
  SWordsContainer,
  SWrapper,
} from './styles';

import { handleMatch, restartGame } from '../../utils';
import useShuffleArray from '../../hooks/useShuffleArray';
import { Button } from '../../components';

const icons = [
  { id: 1, label: '🍎', word: 'Apple' },
  { id: 2, label: '🐶', word: 'Dog' },
  { id: 3, label: '🚗', word: 'Car' },
  { id: 4, label: '🌟', word: 'Star' },
];

const words = ['Apple', 'Dog', 'Car', 'Star'];

const MatchGame = () => {
  const [matched, setMatched] = useState({});
  const [shuffledIcons, setShuffledIcons] = useState([]);
  const constraintsRef = useRef(null);

  useShuffleArray(icons, shuffledIcons, setShuffledIcons);

  return (
    <SMain>
      <h1>Match Game</h1>
      <p>
        Drag the icons to their corresponding words. Match all the icons
        correctly to win the game!
      </p>
      <SGameContainer ref={constraintsRef}>
        <SIconsContainer>
          {shuffledIcons.map((icon) => (
            <SDraggableIcon
              as={motion.div}
              key={icon.id}
              whileTap={{
                scale: 1.1,
                boxShadow: '5px 5px 10px rgba(0,0,0,0.3)',
              }}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              dragMomentum={false}
              onDragEnd={(event, info) => {
                const elements = document.elementsFromPoint(
                  info.point.x,
                  info.point.y
                );
                const wordElement = elements.find((el) => el.dataset.word);
                if (wordElement) {
                  handleMatch(
                    icons,
                    setMatched,
                    icon.id,
                    wordElement.dataset.word
                  );
                }
              }}
            >
              {icon.label}
            </SDraggableIcon>
          ))}
        </SIconsContainer>
        <SWordsContainer>
          {words.map((word) => (
            <SWrapper key={word}>
              <SDropZone data-word={word}></SDropZone>
              <SWordCard>{word}</SWordCard>
            </SWrapper>
          ))}
        </SWordsContainer>

        {Object.keys(matched).length === icons.length && (
          <SWrapper>
            <p>You matched all icons!</p>
            <Button onClick={restartGame}>Restart</Button>
          </SWrapper>
        )}
      </SGameContainer>
    </SMain>
  );
};
export default MatchGame;
