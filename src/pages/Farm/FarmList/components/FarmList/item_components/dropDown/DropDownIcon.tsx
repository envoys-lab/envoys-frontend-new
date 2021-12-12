import styled, { css } from 'styled-components';

type DropDownProps = {
  dropdown?: boolean;
};

export const DropDownIcon = styled.img<DropDownProps>`
  transition: 0.5s;
  transform: ${(props) => (props.dropdown ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
