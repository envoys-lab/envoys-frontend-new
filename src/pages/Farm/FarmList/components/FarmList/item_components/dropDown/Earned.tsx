import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../simple_styles';

const EarnedStyle = styled.div``;

const EarnedTextStyle = styled.p`
  padding: 0;
  margin: 5px 0;
  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  color: #133d65;

  &:nth-child(2) {
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
  }
`;

const Link = styled.a`
  margin: 0;
  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  color: #2261da;
  text-decoration: none;
`;

type EarnedType = {
  earned: number | string;
};

const Earned: React.FC<EarnedType> = (props) => {
  return (
    <EarnedStyle>
      <Flex align="flex-end" direction="column">
        <EarnedTextStyle>
          <Link href="#">ETH</Link> EARNED
        </EarnedTextStyle>
        <EarnedTextStyle>{props.earned}</EarnedTextStyle>
      </Flex>
    </EarnedStyle>
  );
};

export default Earned;
