import Icon from "components/Icon";
import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import SideBarDesktopContent from "./SideBarDesktopContent";
import useOutsideAlerter from "hooks/useOutsideAlerter";
import logo from "../../logo.svg";
import StyledLogo from "./StyledLogo";

const StyledSideBarHidden = styled.div`
    position: fixed;
    left: -240px;
    top: 0;
    height: 100vh;
    z-index: 2;
    width: 240px;
    background: white;
    transition: 0.6s;
    text-align: center;
`;

const StyledCloseButton = styled.div`
    position: fixed;
    left: 260px;
    top: 20px;

    :hover {
        cursor: pointer;
    }
`;

const StyledSideBarHiddenWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;

    z-index: 6;
    width: 100%;
    height: 100%;
    transition: 1s;
`;

export const SideBarHiddenButton: React.FC<{active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>}> = ({active, setActive}) => {
    return <div onClick={() => setActive(!active)}>
        ...
    </div>;
}

const SideBarHidden: React.FC<{active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>}> = ({active, setActive}) => {
    const [closing, setClosing] = useState(false);

    const toggle = () => {
        const element = document.getElementById("hidden-side-bar");
        const wrapper = document.getElementById("hidden-side-bar-wrapper");
        if(element) {
            element.style.left = "-240px";
            wrapper.style['backdrop-filter'] = "none";
            setClosing(true);
        }

        setTimeout(() => {
            setActive(!active);
        }, 800)
    }


    useEffect(() => {
        const element = document.getElementById("hidden-side-bar");
        const wrapper = document.getElementById("hidden-side-bar-wrapper");
        if(element) {
            element.style.left = "0px";
            wrapper.style['backdrop-filter'] = "blur(6px)";
        }
        setTimeout(() => {
            setClosing(false);
        }, 800)
    }, [active])

    const CloseButton = () => {
        
        return  <span onClick={toggle}>
                    <StyledCloseButton>
                        <Icon content="fa fa-times" />
                    </StyledCloseButton>
                </span>;
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => {

    });

    return (
        <>
            {active && 
            <StyledSideBarHiddenWrapper ref={wrapperRef} id="hidden-side-bar-wrapper">
                <StyledSideBarHidden id="hidden-side-bar">
                    <StyledLogo src={logo} />
                    <SideBarDesktopContent />
                    {!closing && <CloseButton />}
                </StyledSideBarHidden>
            </StyledSideBarHiddenWrapper>}
            
        </>
    )
}

export default SideBarHidden;