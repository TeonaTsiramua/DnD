import { motion } from 'framer-motion';
import { SIcon, SLI, SText } from './styles';
import { NavLink } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0 },
  },
};

export const MenuItem = ({ i, toggle }) => {
  return (
    <SLI
      as={motion.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <SText as={NavLink} to={i.link} $color={i.color} onClick={toggle}>
        <SIcon $color={i.color} />
        {i.title}
      </SText>
    </SLI>
  );
};
