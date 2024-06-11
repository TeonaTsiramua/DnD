import { motion } from 'framer-motion';
import { SButton } from './styles';

const Button = ({ children, onClick, selected }) => {
  return (
    <SButton
      as={motion.button}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      $selected={selected}
    >
      {children}
    </SButton>
  );
};
export default Button;
