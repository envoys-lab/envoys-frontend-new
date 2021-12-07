import React, { useState } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import history from './routerHistory'
import ResetCSS from './ResetCSS'
import SideBar from './components/SideBar'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './hooks/useAuth'
// import ConnectWallet from './components/ConnectWallet/index';
import Modal from './components/Modal/Modal'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store/store'
import Input from 'uikit/Input/Input'
import { SideBarHiddenButton } from './components/SideBar/SideBarHidden'
import useScreenWidth from 'hooks/useScreenWidth'
import Header from 'components/Header'
import Swap from 'components/Swap'
import Companies from 'pages/Companies'
import styled from 'styled-components'
import Company from 'pages/Company'
import RoadMap from 'pages/Company/Roadmap'
import { NavBar, NavBarWrapper, NavItem } from 'pages/Company/NavBar'
import NavBarableContent from 'pages/Company/NavBarableContent'

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const StyledMain = styled.div`
  height: 100vh;
  max-width: 1360px;
  margin: auto;
  display: flex;
  align-content: stretch;
  // flex-wrap: wrap;
  // flex-direction: column;
`

const App: React.FC = () => {
  const [activeHiddenMenu, setActiveHiddenMenu] = useState(false)

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

                <Route path="/test">
                  <NavBarableContent style={{ maxHeight: '100%' }}>
                    <NavItem title="Test" hash="test">
                      Test content
                    </NavItem>
                    <NavItem title="Test2" hash="test2">
                      Test content2
                    </NavItem>
                    <NavItem title="Test2" hash="test2">
                      Test content2
                    </NavItem>
                    <NavItem title="Test2" hash="test3">
                      Test content2
                    </NavItem>
                    <NavItem title="Test2" hash="test4">
                      Test content2
                    </NavItem>
                    <NavItem title="Test2" hash="test5">
                      Test content2
                    </NavItem>
                  </NavBarableContent>
                </Route>

                <Route path="/">Coming soong...</Route>
              </Switch>
            </div>
          </StyledMain>
        </Router>
      </Web3ReactProvider>
    </ReduxProvider>
  )
}

export default React.memo(App)
