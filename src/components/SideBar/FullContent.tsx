import React from "react";
import styled from 'styled-components'
import Row from "./Row";
import Icon from "components/Icon";
import sideBar from "sideBar";

const StyledRowContainer = styled.div`
    text-align: left;
    width: 100%;
`;


const FullContent: React.FC = () => {
    
    return (
        <>
            <StyledRowContainer>
                {/* <Row disable={true}><Icon content="fa fa-user fa-fw" /> My page</Row>
                <Row disable={true}><Icon content="fa fa-wallet fa-fw" /> Wallet</Row>
                <Row to="/companies"><Icon content="fa fa-building fa-fw" /> Companies</Row>
                <Row disable={true}><Icon content="fa fa-sync fa-fw" /> Trade</Row>
                <Row disable={true}><Icon content="fa fa-coins fa-fw" /> Finance</Row> */}
                {sideBar.map(e => (
                    <Row to={e.to} disable={e.disable}><Icon content={`fa ${e.icon} fa-fw`} /> {e.title}</Row>
                ))}
                <div style={{bottom: "20px", position: "absolute", width: "240px"}}>
                    <Row disable={true}><Icon content="fa fa-cog fa-fw" />Account</Row>
                    <Row disable={true}><Icon content="fa fa-sign-out fa-fw" />Log out</Row>
                </div>
            </StyledRowContainer>
            
        </>
    )
}

export default FullContent;