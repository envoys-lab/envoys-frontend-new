import React from 'react'
import styled from 'styled-components'
import Row from './Row'
import Icon from 'components/Icon'
import sideBar from 'sideBar'

const StyledRowContainer = styled.div`
  text-align: left;
  width: 100%;
`

const SideBarMiniContent: React.FC = () => {
  return (
    <>
      <StyledRowContainer>
        {sideBar.map((e, index) => (
          <Row key={index} disable={e.disable} to={e.to}>
            <Icon content={`fa ${e.icon} fa-fw`} />
          </Row>
        ))}
      </StyledRowContainer>
    </>
  )
}

export default SideBarMiniContent
