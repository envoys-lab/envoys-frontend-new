import React from 'react';
import SideBarDesktopContent from './SideBarDesktopContent';
import styled from 'styled-components';
import logo from '../../logo.svg';
import StyledLogo from './StyledLogo';

const StyledSideBar = styled.div`
  background: white;
  width: 240px;
  height: 100%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  // border-radius: 16px;
  text-align: center;
`;

const SideBarDesktop: React.FC = () => {
  return (
    <StyledSideBar>
      <StyledLogo src={logo} />

      <SideBarDesktopContent />
    </StyledSideBar>
  );
};

export default SideBarDesktop;
