import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html{
    font-size: 14px;
  }
  
  html, body, #root {
    height: 100%;
  }
  
`;

export default GlobalStyle;
