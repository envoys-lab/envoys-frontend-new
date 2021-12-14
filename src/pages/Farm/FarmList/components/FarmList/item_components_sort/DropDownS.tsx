import React from 'react';
import styled from 'styled-components';
import Links from '../item_components/dropDown/Links';

const ItemEndStyle = styled.div<EarnedType>`
  padding: ${(props) => (props.show ? '20px 0' : '0 ')};
  height: ${(props) => (props.show ? 'auto' : '0px')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: all 0.5s;
`;

type EarnedType = {
  show: boolean;
};

const DropDownS: React.FC<EarnedType> = (props) => {
  return (
    <ItemEndStyle show={props.show}>
      <Links justifyLinks='center'/>
    </ItemEndStyle>
  );
};

export default DropDownS;
