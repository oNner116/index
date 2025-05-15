import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)`
  background: rgba(44, 62, 80, 0.95);
  backdrop-filter: blur(10px);
`;

const Logo = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavButton = styled(Button)`
  margin-left: 1rem;
  color: white;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

function Header() {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Logo variant="h1">
          GameHub
        </Logo>
        <Box sx={{ flexGrow: 1 }} />
        <NavButton color="inherit">首页</NavButton>
        <NavButton color="inherit">游戏</NavButton>
        <NavButton color="inherit">排行榜</NavButton>
        <NavButton color="inherit">关于</NavButton>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header; 