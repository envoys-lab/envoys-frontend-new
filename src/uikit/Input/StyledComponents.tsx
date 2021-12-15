import styled, { css } from 'styled-components';
import searchIcon from './icons/search.svg';
interface Props {
  children?: React.ReactChild | React.ReactNode;
  activeSearchBtn?: number;
  selectedGas?: number;
  selectedSlip?: number;
  switcherChecked?: boolean;
}
export const InputWrapper = styled.div<Props>`
  position: relative;
  padding: 18px 25px;
  border-radius: 14px;
  border: 1px solid #e8e8ea;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  .search_menu {
    display: flex;
    align-items: center;
  }
  .icon {
    font-size: 18px;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 0 0 27px;
  background-image: url(${searchIcon});
  background-position: left;
  background-repeat: no-repeat;
  width: 65%;
`;

export const CurrencyBtn = styled.div<Props>`
  padding: 0 7px 0 22px;
  border-left: 1px solid #e5e5e5;
  font-size: 14px;
  font-weight: 400;
  color: #133d65;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => (props.activeSearchBtn === 1 ? '#F48020' : '#133D65')};
  .arrow-1 {
    transition: all 0.3s;
    transform: ${(props) => (props.activeSearchBtn === 1 ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
export const GasBtn = styled.div<Props>`
  padding: 0 7px 0 22px;
  border-left: 1px solid #e5e5e5;
  font-size: 14px;
  font-weight: 400;
  color: #133d65;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => (props.activeSearchBtn === 2 ? '#F48020' : '#133D65')};
  .arrow-2 {
    transition: all 0.3s;
    transform: ${(props) => (props.activeSearchBtn === 2 ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
export const SettingsBtn = styled.div<Props>`
  padding: 0 7px 0 22px;
  border-left: 1px solid #e5e5e5;
  font-size: 14px;
  font-weight: 400;
  color: #133d65;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => (props.activeSearchBtn === 3 ? '#F48020' : '#133D65')};
  .arrow-3 {
    transition: all 0.3s;
    transform: ${(props) => (props.activeSearchBtn === 3 ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
export const PopUpWrapper = styled.div<Props>`
  position: absolute;
  padding: 17px 20px 20px;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  right: 0;
  bottom: -20px;
  transform: translateY(100%);
  max-width: 370px;
  z-index: 10;
  .flex {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    .popup_title {
      color: #0f2b46;
      margin-bottom: 17px;
    }
    .switcher_wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      padding: 13px 0 0 0;
      position: relative;
      span {
        font-size: 12px;
      }
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        top: 0;
        left: 0;
        background-color: #133d65;
        opacity: 0.05;
        border-radius: 4px;
      }
    }
  }
  .flex2 {
    display: flex;
    align-items: center;
  }
`;

export const CurrencyList = styled.ul<Props>`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .search__currency-item {
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    width: 70px;
    display: flex;
    justify-content: center;
    color: #133d65;
    padding: 7px 24px;
    margin-bottom: 10px;
    border: 2px solid transparent;
    cursor: pointer;
    &.active {
      border-radius: 14px;
      border: 2px solid #f48020;
      color: #f48020;
    }
  }
`;

export const GasItem1 = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 23px;
  border-radius: 14px;
  margin-right: 10px;
  cursor: pointer;
  border: ${(props) => (props.selectedGas === 1 ? '2px solid #F48020' : '2px solid transparent')};
  .gad_item-title {
    margin-bottom: 2px;
    color: ${(props) => (props.selectedGas === 1 ? '#F48020' : '#133D65')};
    font-weight: 700;
  }
  .gad_item-subtitle {
    opacity: 0.5;
  }
`;
export const GasItem2 = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 23px;
  border-radius: 14px;
  margin-right: 10px;
  cursor: pointer;
  border: ${(props) => (props.selectedGas === 2 ? '2px solid #F48020' : '2px solid transparent')};
  .gad_item-title {
    margin-bottom: 2px;
    color: ${(props) => (props.selectedGas === 2 ? '#F48020' : '#133D65')};
    font-weight: 700;
  }
  .gad_item-subtitle {
    opacity: 0.5;
  }
`;
export const GasItem3 = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 23px;
  border-radius: 14px;
  cursor: pointer;
  border: ${(props) => (props.selectedGas === 3 ? '2px solid #F48020' : '2px solid transparent')};
  .gad_item-title {
    margin-bottom: 2px;
    color: ${(props) => (props.selectedGas === 3 ? '#F48020' : '#133D65')};
    font-weight: 700;
  }
  .gad_item-subtitle {
    opacity: 0.5;
  }
`;

export const SlipItem1 = styled.div<Props>`
  padding: 17px 23px;
  border-radius: 14px;
  border: ${(props) => (props.selectedSlip === 1 ? '2px solid #F48020' : '2px solid transparent')};
  color: ${(props) => (props.selectedSlip === 1 ? '#F48020' : '#133d65')};
  margin-right: 5px;
  cursor: pointer;
`;
export const SlipItem2 = styled.div<Props>`
  padding: 17px 23px;
  border-radius: 14px;
  margin-right: 63px;
  border: ${(props) => (props.selectedSlip === 2 ? '2px solid #F48020' : '2px solid transparent')};
  color: ${(props) => (props.selectedSlip === 2 ? '#F48020' : '#133d65')};
  cursor: pointer;
`;

export const SlipSwitcher = styled.input<Props>`
  position: relative;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  cursor: pointer;
  -webkit-appearance: none;
  background-color: ${(props) => (props.switcherChecked ? '#F48020' : '#F8F8F8')};
  outline: none;
  transition: 0.5s;
  box-shadow: inset 0px 4px 6px rgba(0, 23, 43, 0.05);
  margin-right: 8px;
  &::after {
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    background-color: #133d65;
    opacity: 0.1;
    top: 4px;
    right: 28px;
    border-radius: 50%;
  }
  ${(props) =>
    props.switcherChecked &&
    css`
      &::after {
        background-color: #fff;
        opacity: 1;
        right: 6px;
      }
    `}
`;
