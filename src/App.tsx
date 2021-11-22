import React, { useState } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import history from './routerHistory'
import ResetCSS from './ResetCSS';
import SideBar from "./components/SideBar";
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './hooks/useAuth';
// import ConnectWallet from './components/ConnectWallet/index';
import Modal from "./components/Modal/Modal"
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store/store'
import Input from 'uikit/Input/Input';
import { SideBarHiddenButton } from './components/SideBar/SideBarHidden';
import useScreenWidth from 'hooks/useScreenWidth';
import Header from 'components/Header';
import Swap from 'components/Swap';
import Companies from 'pages/Companies';

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const [activeHiddenMenu, setActiveHiddenMenu] = useState(false);
  const width = useScreenWidth();

  return (
    <ReduxProvider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Modal />

        <Router history={history}>
          <ResetCSS></ResetCSS>
          <div style={{height: "100vh", maxWidth: "900px", margin: "auto", display: "flex", alignContent: "stretch", flexWrap: "wrap"}}>
            <SideBar active={activeHiddenMenu} setActive={setActiveHiddenMenu} />

            <div style={{marginLeft: "2px", height: "100%", flex: "1 1 auto"}}>
              <Header active={activeHiddenMenu} setActive={setActiveHiddenMenu} />
              
              <Switch>
                <Route path="/companies">
                  <Companies />
                </Route>
                <Route path="/">
                  l
                </Route>
              </Switch>
            </div>
          </div>

          
        </Router>
      </Web3ReactProvider>
    </ReduxProvider>
  )
}

export default React.memo(App)
