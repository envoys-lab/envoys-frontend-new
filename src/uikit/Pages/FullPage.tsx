import React from 'react';
import styled from 'styled-components';

const StyledFullPageWrapper = styled.div`
  width: 100%;
  padding: 21px;
`;

const StyledFullPage = styled.div`
  background: white;
  border-radius: 28px;
  padding: 21px 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
`;

const FullPage: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <StyledFullPageWrapper>
      <StyledFullPage>{children}</StyledFullPage>
    </StyledFullPageWrapper>
  );
};

export default FullPage;
