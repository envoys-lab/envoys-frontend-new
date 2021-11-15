import React from "react";
import styled from 'styled-components'
import logo from "../../logo_mini.svg";
import Row from "./Row";
import Icon from "../Icon";
import StyledLogo from "./StyledLogo";
import sideBar from "sideBar";
import SideBarMiniContent from "./SideBarMiniContent";

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
                <SideBarMiniContent />
            </StyledSideBar>
        </>
    )
}

export default SideBarMini;