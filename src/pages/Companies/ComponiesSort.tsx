import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from 'uikit/Flex/Flex'

const CNav = styled.nav`
    margin-top: 15px;
`

const CLink = styled(Link)`
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    margin:  0 15px 0 0;
    color: rgb(34, 97, 218);
    transition: .2s; 
    position: relative;

    &:hover{
        color: #f48020
    }
`

const IcoDropDownWrap = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    padding: 10px 15px;
    background: #F9F9F9;
    border-radius: 7px;
    z-index: 2;
    box-shadow: 0 4px 6px rgb(210 224 233 / 30%);
`

const IcoLink = styled(CLink)`
    padding: 10px 0;

}
`

const ComponiesSort:React.FC = () => {
    const [sortUrls, setSortUrls] = React.useState<string[]>(['Cryptocurrencies', 'ICO Calendar', 'DeFi', 'NFT', 'События', 'Тренды'])
    const [icoLink, setIcoLink] = React.useState<boolean>(false)
    const [iconLinks, setIconLinks] = React.useState<string[]>(['ICO', 'STO', 'IEO'])

    const linkSetting = (item: string) => {
        return item.replace(/\s+/g, '').toLowerCase()
    }

    const checkLinkIco = (item: string) => {
        if (item === 'ICO Calendar' && icoLink) {
            return <IcoDropDownWrap>
                    <Flex direction='column'>
                        {iconLinks.map((item, index) =>{
                            return <IcoLink key={index} to={linkSetting(item)}>{item}</IcoLink>
                        })}
                    </Flex>
            </IcoDropDownWrap>
        }
    }

    const IcoLinkHandler = (item: string) => {
        if(item === 'ICO Calendar'){
            setIcoLink(true)
        }
    }

    return (
        <CNav>
            {sortUrls.map((item, index) => {
                return(
                    <CLink
                        onMouseEnter={() => IcoLinkHandler(item)}
                        onMouseLeave={() => setIcoLink(false)} 
                        to={linkSetting(item)} 
                        key={index} >
                        {item}
                        {checkLinkIco(item)}
                    </CLink>
                ) 
            })}
        </CNav>
    )
}

export default ComponiesSort
