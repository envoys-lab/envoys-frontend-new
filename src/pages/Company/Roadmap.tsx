import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

const StyledRoadMapItem = styled.div`
  display: inline-block;

  height: 5.5rem;
  border-left: 2px dashed #133d65 !important;
  position: relative;

  &:before {
    content: url(/assets/svg/roadmap-elipse.svg);
    width: 20px;
    height: 20px;

    border-radius: 50%;
    position: absolute;

    left: -10px;
    top: -3px;
  }

  // background: rgba(0,255,0,0.5);
`

const StyledRoadMapItemSkiped = styled(StyledRoadMapItem)`
  &:before {
    content: url(/assets/svg/roadmap-elipse-skiped.svg) !important;
  }
  // border-left: 2px dashed #F48020;
`

const StyledRoadMapItemCurrent = styled(StyledRoadMapItem)`
  &:before {
    content: url(/assets/svg/roadmap-elipse-current.svg) !important;
  }
`

const StyledRoadMapItemWrapper = styled.li`
  // padding-bottom: 5.5rem;
  // border-left: 2px dashed #133D65;
  // position: relative;
  // padding-left: 20px;
  // margin-left: 10px;

  &:last-child {
    border: 0px !important;
    padding-bottom: 0;

    ${StyledRoadMapItem} {
      border: 0 !important;
      padding: 0;
    }
  }
`

const StyledDate = styled.div`
  display: inline-block;
  margin-right: 140px;
`

const StyledRoadMap = styled.ul`
  list-style-type: none;
`

const StyledRoadMapContent = styled.span`
  background: #ffffff;

  border: 1px solid #f9f9f9;
  box-sizing: border-box;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  padding: 15px;
  margin-left: 50px;
`

enum RoadMapItemType {
  Future,
  Skiped,
  Current,
}

const RoadMapItemBase: FunctionComponent<{
  children: React.ReactNode
  state: RoadMapItemType
  year?: number
  q?: number
}> = ({ children, state, year = 2021, q = 1 }) => {
  const SelectedWrapper =
    state === RoadMapItemType.Skiped
      ? StyledRoadMapItemSkiped
      : state === RoadMapItemType.Current
      ? StyledRoadMapItemCurrent
      : StyledRoadMapItem

  return (
    <StyledRoadMapItemWrapper>
      <StyledDate>
        Q{q} {year}
      </StyledDate>
      <SelectedWrapper>
        <StyledRoadMapContent>{children}</StyledRoadMapContent>
      </SelectedWrapper>
    </StyledRoadMapItemWrapper>
  )
}

const RoadMapPoint: FunctionComponent<{ children: ReactNode; year: number; q: number }> = ({ children, year, q }) => {
  let d = new Date()
  let currentYear = d.getUTCFullYear()

  let m = Math.floor(d.getMonth() / 3) + 2
  let cq = m > 4 ? m - 4 : m

  let status = RoadMapItemType.Skiped

  if (year === currentYear) {
    if (q === cq) {
    }
  } else if (year > currentYear) {
    status = RoadMapItemType.Future
  }

  return (
    <RoadMapItemBase state={status} year={year} q={q}>
      {children}
    </RoadMapItemBase>
  )
}

const init = (data: { year: number; q: number }[]) => {
  let d = new Date()
  let cy = d.getUTCFullYear()
  let m = Math.floor(d.getMonth() / 3) + 2
  let cq = m > 4 ? m - 4 : m

  const sortedData = data
    .sort((a, b) => {
      if (a.year > b.year) {
        return 1
      } else if (a.year < b.year) {
        return -1
      }
      return 0
    })
    .sort((a, b) => {
      if (a.year != b.year) return 0

      if (a.q > b.q) {
        return 1
      } else if (a.q < b.q) {
        return -1
      }
      return 0
    })

  let lastStatus = RoadMapItemType.Skiped

  const result: { year: number; q: number; state: RoadMapItemType }[] = sortedData.map((el, index, array) => {
    if (el.year === cy) {
      if (el.q >= cq) {
        if (lastStatus == RoadMapItemType.Skiped) {
          lastStatus = RoadMapItemType.Current
        }
      }
    }
    return {
      ...el,
      state: lastStatus,
    }
  })

  return result
}

const RoadMap = () => {
  return (
    <StyledRoadMap>
      <RoadMapItemBase state={RoadMapItemType.Skiped} year={2022}>
        Ipsum
      </RoadMapItemBase>
      <RoadMapItemBase state={RoadMapItemType.Skiped} q={1} year={2023}>
        Ipsum
      </RoadMapItemBase>
      <RoadMapItemBase state={RoadMapItemType.Current} q={2} year={2023}>
        Ipsum
      </RoadMapItemBase>
      <RoadMapItemBase state={RoadMapItemType.Future} q={3} year={2023}>
        Ipsum
      </RoadMapItemBase>
      <RoadMapItemBase state={RoadMapItemType.Future} q={4} year={2023}>
        Ipsum
      </RoadMapItemBase>
    </StyledRoadMap>
  )
}

export default RoadMap
