import React from 'react';
import styled from 'styled-components';
import calc from '../../../assets/calculator.svg';
import { Flex } from '../simple_styles';

const ItemEndStyle = styled.span`
  margin-right: 65px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &:nth-child(2) {
    margin-right: 40px;
  }
`;

type PropsTextA = {
  textA?: boolean;
};

const ItemOptionTextStyle = styled.p<PropsTextA>`
  margin: ${(props) => (props.textA ? '2px 23px 2px 0px' : '2px 0')};
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  color: #133d65;
  text-transform: capitalize;

  &:nth-child(2) {
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
  }
`;

const CalcIcon = styled.img`
  width: 18px;
  margin: 0 2px;
`;

type ItemOptionType = {
  name: string;
  value: string | number;
};

const ItemOption: React.FC<ItemOptionType> = (props) => {
  const [state, setState] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (props.name === 'APR') {
      setState(true);
    }
  }, []);

  return (
    <ItemEndStyle>
      <ItemOptionTextStyle textA={state}>{props.name}</ItemOptionTextStyle>
      <Flex>
        <ItemOptionTextStyle>{props.value}</ItemOptionTextStyle>
        {props.name === 'APR' ? <CalcIcon src={calc} /> : <></>}
      </Flex>
    </ItemEndStyle>
  );
};

export default ItemOption;
