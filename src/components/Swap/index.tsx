import React, { FC } from 'react';
import styled from 'styled-components';

const StyledSwapContainer = styled.div`
  background: white;
  min-height: 340px;
  max-width: 440px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 28px;
  padding: 15px;

  //temp:
  margin: auto;
  margin-top: 10px;
`;

const StyledSwapHeader = styled.div`
  /* Heading 1 */
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;

  /* Dark clear */
  color: #0f2b46;
`;

const StyledSwapSubHeader = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */
  display: flex;
  align-items: flex-end;

  /* Dark clear */
  color: #0f2b46;
`;

const StyledSwapHeaderWrapper = styled.div`
  padding: 15px;
`;

const StyledInputWrapper = styled.div`
  background: #f5f6f7;
  border: 1px solid #f5f6f7;
  box-sizing: border-box;
  border-radius: 14px;
  padding: 15px 10px;
  margin: 15px 0px;
  display: flex;
  align-items: center;
`;

const StyledTokenHeader = styled.div`
  width: 68px;
  height: 40px;
  background: #ffffff;
  border-radius: 14px;
  margin: 0px 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTokenValue = styled.div`
  font-size: 16px;
  line-height: 19px;

  text-align: right;
  float: right;
`;

const StyledRow = styled.div`
  flex: 1 1 50%;
`;

const Swap: FC = () => {
  return (
    <StyledSwapContainer>
      <StyledSwapHeaderWrapper>
        <StyledSwapHeader>Exchange</StyledSwapHeader>
        <StyledSwapSubHeader>Trade tokens in an instant</StyledSwapSubHeader>
      </StyledSwapHeaderWrapper>

      <StyledInputWrapper>
        <StyledRow>
          <StyledTokenHeader>ETH</StyledTokenHeader>
        </StyledRow>
        <StyledRow>
          <StyledTokenValue>0.0</StyledTokenValue>
        </StyledRow>
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledRow>
          <StyledTokenHeader>ETH</StyledTokenHeader>
        </StyledRow>
        <StyledRow>
          <StyledTokenValue>0.0</StyledTokenValue>
        </StyledRow>
      </StyledInputWrapper>
    </StyledSwapContainer>
  );
};

export default Swap;
