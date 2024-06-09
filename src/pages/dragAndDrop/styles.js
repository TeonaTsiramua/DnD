import styled from 'styled-components';

export const SContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  height: 80vh;
  z-index: 1;
  width: 90%;
  text-align: center;
`;

export const SBoxWithControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100px;
  height: 100px;
  background-color: #0cdeed;
  border-radius: 8px;
`;

export const SDropZone = styled.div`
  width: 200px;
  height: 200px;
  border: ${(props) => props.$isDragging && '2px dashed #007bff'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
