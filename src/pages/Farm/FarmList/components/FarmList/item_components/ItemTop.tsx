import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '../simple_styles';
import Images from './Images';
import ItemOptions from './ItemEnd';
import Percent from './ItemPercent';
import ItemTitle from './ItemTitle';
import icon from '../../../assets/dropdown_dwn.svg';
import { DropDownIcon } from './dropDown/DropDownIcon';

type BorderS = {
  dropDown: boolean;
};

const ItemStartStyle = styled.div<BorderS>`
  cursor: pointer;
  position: relative;
  padding: 10px 0;
  transition: 0.3s;
  border-bottom: 1px solid ${(props) => (props.dropDown ? '#E5E5E5' : '#F9F9F9')};
`;

type InfoArrayList = {
  info: {
    name: string[];
    img: string[];
    percent: string;
    earned: number;
    APR: string;
    liqudity: string;
    multiplier: string;
  };
  clickDropDown(): void;
};

const ItemTop: React.FC<InfoArrayList> = (props) => {
  const [dropDown, setDropDown] = React.useState<boolean>(false);

  const clickDD = () => {
    setDropDown((val) => !val);
    props.clickDropDown();
  };

  return (
    <ItemStartStyle onClick={clickDD} dropDown={dropDown}>
      <Flex align="center">
        <Images imgs={props.info.img} />
        <ItemTitle titles={props.info.name} />
        <Percent text={props.info.percent} margin="0" />
        <ItemOptions
          earned={props.info.earned}
          APR={props.info.APR}
          liqudity={props.info.liqudity}
          multiplier={props.info.multiplier}
        />
        <DropDownIcon src={icon} dropdown={dropDown} />
      </Flex>
    </ItemStartStyle>
  );
};

export default ItemTop;
