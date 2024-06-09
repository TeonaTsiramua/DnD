import { useState } from 'react';
import { Reorder } from 'framer-motion';

import { Button, Items } from '../../components';

import useShuffleArray from '../../hooks/useShuffleArray';
import { checkOrder, restartGame } from '../../utils';
import { SMain, SWrapper } from './styles';

const items = [1, 2, 3, 4, 5];

const DragBox = () => {
  const [shuffledItems, setShuffledItems] = useState([]);
  const [isOrdered, setIsOrdered] = useState(false);

  useShuffleArray(items, shuffledItems, setShuffledItems);

  return (
    <SMain>
      <h1>Reorder Game</h1>
      <p>
        Drag and drop the items to reorder them. Arrange the items in the
        correct order to win the game!
      </p>
      <SWrapper
        as={Reorder.Group}
        axis='y'
        onReorder={setShuffledItems}
        values={items}
      >
        {shuffledItems.map((item) => (
          <Items key={item} item={item} />
        ))}
      </SWrapper>
      {isOrdered ? (
        <>
          <p>Congratulations! You have arranged the items correctly!</p>
          <Button onClick={restartGame}>Restart</Button>
        </>
      ) : (
        <Button onClick={() => setIsOrdered(checkOrder(shuffledItems))}>
          Check Order
        </Button>
      )}
    </SMain>
  );
};

export default DragBox;
