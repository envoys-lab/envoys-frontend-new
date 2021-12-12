import styled from 'styled-components';

type Props = {
  justify?: string;
  align?: string;
  margin?: string;
  flex?: number;
  direction?: string;
  col?: string;
  row?: string;
  gap?: string;
};

export const Flex = styled.div<Props>`
  display: flex;
  flex: ${(props) => props.flex || 'none'};
  justify-content: ${(props) => props.justify || 'stretch'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-direction: ${(props) => props.direction || 'row'};
`;

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props) => props.col || 'none'};
  grid-template-rows: ${(props) => props.row || 'none'};
  gap: ${(props) => props.gap || '0px'};
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 15px;
`;
