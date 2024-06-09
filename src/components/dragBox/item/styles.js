import styled from 'styled-components';

export const SItem = styled.div`
  background-color: #4400ff;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 1rem;
  width: calc(3rem * ${(props) => props.$item});
  border-radius: 5px;
  cursor: pointer;
  font-weight: 800;
  font-size: 20px;
`;
