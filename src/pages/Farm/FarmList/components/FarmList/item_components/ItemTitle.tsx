import React from 'react';
import styled from 'styled-components';
import { Flex } from '../simple_styles';

const ItemTitleStyle = styled.h3`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #133d65;
  margin: 0 10px;
`;

type ImgsType = {
  titles: string[];
};

const ItemTitle: React.FC<ImgsType> = (props) => {
  return (
    <Flex align="center">
      <ItemTitleStyle>
        {props.titles.map((item, index) => {
          if (props.titles[index + 1] !== undefined) {
            return item + '/';
          }
          return item;
        })}
      </ItemTitleStyle>
    </Flex>
  );
};

export default ItemTitle;
