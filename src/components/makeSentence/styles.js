import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

export const SWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ $highlighted }) => $highlighted && '0 0 10px yellow'};
`;

export const SWord = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: #f78aff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 2;
  opacity: ${({ $faded }) => ($faded ? 0 : 1)};
`;

export const SFadedWord = styled(SWord)`
  opacity: 0.5;
  z-index: 1;
`;

export const SFadedWrapper = styled(SWrapper)`
  position: absolute;
`;
