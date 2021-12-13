import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../simple_styles';
import icon from '../../../../assets/link.svg';

const ItemLink = styled.a`
  font-family: Roboto;
  font-weight: normal;
  font-size: 14px;
  color: #2261da;
  text-decoration: none;
`;

const LinkImg = styled.img`
  width: 18px;
`;

const Links: React.FC = () => {
  const [links, setLinks] = React.useState<string[]>(['Get ETH-USDC', 'View Contract', 'See Pair Info']);

  return (
    <Flex direction="column">
      {links.map((item, index) => {
        return (
          <Flex key={index} justify="center">
            <ItemLink href="#">{item}</ItemLink>
            <LinkImg src={icon} />
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Links;
