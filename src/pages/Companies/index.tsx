import FullPage from 'uikit/Pages/FullPage';
import React from 'react';
import CompanyItem from './CompanyItem';
import styled from 'styled-components';
import ComponiesSort from './ComponiesSort';
import { Flex } from 'uikit/Flex/Flex';
import Title from 'uikit/Pages/Title';

const StyledCompaniesBodyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-gap: 30px 45px;
  justify-items: stretch;
  align-items: stretch;
  margin-top: 40px;
  width: 100%;
`;

const StyledCompanyItemWrapper = styled.div`
  width: 100%;
  display: flex;
`;
const StyledCompanyItem = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  margin: 20px;
`;

const Companies: React.FC = () => {
  return (
    <FullPage>
      <Title>Hot and tranding Blockchain companies</Title>
      <ComponiesSort/>

      <StyledCompaniesBodyWrapper>
        <CompanyItem name="Comany name" />
        <CompanyItem name="Comany name" />
        <CompanyItem name="Comany name" />
        <CompanyItem name="Comany name" />
        <CompanyItem name="Comany name" />
        <CompanyItem name="Comany name" />
      </StyledCompaniesBodyWrapper>
    </FullPage>
  );
};

export default Companies;
