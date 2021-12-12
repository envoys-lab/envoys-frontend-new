import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../simple_styles';
import Earned from './Earned';
import IButton from './IButton';
import Links from './Links';

type ShowProps = {
  show?: boolean;
};

const ItemEndStyle = styled.div<ShowProps>`
  padding: ${(props) => (props.show ? '10px 80px 10px 40px' : '0 80px 0 40px')};
  height: ${(props) => (props.show ? 'auto' : '0px')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: all 0.5s;
`;

type EarnedType = {
  earned: number | string;
  show: boolean;
};

const ItemDropDown: React.FC<EarnedType> = (props) => {
  return (
    <ItemEndStyle show={props.show}>
      <Flex align="center" justify="space-between">
        <Links />
        <Flex>
          <Earned earned={props.earned} />
          <IButton disabled={true} text="Harvest" />
          <IButton disabled={false} text="Start Farming" />
        </Flex>
      </Flex>
    </ItemEndStyle>
  );
};

export default ItemDropDown;
