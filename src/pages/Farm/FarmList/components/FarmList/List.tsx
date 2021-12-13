import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import icon1 from '../../assets/usdc1.svg';
import icon2 from '../../assets/usdc2.svg';
import ItemS from './item_components_sort/ItemS';

const ListStyle = styled.ul`
  padding: 0;
  list-style: none;
`;

const ListStyleS = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

type Props = {
  view: boolean;
  switched: boolean;
  secondSwitched: boolean;
  sort: boolean;
  setOpenWalletsPopUp: React.Dispatch<React.SetStateAction<any>>;
};

const List: React.FC<Props> = (props) => {
  const [infoList, setinfoList] = React.useState([
    {
      name: ['ETH', 'USDC'],
      img: [icon1, icon2],
      percent: '0.3%',
      earned: 0,
      APR: '37.2%',
      liqudity: '$749 614 538',
      multiplier: '40x',
    },
    {
      name: ['ETH', 'USDC'],
      img: [icon1, icon2],
      percent: '0.3%',
      earned: 0,
      APR: '37.2%',
      liqudity: '$749 614 538',
      multiplier: '40x',
    },
    {
      name: ['ETH', 'USDC'],
      img: [icon1, icon2],
      percent: '0.3%',
      earned: 0,
      APR: '37.2%',
      liqudity: '$749 614 538',
      multiplier: '40x',
    },
    {
      name: ['ETH', 'USDC'],
      img: [icon1, icon2],
      percent: '0.3%',
      earned: 0,
      APR: '37.2%',
      liqudity: '$749 614 538',
      multiplier: '40x',
    },
    {
      name: ['ETH', 'USDC'],
      img: [icon1, icon2],
      percent: '0.3%',
      earned: 0,
      APR: '37.2%',
      liqudity: '$749 614 538',
      multiplier: '40x',
    },
    {
      name: ['ETH', 'USDC'],
      img: [icon1, icon2],
      percent: '0.3%',
      earned: 0,
      APR: '37.2%',
      liqudity: '$749 614 538',
      multiplier: '40x',
    },
  ]);

  if (props.view) {
    return (
      <ListStyleS>
        {infoList.map((item, index) => {
          return <ItemS key={index} info={item} setOpenWalletsPopUp={props.setOpenWalletsPopUp} />;
        })}
      </ListStyleS>
    );
  } else {
    return (
      <ListStyle>
        {infoList.map((item, index) => {
          return <Item key={index} info={item} setOpenWalletsPopUp={props.setOpenWalletsPopUp} />;
        })}
      </ListStyle>
    );
  }
};

export default List;
