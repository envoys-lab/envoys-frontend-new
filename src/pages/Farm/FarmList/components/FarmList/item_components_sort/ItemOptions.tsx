import React from 'react';
import styled from 'styled-components';
import { Flex, ItemOptionTextStyle } from '../simple_styles';

const ItemOpt = styled.ul`
  list-style: none;
  padding: 0;
`;

type ItemEndType = {
  earned: number | string;
  APR: string;
  liqudity: string;
};

const ItemOptions: React.FC<ItemEndType> = (props) => {
  const [arrayName, setArrayName] = React.useState<string[]>([]);
  const [arrayVal, setArrayVal] = React.useState<any>([]);

  React.useEffect(() => {
    const newArrayName = Object.keys(props);
    const newArrayVal = Object.values(props);

    setArrayName(newArrayName);
    setArrayVal(newArrayVal);
  }, []);

  return (
    <ItemOpt>
      {arrayName.map((item, index) => {
        return (
          <Flex justify="space-between" align="center" key={index}>
            <ItemOptionTextStyle>{item}</ItemOptionTextStyle>
            <ItemOptionTextStyle>{arrayVal[index]}</ItemOptionTextStyle>
          </Flex>
        );
      })}
    </ItemOpt>
  );
};

export default ItemOptions;
