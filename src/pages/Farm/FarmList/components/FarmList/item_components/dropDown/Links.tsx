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
  margin: 6px 0;
`;

const LinkImg = styled.img`
  width: 18px;
`;

type Props = {
  justifyLinks: string
}

const Links: React.FC<Props> = (props) => {
  const [links, setLinks] = React.useState<string[]>(['Get ETH-USDC', 'View Contract', 'See Pair Info']);

  return (
    <Flex direction="column">
      {links.map((item, index) => {
        return (
          <Flex key={index} justify={props.justifyLinks}>
            <ItemLink href="#" target="_blank">{item}</ItemLink>
            <LinkImg src={icon} />
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Links;
