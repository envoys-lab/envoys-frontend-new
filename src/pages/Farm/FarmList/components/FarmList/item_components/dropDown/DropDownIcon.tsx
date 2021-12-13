import styled, { css } from 'styled-components';

type DropDownProps = {
  dropdown: boolean;
};

export const DropDownIcon = styled.img<DropDownProps>`
  transition: 0.5s;
  cursor: pointer;
  transform: ${(props) => (props.dropdown ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
