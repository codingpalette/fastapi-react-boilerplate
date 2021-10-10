import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';

export const HeaderBox = styled(AppBar)`
  .tool_bar {
    height: 60px;
    min-height: 60px;
    justify-content: space-between;
  }
  .left_box {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo_box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    max-width: 150px;
  }
  .logo_box img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
