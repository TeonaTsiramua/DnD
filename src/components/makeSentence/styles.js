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
  background-color: #fab5ff;
  color: black;
  text-shadow: 2px 2px 5px rgba(44, 42, 44, 0.51);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 2;
  opacity: ${({ $faded }) => ($faded ? 0 : 1)};
  font-size: ${({ $label }) => ($label ? '2rem' : '1.2rem')};
`;

export const SFadedWord = styled(SWord)`
  opacity: 0.5;
  z-index: 1;
  font-size: ${({ $label }) => ($label ? '2rem' : '1.2rem')};
`;

export const SFadedWrapper = styled(SWrapper)`
  position: absolute;
`;

export const SResult = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const SButton = styled.button`
  font-size: 2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;

  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    z-index: 10;
    font-size: 12px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
