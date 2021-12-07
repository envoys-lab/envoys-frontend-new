import styled from 'styled-components';
import { NavBar, NavBarWrapper } from './NavBar';
import { HTMLAttributes } from 'react';

const StyledContent = styled.div`
  max-height: calc(100vh - 128px);
`;

const NavBarableContent = (props) => {
  return (
    <NavBarWrapper {...props}>
      <NavBar />
      <StyledContent style={{ overflow: 'auto' }}>{props.children}</StyledContent>
    </NavBarWrapper>
  );
};

export default NavBarableContent;
