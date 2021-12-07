import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import Icon from 'components/Icon';
import sideBar from 'sideBar';

const StyledRowContainer = styled.div`
  text-align: left;
  width: 100%;
`;

const SideBarDesktopContent: React.FC = () => {
  return (
    <>
      <StyledRowContainer>
        {sideBar.map((e, index) => (
          <Row key={index} to={e.to} alternative={e.alternative} disable={e.disable}>
            <Icon content={`fa ${e.icon} fa-fw`} /> {e.title}
          </Row>
        ))}
        <div style={{ bottom: '20px', position: 'absolute', width: '240px' }}>
          <Row disable={true}>
            <Icon content="fa fa-cog fa-fw" />
            Account
          </Row>
          <Row disable={true}>
            <Icon content="fa fa-sign-out fa-fw" />
            Log out
          </Row>
        </div>
      </StyledRowContainer>
    </>
  );
};

export default SideBarDesktopContent;
