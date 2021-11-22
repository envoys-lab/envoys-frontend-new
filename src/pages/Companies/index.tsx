import FullPage from "uikit/Pages/FullPage";
import Title from "uikit/Pages/Title";
import React from "react";
import CompanyItem from "./CompanyItem";
import styled from "styled-components";

const StyledCompaniesBodyWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledCompanyItemWrapper = styled.div`
    flex-grow: 1;
    width: 33.3%;
`;
const StyledCompanyItem = styled.div`
    height: 100px;
    margin: 20px;

`;

const Companies: React.FC = () => {
    return <FullPage>
        <Title>Hot and tranding Blockchain companies</Title>

        <StyledCompaniesBodyWrapper>
            <StyledCompanyItemWrapper>
                <StyledCompanyItem>
                    <CompanyItem name="Google" />
                </StyledCompanyItem>
            </StyledCompanyItemWrapper>
            <StyledCompanyItemWrapper>
                <StyledCompanyItem>
                    <CompanyItem name="Company" />
                </StyledCompanyItem>
            </StyledCompanyItemWrapper>
            <StyledCompanyItemWrapper>
                <StyledCompanyItem>
                    <CompanyItem name="Company" />
                </StyledCompanyItem>
            </StyledCompanyItemWrapper>
            <StyledCompanyItemWrapper>
                <StyledCompanyItem>
                    <CompanyItem name="c" />
                </StyledCompanyItem>
            </StyledCompanyItemWrapper>
        </StyledCompaniesBodyWrapper>
        
    </FullPage>
}

export default Companies;