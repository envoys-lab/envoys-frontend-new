import React from 'react';
import SideBarDesktopContent from './SideBarDesktopContent';
import styled from 'styled-components';
import logo from '../../logo.svg';
import StyledLogo from './StyledLogo';
import Sticky from 'react-sticky-el';

const StyledSideBar = styled.div`
  background: white;
  width: 240px;
  height: 100vh;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  text-align: center;
  position: fixed;
`;

const WrapperSideBar = styled.div`
  width: 240px;
  height: 100vh;
  margin-right: 30px;
`;

const SideBarDesktop: React.FC = () => {
  return (
    <WrapperSideBar>
      <StyledSideBar>
        <StyledLogo src={logo} />

        <SideBarDesktopContent />
      </StyledSideBar>
    </WrapperSideBar>
  );
};

export default SideBarDesktop;
