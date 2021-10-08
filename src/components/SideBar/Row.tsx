import React from "react"
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { AppDispatch, store } from "../../store/store";
import { modalSetAction } from '../../store/modal/reducer';
import ModalList, { Modals } from "../Modal/List";

const StyledRowDefault = styled.div`
    display: flex;
    height: 56px;
    align-items: center;
    justify-content: middle;

    :hover {
        background: rgba(0,0,0,0.1);
        cursor: pointer;
    }
`;

const StyledRowActive = styled(StyledRowDefault)`
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

const Row: React.FC<{active?: boolean}> = ({children, active = false}) => {
    const RowContainer = !active ? StyledRowDefault : StyledRowActive;
    const dispatch = useDispatch<AppDispatch>();
    
    const c = () => {
        dispatch(modalSetAction(ModalList.SelectToken));
    }
    return (
        <RowContainer onClick={c}>
            {active ? <MarkActive /> : <MarkDefault />}
            {children}
        </RowContainer>
    );
}
export default Row;