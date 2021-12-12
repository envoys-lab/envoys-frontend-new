import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import icon1 from '../../assets/usdc1.svg';
import icon2 from '../../assets/usdc2.svg';

const ListStyle = styled.ul`
  padding: 0;
  list-style: none;
`;

const List: React.FC = () => {
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

  return (
    <ListStyle>
      {infoList.map((item, index) => {
        return <Item key={index} info={item} />;
      })}
    </ListStyle>
  );
};

export default List;
