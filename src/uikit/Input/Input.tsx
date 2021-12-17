import React from 'react';
import {
  CurrencyBtn,
  CurrencyList,
  GasBtn,
  GasItem1,
  GasItem2,
  GasItem3,
  InputWrapper,
  PopUpWrapper,
  SearchInput,
  SettingsBtn,
  SlipItem1,
  SlipItem2,
  SlipSwitcher,
} from './StyledComponents';
import './fonts/css/fontello.css';
import { currencies } from './currency-store';
interface Props {
  children?: React.ReactChild | React.ReactNode;
  activeSearchBtn?: number;
  setActiveSearchBtn?: React.Dispatch<React.SetStateAction<any>>;
}
const Input: React.FC<Props> = ({ children, activeSearchBtn, setActiveSearchBtn }) => {
  const [currentCurrency, setCurrentCurrency] = React.useState<string>('USD');
  const [selectCurrencyId, setSelectCurrencyId] = React.useState<number>(0);
  const [selectedGas, setSelectedGas] = React.useState<number>(2);
  const [selectedSlip, setSelectedSlip] = React.useState<number>(2);
  const [switcherChecked, setSwitcherChecked] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState<string>('');

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <InputWrapper>
      <SearchInput
        type="search"
        placeholder="Search by account, token,ENS..."
        value={searchInput}
        onChange={handleInputChange}
      />

      <div className="search_menu" onClick={(e) => e.stopPropagation()}>
        <CurrencyBtn
          activeSearchBtn={activeSearchBtn}
          onClick={() => (activeSearchBtn !== 1 ? setActiveSearchBtn(1) : setActiveSearchBtn(0))}
        >
          <span>{currentCurrency}</span>
          <span className="icon arrow-1 icon-angle-down"></span>
        </CurrencyBtn>
        <GasBtn
          activeSearchBtn={activeSearchBtn}
          onClick={() => (activeSearchBtn !== 2 ? setActiveSearchBtn(2) : setActiveSearchBtn(0))}
        >
          <span className="icon icon-gas"></span>
          <span className="icon arrow-2 icon-angle-down"></span>
        </GasBtn>
        <SettingsBtn
          activeSearchBtn={activeSearchBtn}
          onClick={() => (activeSearchBtn !== 3 ? setActiveSearchBtn(3) : setActiveSearchBtn(0))}
        >
          <span className="icon icon-settings"></span>
          <span className="icon arrow-3 icon-angle-down"></span>
        </SettingsBtn>
      </div>
      {activeSearchBtn === 1 || activeSearchBtn === 2 || activeSearchBtn === 3 ? (
        <PopUpWrapper onClick={(e) => e.stopPropagation()}>
          {activeSearchBtn === 1 && (
            <CurrencyList>
              {currencies.map((u, index) => (
                <li
                  className={
                    selectCurrencyId === index || currentCurrency === u.item
                      ? 'search__currency-item active'
                      : 'search__currency-item'
                  }
                  key={index}
                  onClick={() => {
                    setCurrentCurrency(u.item);
                    setSelectCurrencyId(index);
                  }}
                >
                  {u.item}
                </li>
              ))}
            </CurrencyList>
          )}
          {activeSearchBtn === 2 && (
            <div className="flex">
              <span className="popup_title">Gas settings</span>
              <div className="flex2">
                <GasItem1 selectedGas={selectedGas} onClick={() => setSelectedGas(1)}>
                  <span className="gad_item-title">Standart</span>
                  <span className="gad_item-subtitle">(5 Gwei)</span>
                </GasItem1>
                <GasItem2 selectedGas={selectedGas} onClick={() => setSelectedGas(2)}>
                  <span className="gad_item-title">Fast</span>
                  <span className="gad_item-subtitle">(6 Gwei)</span>
                </GasItem2>
                <GasItem3 selectedGas={selectedGas} onClick={() => setSelectedGas(3)}>
                  <span className="gad_item-title">Standart</span>
                  <span className="gad_item-subtitle">(6 Gwei)</span>
                </GasItem3>
              </div>
            </div>
          )}
          {activeSearchBtn === 3 && (
            <div className="flex">
              <span className="popup_title">Slip Tolerance</span>
              <div className="flex2">
                <SlipItem1 selectedSlip={selectedSlip} onClick={() => setSelectedSlip(1)}>
                  <span>2%</span>
                </SlipItem1>
                <SlipItem2 selectedSlip={selectedSlip} onClick={() => setSelectedSlip(2)}>
                  <span>3%</span>
                </SlipItem2>
              </div>
              <div className="switcher_wrapper">
                <span>Slip Tolerance</span>
                <SlipSwitcher
                  type="checkbox"
                  switcherChecked={switcherChecked}
                  onClick={() => setSwitcherChecked(!switcherChecked)}
                />
              </div>
            </div>
          )}
        </PopUpWrapper>
      ) : (
        ''
      )}
    </InputWrapper>
  );
};

export default Input;
