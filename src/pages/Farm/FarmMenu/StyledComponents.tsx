import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children?: React.ReactChild | React.ReactNode;
  selected?: boolean;
  view?: boolean;
  switched?: boolean;
  secondSwitched?: boolean;
  sort?: boolean;
}

export const StyledFarmFlex1 = styled.div<Props>`
  background-color: #fff;
  width: 96%;
  padding: 10px 15px;
  margin: 0 auto;
  border-radius: 28px;
  font-size: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
`;

export const StyledFarmFlex2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
export const StyledFarmFlex3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 30px;
`;
export const StyledFarmFlex4 = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #2261da;
  }
`;
export const StyledFarmFlex5 = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledFarmFlex6 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
export const StyledFarmFlex7 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const StyledFarmBtn = styled.div<Props>`
  color: #0f2b46;
  font-weight: 700;
  font-size: 16px;
  padding: 10px 80px 17px;
  cursor: pointer;
  border-right: 2px solid #e5e5e5;
  color: ${(props) => (props.selected == false ? '#F48020' : '#0F2B46')};
  ${(props) =>
    props.selected === false &&
    css`
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 60px;
        height: 3px;
        border-radius: 4px;
        background-color: #f48020;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    `}
`;
export const StyledPoolBtn = styled.div<Props>`
  color: #0f2b46;
  font-weight: 700;
  font-size: 16px;
  padding: 10px 80px 17px;
  cursor: pointer;
  color: ${(props) => (props.selected === true ? '#F48020' : '#0F2B46')};
  ${(props) =>
    props.selected === true &&
    css`
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 60px;
        height: 3px;
        border-radius: 4px;
        background-color: #f48020;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    `}
`;

export const StyledStakeSpan = styled.span<Props>`
  display: block;
  font-weight: 700;
  font-size: 16px;
  color: #0f2b46;
  margin-bottom: 6px;
`;

export const StyledViewListIcon = styled.div<Props>`
  color: ${(props) => (props.view === false ? '#F48020' : '#133D65')};
  opacity: ${(props) => (props.view === false ? '1' : '0.1')};
  cursor: pointer;
  font-size: 18px;
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;
export const StyledViewBlockIcon = styled.div<Props>`
  color: ${(props) => (props.view === true ? '#F48020' : '#133D65')};
  opacity: ${(props) => (props.view === true ? '1' : '0.1')};
  cursor: pointer;
  font-size: 18px;
  width: 18px;
  height: 18px;
`;
export const StyledSwitcher = styled.input<Props>`
  position: relative;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  cursor: pointer;
  -webkit-appearance: none;
  background-color: ${(props) => (props.switched ? '#F48020' : '#F8F8F8')};
  outline: none;
  transition: 0.5s;
  box-shadow: inset 0px 4px 6px rgba(0, 23, 43, 0.05);
  margin-right: 8px;
  &::after {
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    background-color: #fff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    top: 4px;
    right: 28px;
    border-radius: 50%;
  }
  ${(props) =>
    props.switched &&
    css`
      &::after {
        right: 6px;
      }
    `}
`;

export const StyledSecondSwitcher = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 13px;
  font-size: 12px;
  width: 110px;
  color: #133d65;
  border-radius: 18px;
  background-color: #f8f8f8;
  box-shadow: inset 0px 4px 6px rgba(0, 23, 43, 0.05);
  cursor: pointer;
  margin-right: 13px;
  position: relative;
  &::after {
    content: 'Finished';
    position: absolute;
    padding: 4px 10px;
    font-size: 12px;
    color: #f48020;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    background-color: #fff;
    top: 4px;
    right: 6px;
  }
  ${(props) =>
    props.secondSwitched &&
    css`
      &::after {
        content: 'Live';
        right: 62px;
      }
    `}
`;

export const StyledSort = styled.div<Props>`
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #133d65;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  span {
    opacity: 0.7;
    &:first-child {
      font-weight: 400;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
  .sortItem {
    margin: 0 10px;
  }
  ${(props) =>
    props.sort &&
    css`
      border-radius: 14px 14px 0 0;
    `}
`;
export const StyledSortList = styled.ul<Props>`
  list-style: none;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 14px 14px;
  background-color: #f9f9f9;
  transition: all 0.5s;
  z-index: 10;
`;
export const StyledSortListItem = styled.li<Props>`
  color: rgba(19, 61, 101, 0.7);
  font-size: 12px;
  padding: 5px 15px;
  transition: all 0.5s;
  background-color: transparent;
  &:hover {
    background-color: #b6b6b6;
  }
  &:last-child {
    border-radius: 0 0 12px 12px;
  }
`;
