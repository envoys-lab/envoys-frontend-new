import React, { FC } from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  max-width: 662px;
  margin-top: 300px;
  margin-left: 56px;
  margin-bottom: 67px;
`;

const AboutTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* Main_Dark */
  color: #133d65;
  margin-bottom: 30px;
  margin-top: 35px;
`;

const About = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  /* Main_Dark */
  color: #133d65;
`;

const AboutCompany: FC = () => {
  return (
    <AboutWrapper>
      <AboutTitle>About Company Name</AboutTitle>
      {/* <About>
        Crypto Emergency’s token - EMERGENCY token (CEM), is created on the blockchain Binance Smart Chain. The total
        amount of tokens is limited to 187 million. To minimize investors’ risks, 50% of tokens will be locked for 2
        years with a gradual unlocking of 2% each month. Once every 6 months, Crypto Emergency will repurchase tokens in
        the amount of 5% of the ecosystem's discounted cash flow. The redeemed tokens will be burned to regulate the CEM
        value. To guarantee that the holders earn a profit and that the ecosystem replenishes the liquidity pool, during
        the design and deployment of the first components, the commission will be 3% for carrying out transaction
        processes. Stablecoin BUSD will act as a currency pair in the liquidity pool.
      </About> */}
      <AboutTitle>Features</AboutTitle>
      <About>
        The following key products are being created: -a tokenized QA platform for newbies and professionals in the
        fintech industry; -programs to support startups; - a crypto university integrated with government training
        programs to train highly sought-after personnel in the economic sector; - all-in-one a set of tools with light
        interfaces for a wide range of users (wallet, exchange, depository, trust listing); - a news detector that
        analyzes, using artificial intelligence, the veracity of materials and their actual impact on cryptocurrency
        markets; - cross-platform advertising and traffic generation tools with a high conversion rate both through
        their own solutions and with the expansion of the advertising network by partners
      </About>
      <AboutTitle>Technical info</AboutTitle>
      <About>
        KubeCoin, which powers kubecoin.org, is a decentralized DeFi Token. It provides a high utility layer to our
        KubeSystem. It can be used on our platforms and acts as a reward for our returning customers and promoters. The
        long-term goal is to become the major currency in the leisure and travel industries. The first idea was to use
        it just as a Marketing tool to increase consumer loyalty and help promoters/influencers to spread the concept
        through our community and attract new users. We realized it’s much more than that. KubeCoin is the basis to
        directly connect our platforms with our users. The long term goal is to revolutionize the leisure and travel
        industries and become the sole currency through our multi-brand platforms and partners.
      </About>
    </AboutWrapper>
  );
};

export default AboutCompany;
