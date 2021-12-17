import React from 'react';
import styled from 'styled-components';
import ItemDropDown from './item_components/dropDown/ItemDropDown';
import ItemTop from './item_components/ItemTop';

type PropsDD = {
  dropdown?: boolean;
};

const ItemStyle = styled.li<PropsDD>`
  padding: 10px 14px 10px 14px;
  border-radius: 16px;
  transition: all 0.4s;
  background: ${(props) => (props.dropdown ? '#F9F9F9' : '#fff')};
`;

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
  setOpenWalletsPopUp?: React.Dispatch<React.SetStateAction<any>>;
};

const Item: React.FC<InfoArrayList> = (props) => {
  const [dropwDown, setDropwDown] = React.useState<boolean>(false);

  const dropDownHandler = () => {
    setDropwDown((val) => !val);
  };

  return (
    <ItemStyle dropdown={dropwDown}>
      <ItemTop info={props.info} clickDropDown={() => dropDownHandler()} />
      <ItemDropDown earned={props.info.earned} show={dropwDown} setOpenWalletsPopUp={props.setOpenWalletsPopUp} />
    </ItemStyle>
  );
};

export default Item;
