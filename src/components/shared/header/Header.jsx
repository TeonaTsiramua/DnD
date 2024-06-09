import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import { SBackground, SNav } from './styles';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <SNav
      as={motion.nav}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <SBackground $isOpen={isOpen} as={motion.div} variants={sidebar} />
      <Navigation isOpen={isOpen} toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </SNav>
  );
};
