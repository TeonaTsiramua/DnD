import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { SUl } from './styles';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen, toggle }) => (
  <SUl as={motion.ul} variants={variants} $isOpen={isOpen}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i.id} toggle={toggle} />
    ))}
  </SUl>
);

const itemIds = [
  { id: 1, color: '#7700FF', title: 'Home', link: '/' },
  {
    id: 2,
    color: '#FF008C',
    title: 'Drag & Drop',
    link: '/dnd',
  },
  {
    id: 3,
    color: '#D309E1',
    title: 'Reorder',
    link: '/reorder',
  },
  {
    id: 4,
    color: '#9C1AFF',
    title: 'Match Game',
    link: '/match-game',
  },
  {
    id: 5,
    color: '#9C1AFF',
    title: 'Sentence',
    link: '/sentence',
  },
];
