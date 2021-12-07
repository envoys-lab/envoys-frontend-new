import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { navAddAction } from 'store/company/navbar'
import { RootState } from 'store/store'
import { AppDispatch } from '../../store/store'
import { navClearAction } from '../../store/company/navbar'
import styled from 'styled-components'

export const NavBarWrapper: FunctionComponent = (props) => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(navClearAction())

    const elements = document.getElementsByClassName('hashable-block')
    Array.from(elements).map((element) => {
      dispatch(navAddAction([[element.getAttribute('title-attr'), element.getAttribute('hash-attr')]]))
    })
  }, [props.children])
  return <div {...props}>{props.children}</div>
}

const StyledNavBar = styled.ul`
  display: flex;
  align-items: stretch; /* Default */
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  margin: 0;
  padding: 12px;
`

const StyledNavItem = styled.li`
  display: block;
  flex: 0 1 auto; /* Default */
  list-style-type: none;
  color: #133d65;
`

export const NavBar: FunctionComponent = () => {
  const navs = useSelector<RootState, string[][]>((state) => state.navbar)
  // const [active] = useState(false);

  return (
    <StyledNavBar>
      {navs.map((nav) => {
        const goTo = () => {
          const el = document.getElementById('hshblk-' + nav[1])
          el.scrollIntoView(true)
        }

        return (
          <StyledNavItem key={nav[1]}>
            <a onClick={goTo} href={'#' + nav[1]}>
              {nav[0]}
            </a>
          </StyledNavItem>
        )
      })}
    </StyledNavBar>
  )
}

export const NavItem: FunctionComponent<{ children?: ReactNode; title: string; hash: string }> = ({
  children = <></>,
  title,
  hash,
}) => {
  return (
    <div id={'hshblk-' + hash} className="hashable-block" hash-attr={hash} title-attr={title}>
      {children}
    </div>
  )
}
