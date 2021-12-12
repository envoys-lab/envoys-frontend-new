import React from 'react';
import styled from 'styled-components';

const ItemPercentStyle = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  color: #133d65;
  border: 1px solid #045599;
  border-radius: 10px;
  padding: 4px 6px;
`;

type PercentType = {
  text: string;
};

const ItemPercent: React.FC<PercentType> = (props) => {
  return <ItemPercentStyle>{props.text}</ItemPercentStyle>;
};

export default ItemPercent;
