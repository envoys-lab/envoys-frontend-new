import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCompanyItem = styled.div`
    padding: 10px;
    background: white;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
    border-radius: 14px;
    border: 1px solid #F9F9F9;
    height: 110px;
    max-width: 100%;
    display: flex;
`;

const StyledCompnayName = styled.span`
    margin-left: 25px;
    margin-top: 21px;
`;

const StyledRateWrapper = styled.div`
    margin-left: 25px;
    margin-top: 21px;
    margin-left: auto;
    padding-right: 20px;
    text-align: center;
`;


const StyledImage = styled.img`
    margin-top: 10px;
    margin-left: 10px;
`;



const StyledCompanyFavoriteStar = styled.i`
    margin-top: 10px;

    :hover {
        opacity: 0.5;
    }
    color: silver;
    border-radius: 4px;
    cursor: pointer;    
`;

const StyledCompanyFavoriteStarActive = styled(StyledCompanyFavoriteStar)`
    color: #FFBF1C !important;
`;


const CompanyFavoriteStar: React.FC<{favorite: boolean}> = ({favorite}) => {
    const [favoriteState, setFavoriteState] = useState(favorite);



    const toggle = () => {
        setFavoriteState(!favoriteState);
    }

    const AbstractStyledComponent = favoriteState ? StyledCompanyFavoriteStarActive : StyledCompanyFavoriteStar;
    return <AbstractStyledComponent onClick={toggle} className={"fa fa-star"} ></AbstractStyledComponent>
}

const CompanyItem: React.FC<{
        name: string, 
        status?: number, 
        endtime?: number, 
        rate?: number, 
        favorite?: boolean,
        logo?: string
    }> = ({name, status, endtime, rate, favorite, logo}) => {

    const finishedName = name.length <= 26 ? name : name.slice(0, 26 - 3) + "...";
    
    const statusCode = status === undefined ? 0 : status;
    const statusString = statusCode === 0 ? "Ongoing" : "Finished";
    const statusColor = statusCode === 0 ? "#2261DA" : "silver";
    
    return <Link to={"/company/" + 1}><StyledCompanyItem>
            <StyledImage width="40px" height="40px" src="https://img.favpng.com/23/4/20/company-corporation-building-icon-png-favpng-xcyQpeSUspUX1REZD4KtbisrU.jpg" /> 
            <StyledCompnayName>
                <p>{finishedName}</p>
                <p style={{color: statusColor, fontSize: "14px", lineHeight: "16px"}}>{statusString}</p>
                <p style={{color: "#133D65", fontSize: "14px", lineHeight: "16px"}}>Will end in 14 days</p>
            </StyledCompnayName>
            <StyledRateWrapper>
                <span style={{color: "#44AE9B"}}>3.84</span>
                <div><CompanyFavoriteStar favorite={favorite} /></div>
            </StyledRateWrapper>
        </StyledCompanyItem>
    </Link>;
}

export default CompanyItem;