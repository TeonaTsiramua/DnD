import { useRef } from 'react';

const useWordDrag = ({ step, handleSelect, setHighlightedBox, getSteps }) => {
  const refs = {
    noun1: useRef(null),
    sign1: useRef(null),
    noun2: useRef(null),
    sign2: useRef(null),
    noun3: useRef(null),
    sign3: useRef(null),
    verb: useRef(null),
  };

  const handleDragStart = () => {
    const boxType = getSteps(step);
    setHighlightedBox(boxType);
  };

  const handleDragEnd = (event, info, item) => {
    setHighlightedBox(null);
    const boxType = getSteps(step);
    const targetRef = refs[boxType];

    if (isInBox(info, targetRef)) {
      handleSelect(item, boxType);
    }
  };

  const isInBox = (info, boxRef) => {
    if (!boxRef.current) return false;
    const box = boxRef.current.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    return (
      info.point.x >= box.left + scrollX &&
      info.point.x <= box.right + scrollX &&
      info.point.y >= box.top + scrollY &&
      info.point.y <= box.bottom + scrollY
    );
  };

  return { refs, handleDragStart, handleDragEnd };
};

export default useWordDrag;
