import styled from 'styled-components';

type Props = {
  justify?: 'space-between' | 'space-around' | 'center' | 'flex-start' | 'flex-end';
  align?: 'center' | 'flex-start' | 'flex-end';
  margin?: string | '0';
  flex?: number;
  direction?: 'column' | 'row';
};

export const Flex = styled.div<Props>`
  display: flex;
  flex: ${(props) => props.flex || 'none'};
  justify-content: ${(props) => props.justify || 'stretch'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-direction: ${(props) => props.direction || 'row'};
  margin: ${(props) => props.margin};
`;
