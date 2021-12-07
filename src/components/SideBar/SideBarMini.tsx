import React from 'react';
import styled from 'styled-components';
import logo from '../../logo_mini.svg';
import StyledLogo from './StyledLogo';
import SideBarMiniContent from './SideBarMiniContent';

const StyledSideBar = styled.div`
  background: white;
  width: 70px;
  height: 100%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  text-align: center;
`;

const SideBarMini: React.FC = () => {
  return (
    <>
      <StyledSideBar>
        <StyledLogo src={logo} />
        <SideBarMiniContent />
      </StyledSideBar>
    </>
  );
};

export default SideBarMini;
