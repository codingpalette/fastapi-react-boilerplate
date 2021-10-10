import React from 'react';
import { Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../assets/images/svelte-logo.svg';
import { HeaderBox } from './styles';

const Header = () => {
  return (
    <>
      <HeaderBox color="default" position="static">
        <Toolbar className="tool_bar">
          <div className="left_box">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <div className="logo_box">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <Button color="inherit" variant="outlined">
            로그인
          </Button>
        </Toolbar>
      </HeaderBox>
    </>
  );
};

export default Header;
