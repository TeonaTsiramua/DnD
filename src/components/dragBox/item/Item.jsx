import { Reorder, useMotionValue } from 'framer-motion';
import { SItem } from './styles';
import { useRaisedShadow } from './useRaisedShadow';

const Item = ({ item }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  return (
    <div>
      <SItem
        as={Reorder.Item}
        value={item}
        id={item}
        $item={item}
        style={{ boxShadow, y }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        {item}
      </SItem>
    </div>
  );
};
export default Item;
