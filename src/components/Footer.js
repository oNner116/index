import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)`
  background: rgba(26, 42, 61, 0.95);
  padding: 2rem 0;
  margin-top: 4rem;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Box sx={{ mb: 2 }}>
            <FooterLink href="#">关于我们</FooterLink>
            <FooterLink href="#">联系方式</FooterLink>
            <FooterLink href="#">服务条款</FooterLink>
            <FooterLink href="#">隐私政策</FooterLink>
          </Box>
          <Typography variant="body2" color="rgba(255,255,255,0.7)">
            © 2024 GameHub. 保留所有权利。
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}

export default Footer; 