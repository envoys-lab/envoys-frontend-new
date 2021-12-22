import React from 'react';

import { createGlobalStyle } from 'styled-components';
import CompanyPage from './components/company';
const Global = createGlobalStyle`
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
`;

const Company: React.FC = () => {
  return (
    <>
      <Global />
      <CompanyPage />
    </>
  );
};

export default Company;
