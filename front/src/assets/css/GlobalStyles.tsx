import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const GlobalStyle = css`
  ${emotionNormalize}

  html {
    font-size: 14px;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
