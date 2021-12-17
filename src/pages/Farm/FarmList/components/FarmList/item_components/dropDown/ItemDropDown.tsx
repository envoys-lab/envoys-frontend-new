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
  padding: ${(props) => (props.show ? '30px 80px 36px 40px' : '0 80px 0 40px')};
  max-height: ${(props) => (props.show ? '380px' : '0')};
  overflow: hidden;
  transition: all 0.4s ease-in;
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
        <Links justifyLinks="flex-start" />
        <Flex2>
          <Earned pos='end' earned={props.earned} />
          <IButton disabled={true} text="Harvest" margin="0 0 0 40px" />
          <IButton
            disabled={false}
            text="Start Farming"
            margin="0 0 0 17px"
            onClick={() => props.setOpenWalletsPopUp(true)}
          />
        </Flex2>
      </Flex>
    </ItemEndStyle>
  );
};

export default ItemDropDown;
