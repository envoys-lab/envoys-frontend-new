import React from 'react';
import styled from 'styled-components';
import { Flex } from '../simple_styles';
import Images from '../item_components/Images';
import ItemTitle from '../item_components/ItemTitle';
import ItemPercent from '../item_components/ItemPercent';
import { ItemOptionTextStyle } from '../simple_styles';
import ItemOptions from './ItemOptions';
import Earned from '../item_components/dropDown/Earned';
import IButton from '../item_components/dropDown/IButton';
import { DropDownIcon } from '../item_components/dropDown/DropDownIcon';
import icon from '../../../assets/dropdown_dwn.svg';
import DropDownS from './DropDownS';

type PropsDD = {
  dropdown?: boolean;
};

const ItemStyle = styled.li<PropsDD>`
  padding: 19px 14px 19px 10px;
  transition: 0.3s;
  border: 1px solid #e8ecf0;
  background: #f9f9f9;
  border-radius: 17px;
  background: #f9f9f9;
  background: ${(props) => (props.dropdown ? '#F9F9F9' : '#fff')};
`;

const ShowMoreText = styled.p`
  margin: 0 5px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  color: #133d65;
  cursor: pointer;
`;

const ShowMore = styled.div``;

type InfoArrayList = {
  info: {
    name: string[];
    img: string[];
    percent: string;
    earned: number | string;
    APR: string;
    liqudity: string;
    multiplier: string;
  };
  setOpenWalletsPopUp: React.Dispatch<React.SetStateAction<any>>;
};

const Mult = styled(ItemOptionTextStyle)`
  color: #fff;
  background: #045599;
  border-radius: 10px;
  padding: 4px 6px;
  align-self: flex-end;
`;

const NewBtn = styled(IButton)`
  display: block;
  width: 100%;
`;

const ItemS: React.FC<InfoArrayList> = (props) => {
  const [dropwDown, setDropwDown] = React.useState<boolean>(false);

  const dropDownHandler = () => {
    setDropwDown((val) => !val);
  };

  return (
    <ItemStyle>
      <Flex align="center" justify="space-between">
        <Flex direction="column" align="center" margin="0 0 10px 0">
          <Images imgs={props.info.img} />
          <ItemPercent text={props.info.percent} margin="4px 0" />
        </Flex>
        <Flex direction="column" align="center">
          <ItemTitle titles={props.info.name} />
          <Mult>{props.info.multiplier}</Mult>
        </Flex>
      </Flex>
      <ItemOptions earned={props.info.earned} APR={props.info.APR} liqudity={props.info.liqudity} />
      <Flex align="center" justify="space-between" margin="10px 0">
        <Earned earned={props.info.earned} />
        <IButton disabled={true} text="Harvest" margin="0" />
      </Flex>
      <NewBtn disabled={false} text="Start Farming" margin="0" onClick={() => props.setOpenWalletsPopUp(true)} />

      <Flex onClick={() => setDropwDown((value) => !value)} justify="center" align="center" margin="10px 0 0 0">
        <ShowMoreText>{dropwDown?'Hide':'Datails'}</ShowMoreText>
        <DropDownIcon dropdown={dropwDown} src={icon} />
      </Flex>

      <DropDownS show={dropwDown} />
    </ItemStyle>
  );
};

export default ItemS;
