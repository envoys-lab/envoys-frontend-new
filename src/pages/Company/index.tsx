import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FullPage from "uikit/Pages/FullPage";
import Title from "uikit/Pages/Title";

const StyledInfoWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding: 40px 40px;
`;
const StyledLogo = styled.img``;
const StyledCompanyInfo = styled.div`
    margin-left: 35px;
`;
const StyledName = styled.h1`
    font-size: 21px;
    line-height: 25px;
`;
const StyledDescription = styled.div`
    padding-top: 10px;
    font-weight: 400;
    max-width: 500px; 
`;
const StyledActions = styled.div`
    width: 200px;
    min-height: 45px;
    display: flex;
    margin-left: 35px;
    flex-direction: column;
    margin-left: auto;
`;

const StyledTradeButton = styled.a`
    background: #F48020;
    border-radius: 14px;
    width: 200px;
    height: 45px;
    justify-content: center;
    align-items: center;
    display: flex;
    
    color: white;

    :hover {
        background: #2261DA;
        color: white;
    }

    transition: 0.3s;

`;

const StyledSocialLink = styled.a`
    min-height: 40px;
    color: #2261DA;
    border: 2px solid #2261DA;
    box-sizing: border-box;
    border-radius: 14px;

    justify-content: center;
    align-items: center;
    display: flex;

    transition: 0.3s;
    :hover {
        background: #2261DA;
        color: white;
    }

    margin-top: 10px;
   
`;

const SocialLink: React.FC<{children: React.ReactNode, href: string}> = ({children, href}) => {
    return <StyledSocialLink href={href} target="blank">
        <div style={{marginRight: "5px"}}>{children}</div>
        <i className="fa fa-share" /> 
    </StyledSocialLink>
}

const Company: React.FC = () => {
    const { companyId } = useParams<{companyId: string}>();
    return <FullPage>
        <Title>Company {companyId}</Title>
        
        <StyledInfoWrapper>
            <StyledLogo width="64px" height="64px" src="https://img.favpng.com/23/4/20/company-corporation-building-icon-png-favpng-xcyQpeSUspUX1REZD4KtbisrU.jpg" /> 
            <StyledCompanyInfo>
                <StyledName>Company Name</StyledName>
                <StyledDescription>
                    Crypto Emergency is a community of crypto enthusiasts united by an ecosystem with automated tools for daily financial transactions, storage of funds, creation and promotion of fintech innovations.
                    We solve the problem of integrating cryptocurrencies from cash and settlementoperations to the introduction of tokenization in the banking sector at the state level.
                </StyledDescription>
            </StyledCompanyInfo>
            <StyledActions>
                <StyledTradeButton href="#" target="blank">Trade</StyledTradeButton>
                <SocialLink href="#wp">Whitepapper</SocialLink>
                <SocialLink href="https://google.com">google.com</SocialLink>
                

            </StyledActions>

        </StyledInfoWrapper>




    </FullPage>
}
export default Company;