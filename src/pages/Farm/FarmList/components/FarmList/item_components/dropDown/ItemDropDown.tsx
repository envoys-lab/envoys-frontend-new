import React from 'react';
import styled from 'styled-components';
import { Flex, Flex2 } from '../../simple_styles';
import Earned from './Earned';
import IButton from './IButton';
import Links from './Links';

type ShowProps = {
  show?: boolean;
};

const ItemEndStyle = styled.div<ShowProps>`
  box-sizing: border-box;
  padding: ${(props) => (props.show ? '10px 80px 10px 40px' : '0 80px 0 40px')};
  height: ${(props) => (props.show ? 'auto' : '0px')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: all 0.5s;
`;

type EarnedType = {
  earned: number | string;
  show: boolean;
  setOpenWalletsPopUp?: React.Dispatch<React.SetStateAction<any>>;
};

const ItemDropDown: React.FC<EarnedType> = (props) => {
  return (
    <ItemEndStyle show={props.show}>
      <Flex align="center" justify="space-between">
        <Links />
        <Flex2 width="49%">
          <Earned earned={props.earned} />
          <IButton disabled={true} text="Harvest" margin="0 20px" />
          <IButton disabled={false} text="Start Farming" margin="0" />
        </Flex2>
      </Flex>
    </ItemEndStyle>
  );
};

export default ItemDropDown;
