import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const SHeader = styled.header`
  text-align: center;
  padding: 50px 0;
`;

export const SGameSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 50px;
  width: 100%;
  z-index: 2;
`;

export const SGameLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: baseline;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const SGameTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const SGameDescription = styled.p`
  font-size: 16px;
  width: 300px;
`;
