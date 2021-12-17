import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../simple_styles';

const EarnedStyle = styled.div`
  align-self: flex-start;
`;

const EarnedTextStyle = styled.p<TextPos>`
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
    align-self: ${props => props.pos === 'start'?'flex-start':'flex-end'};
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

type TextPos = {
  pos?: string
}

type EarnedType = {
  earned: number | string;
  pos: 'start' | 'end'
};

const Earned: React.FC<EarnedType> = (props) => {
  return (
    <EarnedStyle>
      <Flex align="flex-end" direction="column">
        <EarnedTextStyle>
          <Link href="#">ETH</Link> EARNED
        </EarnedTextStyle>
        <EarnedTextStyle pos={props.pos}>{props.earned}</EarnedTextStyle>
      </Flex>
    </EarnedStyle>
  );
};

export default Earned;
