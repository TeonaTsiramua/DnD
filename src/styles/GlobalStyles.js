import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  /* Box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reset margins */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  picture {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: 400;
  }

  /* set up the body */
  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(250deg, #7b2ff7, #f107a3);
    color: white;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
    overflow: hidden;
  }

  /* make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* make form elements easier to work with */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
