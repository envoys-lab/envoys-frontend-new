import React from 'react';
import styled from 'styled-components';
import { Flex } from '../simple_styles';
import ItemOption from './ItemOption';

const ItemEndStyle = styled.div`
  margin-left: auto;
`;

type ItemEndType = {
  earned: number;
  APR: string;
  liqudity: string;
  multiplier: string;
};

const ItemEnd: React.FC<ItemEndType> = (props) => {
  const [arrayName, setArrayName] = React.useState<string[]>([]);
  const [arrayVal, setArrayVal] = React.useState<any>([]);

  React.useEffect(() => {
    const newArrayName = Object.keys(props);
    const newArrayVal = Object.values(props);

    setArrayName(newArrayName);
    setArrayVal(newArrayVal);
  }, []);
  return (
    <ItemEndStyle>
      <Flex align="center">
        {arrayName.map((item, index) => {
          return <ItemOption name={item} value={arrayVal[index]} key={index} />;
        })}
      </Flex>
    </ItemEndStyle>
  );
};

export default ItemEnd;
