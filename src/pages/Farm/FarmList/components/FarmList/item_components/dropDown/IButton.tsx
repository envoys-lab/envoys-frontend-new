import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../simple_styles';
import { ButtonStyle } from '../../simple_styles';

const IButtonStyle = styled(ButtonStyle)<BtnType>`
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;

const IButtonStyleD = styled(ButtonStyle)<BtnType>`
  margin: ${(props) => props.margin};
  opacity: 0.5;
  align-self: center;
`;

interface BtnType {
  disabled?: boolean;
  text?: string;
  margin?: string;
  onClick?: any;
}

const IButton: React.FC<BtnType> = (props) => {
  if (props.disabled) {
    return <IButtonStyleD {...props}>{props.text}</IButtonStyleD>;
  }
  return <IButtonStyle {...props}>{props.text}</IButtonStyle>;
};

export default IButton;
