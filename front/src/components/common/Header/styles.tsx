import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import { Dialog } from '@mui/material';
import { blue } from '@mui/material/colors';

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

export const ModalBox = styled(Dialog)`
  .input_group {
    margin-bottom: 10px;
  }

  .mode_select {
    padding: 0 10px;
    box-sizing: border-box;
    text-align: right;
    margin-bottom: 5px;
  }
  .mode_select button {
    background: none;
    border: none;
    cursor: pointer;
    color: ${blue[500]};
  }

  .mode_select button:hover {
    text-decoration: underline;
  }
`;
