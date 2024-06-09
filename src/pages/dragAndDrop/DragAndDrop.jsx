import { useRef, useState } from 'react';
import { motion, useDragControls } from 'framer-motion';
import styled from 'styled-components';
import { DragIcon } from '../../components';
import { SBoxWithControls, SContainer, SDropZone } from './styles';

const SCircle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #007bff;
  border-radius: 999px;
  cursor: ${(props) => (props.$isDragging ? 'grabbing' : 'grab')};
`;

const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const dragControls = useDragControls();
  const constraintsRef = useRef(null);

  const dragStart = () => {
    setIsDragging(true);
  };

  const dragEnd = () => {
    setIsDragging(false);
  };

  return (
    <SContainer ref={constraintsRef}>
      <SCircle
        //*   drag: Enables dragging functionality.
        drag
        //? drag='x'
        // ? drag='y'

        /**
         ** dragConstraints: Sets constraints for dragging within a specific area.
         ** It can be an object with left, right, top, and bottom properties or a React ref pointing to an element.*/

        dragConstraints={constraintsRef}
        //* dragElastic: Determines the elasticity of dragging. Can be a number between 0 and 1.
        dragElastic={0.5}
        //* dragTransition: Defines transition options for drag animations.
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        //* onDragStart: Event handler called when dragging starts.
        onDragStart={dragStart}
        //* onDrag: Event handler called while dragging.
        //  onDrag={(event, info) => console.log(info)}

        //* onDragEnd: Event handler called when dragging ends.
        onDragEnd={dragEnd}
        //* whileDrag: Animate while dragging.
        whileDrag={{ scale: 1.2 }}
        //* dragDirectionLock: Locks dragging to a specific direction (x, y, or xy).
        //? dragDirectionLock

        ////
        whileHover={{ scale: 1.1 }}
        $isDragging={isDragging}
      />

      <SBoxWithControls
        as={motion.div}
        drag
        dragConstraints={{ left: -200, right: 500, top: -150, bottom: 100 }}
        whileDrag={{ scale: 1.2 }}
        //* dragControls: Provides control over the dragging behavior.
        dragControls={dragControls}
        //* dragListener: Exposes a drag event listener.
        dragListener={false}
        //* dragMomentum: Enables momentum-based dragging.
        dragMomentum={false}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
      >
        <DragIcon isDragging={isDragging} dragControls={dragControls} />
      </SBoxWithControls>

      <SDropZone $isDragging={isDragging}>
        {isDragging && 'Drop Here'}
      </SDropZone>
    </SContainer>
  );
};

export default DragAndDrop;
