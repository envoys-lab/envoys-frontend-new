import React from 'react';
import Kyc from "./components/kyc";
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import {store} from "./redux";

const Global =  createGlobalStyle`
 body{
   background: #E5E5E5;
   font-family: 'Roboto', sans-serif;
 }
 *{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   outline: none;
 }
`

const KYC = () => {
    return (
        <Provider store={store}>
        <>
        <Global/>
        <Kyc/>
        </>
        </Provider>
    );
};

export default KYC;