import React from 'react';
import styled from 'styled-components';

const TitleS = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #0F2B46;
`


const Title: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <TitleS>{children}</TitleS>;
};

export default Title;
