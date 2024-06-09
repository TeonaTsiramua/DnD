import styled from 'styled-components';

export const SMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

export const SGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const SIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
  z-index: 1;
`;

export const SWordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SDraggableIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #3498db;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  border-radius: 8px;
  cursor: grab;
  z-index: 1;
`;

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SWordCard = styled.div`
  width: 100px;
  height: 50px;
  background-color: #2ecc71;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
`;

export const SDropZone = styled.div`
  width: 90px;
  height: 90px;
  background-color: #eee;
  border: 2px dashed #ccc;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
