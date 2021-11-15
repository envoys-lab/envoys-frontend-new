import React, { useEffect } from "react"
import styled from "styled-components";
// import { useDispatch } from 'react-redux';
// import { AppDispatch, store } from "../../store/store";
// import { modalSetAction } from '../../store/modal/reducer';
// import ModalList, { Modals } from "../Modal/List";
import { Link } from "react-router-dom";
import history from "routerHistory";
import { useLocation } from 'react-router-dom';


const StyledRowDefault = styled.div`
    display: flex;
    height: 56px;
    align-items: center;
    justify-content: middle;
`;

const StyledRowNotDisabled = styled(StyledRowDefault)`
    :hover {
        background: rgba(0,0,0,0.1);
        cursor: pointer;
    }
`;

const StyledRowDisabled = styled(StyledRowDefault)`
    opacity: 0.3;
    cursor: default;
`;


const StyledRowActive = styled(StyledRowNotDisabled)`
    color: #F48020;
`;

const MarkDefault = styled.div`
    height: 30px;
    width: 3px;
    border-radius: 2px;
    margin-right: 20px;

`;
const MarkActive = styled(MarkDefault)`
    background: #F48020;
`;


const TestElement: React.FC = () => {
    return <>Hello World</>
}

const Row: React.FC<{disable?: boolean, to?: string}> = ({children, disable = false, to = undefined}) => {
    const location = useLocation();
    const active = to === location.pathname;

    if(disable && active) {
        throw Error("Row active and disable");
    }
    const RowContainer = disable ? 
        StyledRowDisabled : 
        (!active ? 
            StyledRowNotDisabled : 
            StyledRowActive
        );
    
    
    // const dispatch = useDispatch<AppDispatch>();
    
    // const c = () => {
    //     dispatch(modalSetAction(ModalList.SelectToken));
    // }

    const nonLinkedcontext = (<RowContainer className={disable? "" : "active"}>
            {active && !disable ? <MarkActive /> : <MarkDefault />}
            <span style={{opacity: disable ? "0.3" : "1"}}>
                {children}
            </span>
        </RowContainer>);
    
    const linkedContext = (<Link to={to}>
            {nonLinkedcontext}
        </Link>);

    return (
        <>
            {to ? linkedContext : nonLinkedcontext}
        </>
    );
}
export default Row;