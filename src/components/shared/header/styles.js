import styled from 'styled-components';

export const SNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`;

export const SBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: hsl(0, 0%, 100%, 0.5);
  backdrop-filter: blur(5px);
  z-index: ${(props) => (props.$isOpen ? 3 : 0)};
`;

export const SButton = styled.button`
  outline: none;
  border: none;
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none; */
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  z-index: 3;
`;

export const SUl = styled.ul`
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
  z-index: ${(props) => (props.$isOpen ? 3 : -1)};
`;

export const SLI = styled.li`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const SIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
  border: 2px solid ${(props) => props.$color};
`;

export const SText = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
  color: ${(props) => props.$color};
  font-weight: 500;
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;

  &.active {
    & > div {
      background: ${(props) => props.$color};
    }
  }
`;
