import React, { FC } from 'react';
import styled from 'styled-components';
import stat from '../img/stat.png';
import mark from '../img/mark.png';
import NavBar from './navBar';
import AboutCompany from './aboutCompany';
import RoadMap from './RoadMap';

const CompanyWrapper = styled.div`
  max-width: 960px;
  padding: 21px 44px 21px 14px;
  background: white;
  margin: 0 auto;
  position: relative;
  border-radius: 14px;
  box-shadow: 0px 10px 20px rgb(0 0 0 / 6%);
`;

const CompanyTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  /* Dark clear */
  color: #0f2b46;
`;

const CompanyDescBlock = styled.div`
  max-width: 714px;
  display: flex;
  margin-top: 40px;
`;

const CompanyImg = styled.div`
  width: 63px;
  height: 63px;
  border-radius: 14px;
  border: 1px solid lightgrey;
  margin-right: 36px;
`;

const CompanyName = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  /* Dark clear */
  color: #0f2b46;
`;

const CompanyDesc = styled.p`
  margin-top: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  /* Main_Dark */

  color: #133d65;
  max-width: 543px;
`;

const CompanyRightBlock = styled.div`
  float: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  @media (max-width: 930px) {
    display: none;
  }
`;

const ResponsiveRightBlock = styled.div`
  display: none;
  @media (max-width: 930px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media (max-width: 585px) {
    display: flex;
    flex-direction: column;
  }
`;

const RightBlockBtn = styled.div`
  max-width: 202px;
  display: flex;
  border-radius: 14px;
  @media (max-width: 930px) {
    display: flex;
    flex-direction: column;
  }
`;

const Btns = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f48020;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
  border-radius: 14px 0 0 14px;

  &.second-btn {
    border-radius: 0 14px 14px 0;
    @media (max-width: 930px) {
      border-radius: 14px 14px 14px 14px;
      margin-top: 15px;
    }
  }
  @media (max-width: 930px) {
    border-radius: 14px 14px 14px 14px;
  }
`;

const LinkBtns = styled.button`
  max-width: 172px;
  padding: 12px 46px;
  border: 2px solid #2261da;
  box-sizing: border-box;
  border-radius: 14px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  margin-top: 15px;
  color: #2261da;
  background: transparent;
`;

const YouTubeBlock = styled.div`
  max-width: 662px;
  height: 372px;
  background: gray;
  margin-top: 30px;
`;

const Details = styled.div`
  max-width: 662px;
  display: flex;
  margin-top: 70px;
  justify-content: space-between;
  @media (max-width: 682px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TokenDetails = styled.p`
  max-width: 316px;
  padding: 20px 120px 20px 20px;
  border: 1px solid #e6e6e6;
  border-radius: 14px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  color: #133d65;
  &:nth-child(2) {
    margin-top: 30px;
  }

  @media (max-width: 682px) {
    max-width: 400px;
  }
`;
const DetailsTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #133d65;
`;

const DetailsSubtitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin-top: 20px;
  color: #133d65;
`;

const CompanyPage: FC = () => {
  const A = window.innerWidth;
  console.log(A);
  return (
    <CompanyWrapper>
      <CompanyTitle>Hot and trending Blockchain companies</CompanyTitle>
      <CompanyDescBlock>
        <CompanyImg />
        <div>
          <CompanyName>Company Name</CompanyName>
          <CompanyDesc>
            Crypto Emergency is a community of crypto enthusiasts united by an ecosystem with automated tools for daily
            financial transactions, storage of funds, creation and promotion of fintech innovations. We solve the
            problem of integrating cryptocurrencies from cash and settlementoperations to the introduction of
            tokenization in the banking sector at the state level.
          </CompanyDesc>
        </div>
      </CompanyDescBlock>
      <ResponsiveRightBlock>
        <RightBlockBtn>
          <Btns>BUY</Btns>
          <Btns className="second-btn">SELL</Btns>
        </RightBlockBtn>
        <img src={stat} alt="" />
        <div style={{ maxWidth: '172px' }}>
          <LinkBtns>Writepapper</LinkBtns>
          <LinkBtns>crtyptoemorg</LinkBtns>
        </div>
        <img width="82px" height="53px" src={mark} alt="" />
      </ResponsiveRightBlock>
      <CompanyRightBlock>
        <RightBlockBtn>
          <Btns>BUY</Btns>
          <Btns className="second-btn">SELL</Btns>
        </RightBlockBtn>
        <img src={stat} alt="" />

        <LinkBtns>Writepapper</LinkBtns>
        <LinkBtns>crtyptoemorg</LinkBtns>
        <img width="82px" height="53px" src={mark} alt="" />
      </CompanyRightBlock>
      <NavBar />
      <YouTubeBlock>block</YouTubeBlock>
      <Details>
        <div>
          <TokenDetails>
            <div style={{ maxWidth: '160px' }}>
              <DetailsTitle>Token Details</DetailsTitle>
              <DetailsSubtitle>Ticket</DetailsSubtitle>
              KUBE
              <DetailsSubtitle> Total supply</DetailsSubtitle>
              480.000.000
              <DetailsSubtitle>Token Distribution</DetailsSubtitle>
              16% Pre-sale 10% Liquidity locked 10% Board 10% Burn 4% Ecosystem expansion 36% Public offering 14% ICO
              <DetailsSubtitle>Accepted Currencies</DetailsSubtitle>
              ADA
              <DetailsSubtitle> Min Contribution</DetailsSubtitle>
              100 EUR
            </div>
          </TokenDetails>
        </div>
        <div>
          <TokenDetails>
            <DetailsTitle>Bonus Structure</DetailsTitle>
            <DetailsSubtitle>Referral program</DetailsSubtitle>
          </TokenDetails>
          <TokenDetails>
            <DetailsTitle>Additional Details</DetailsTitle>
            <DetailsSubtitle>Platform</DetailsSubtitle>
            Cardano
            <DetailsSubtitle>Whitelist</DetailsSubtitle>
            Yes , from Sep 27, 2021 till Nov 3, 2021
            <DetailsSubtitle>Categories</DetailsSubtitle>
            Platform
          </TokenDetails>
        </div>
      </Details>
      <AboutCompany />
      <RoadMap />
    </CompanyWrapper>
  );
};

export default CompanyPage;
