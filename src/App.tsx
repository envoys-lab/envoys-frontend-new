import React, { useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import BigNumber from 'bignumber.js';
import history from './routerHistory';
import ResetCSS from './ResetCSS';
import SideBar from './components/SideBar';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './hooks/useAuth';
// import ConnectWallet from './components/ConnectWallet/index';
import Modal from './components/Modal/Modal';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';
import Header from 'components/Header';
import Companies from 'pages/Companies';
import styled from 'styled-components';
import Company from 'pages/Company';

import Swap from 'pages/Swap';
import Pool from 'pages/Pool';
import Farm from 'pages/Farm/Farm';

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

const StyledMain = styled.div`
  height: 100vh;
  max-width: 1360px;
  margin: auto;
  display: flex;
  align-content: stretch;
  box-sizing: border-box;
  // flex-wrap: wrap;
  // flex-direction: column;
`;

const App: React.FC = () => {
  const [activeHiddenMenu, setActiveHiddenMenu] = useState(false);

  return (
    <ReduxProvider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Modal />

        <Router history={history}>
          <ResetCSS></ResetCSS>
          <StyledMain>
            <SideBar active={activeHiddenMenu} setActive={setActiveHiddenMenu} />

            <div style={{ marginLeft: '2px', height: '100%', flex: '1 1 auto', flexWrap: 'nowrap' }}>
              <Header active={activeHiddenMenu} setActive={setActiveHiddenMenu} />

              <Switch>
                <Route path="/companies">
                  <Companies />
                </Route>

                <Route path="/company/:companyId">
                  <Company />
                </Route>

                <Route path="/swap/:pair">
                  <Swap />
                </Route>

                <Route path="/pool">
                  <Pool />
                </Route>
                <Route path="/farm">
                  <Farm />
                </Route>

                <Route path="/">Coming soong...</Route>
              </Switch>
            </div>
          </StyledMain>
        </Router>
      </Web3ReactProvider>
    </ReduxProvider>
  );
};

export default React.memo(App);
