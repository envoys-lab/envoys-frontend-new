import React from 'react';
import styled from 'styled-components';
import { Flex } from '../simple_styles';

const ImagStyle = styled.img`
  width: 22px;
`;
const ImagMoveStyle = styled.img`
  width: 22px;
  margin-left: -8px;
`;

type ImgsType = {
  imgs: string[];
};

const Images: React.FC<ImgsType> = (props) => {
  return (
    <Flex align="center">
      {props.imgs.map((item, index) => {
        if (index === 0) {
          return <ImagStyle key={index} src={item} />;
        }
        return <ImagMoveStyle key={index} src={item} />;
      })}
    </Flex>
  );
};

export default Images;
