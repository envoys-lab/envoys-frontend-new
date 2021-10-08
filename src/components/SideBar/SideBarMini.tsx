import React from "react";
import styled from 'styled-components'
import logo from "../../logo_mini.svg";
import Row from "./Row";
import Icon from "../Icon";
import StyledLogo from "./StyledLogo";

const StyledSideBar = styled.div`
    background: white;
    width: 70px;
    height: 100%;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    text-align: center;
`;

const StyledRowContainer = styled.div`
    text-align: left;
    width: 100%;
`;

const SideBarMini: React.FC = () => {
    return (
        <>
            <StyledSideBar>
                <StyledLogo src={logo} />

                <StyledRowContainer>
                    <Row><Icon content="fa fa-user fa-fw" /></Row>
                    <Row active={true}><Icon content="fa fa-wallet fa-fw" /></Row>
                    <Row><Icon content="fa fa-building fa-fw" /></Row>
                    <Row><Icon content="fa fa-sync fa-fw" /></Row>
                    <Row><Icon content="fa fa-coins fa-fw" /></Row>
                </StyledRowContainer>
                
            </StyledSideBar>
        </>
    )
}

export default SideBarMini;