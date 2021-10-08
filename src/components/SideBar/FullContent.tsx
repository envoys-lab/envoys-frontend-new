import React from "react";
import styled from 'styled-components'
import Row from "./Row";
import Icon from "components/Icon";

const StyledRowContainer = styled.div`
    text-align: left;
    width: 100%;
`;


const FullContent: React.FC = () => {
    
    return (
        <>
            <StyledRowContainer>
                <Row><Icon content="fa fa-user fa-fw" /> My page</Row>
                <Row active={true}><Icon content="fa fa-wallet fa-fw" /> Wallet</Row>
                <Row><Icon content="fa fa-building fa-fw" /> Companies</Row>
                <Row><Icon content="fa fa-sync fa-fw" /> Trade</Row>
                <Row><Icon content="fa fa-coins fa-fw" /> Finance</Row>

                <div style={{bottom: "20px", position: "absolute", width: "240px"}}>
                    <Row><Icon content="fa fa-cog fa-fw" />Account</Row>
                    <Row><Icon content="fa fa-sign-out fa-fw" />Log out</Row>
                </div>
            </StyledRowContainer>
            
        </>
    )
}

export default FullContent;