import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import elipse1 from '../img/roadmap-elipse.svg'
import elipse2 from '../img/roadmap-elipse-skiped.svg'
import elipse3 from '../img/roadmap-elipse-current.svg'

const StyledRoadMapItem = styled.div`
  display: inline-block;
  height: 5.5rem;
  border-left: 2px dashed #133d65 !important;
  position: relative;

  &:before {
    content: url(${elipse1});
    width: 20px;
    height: 20px;

    border-radius: 50%;
    position: absolute;

    left: -10px;
    top: -3px;
  }

  // background: rgba(0,255,0,0.5);
`;

const StyledRoadMapItemSkiped = styled(StyledRoadMapItem)`
  &:before {
    content: url(${elipse2}) !important;
  }
  // border-left: 2px dashed #F48020;
`;

const StyledRoadMapItemCurrent = styled(StyledRoadMapItem)`
  &:before {
    content: url(${elipse3}) !important;
  }
`;

const RoadMapTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  /* Main_Dark */
  margin-bottom: 101px;
  color: #133D65;
  margin-left: -67px;
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
`;

const StyledDate = styled.div`
  display: inline-block;
  margin-right: 140px;
`;

const StyledRoadMap = styled.ul`
  list-style-type: none;
  margin-left: 133px;
  
`;

const StyledRoadMapContent = styled.span`
  background: #ffffff;

  border: 1px solid #f9f9f9;
  box-sizing: border-box;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  padding: 15px;
  margin-left: 50px;
`;

const ReadLess = styled.button`
  padding: 10px 49px;
  border: 2px solid #2261DA;
  box-sizing: border-box;
  border-radius: 14px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #2261DA;
  background: transparent;
  margin-top: 75px;
  margin-left: 221px;
  
`

enum RoadMapItemType {
    Future,
    Skiped,
    Current,
}

const RoadMapItemBase: FunctionComponent<{
    children: React.ReactNode;
    state: RoadMapItemType;
    year?: number;
    q?: number;
}> = ({ children, state, year = 2021, q = 1 }) => {
    const SelectedWrapper =
        state === RoadMapItemType.Skiped
            ? StyledRoadMapItemSkiped
            : state === RoadMapItemType.Current
            ? StyledRoadMapItemCurrent
            : StyledRoadMapItem;

    return (
        <StyledRoadMapItemWrapper>
            <StyledDate>
                Q{q} {year}
            </StyledDate>
            <SelectedWrapper>
                <StyledRoadMapContent>{children}</StyledRoadMapContent>
            </SelectedWrapper>
        </StyledRoadMapItemWrapper>
    );
};

export const RoadMapPoint: FunctionComponent<{ children: ReactNode; year: number; q: number }> = ({
                                                                                                      children,
                                                                                                      year,
                                                                                                      q,
                                                                                                  }) => {
    const d = new Date();
    const currentYear = d.getUTCFullYear();

    // const m = Math.floor(d.getMonth() / 3) + 2;
    // const cq = m > 4 ? m - 4 : m;

    let status = RoadMapItemType.Skiped;

    if (year > currentYear) {
        status = RoadMapItemType.Future;
    }

    return (
        <RoadMapItemBase state={status} year={year} q={q}>
            {children}
        </RoadMapItemBase>
    );
};

export const init = (data: { year: number; q: number }[]) => {
    const d = new Date();
    const cy = d.getUTCFullYear();
    const m = Math.floor(d.getMonth() / 3) + 2;
    const cq = m > 4 ? m - 4 : m;

    const sortedData = data
        .sort((a, b) => {
            if (a.year > b.year) {
                return 1;
            } else if (a.year < b.year) {
                return -1;
            }
            return 0;
        })
        .sort((a, b) => {
            if (a.year != b.year) return 0;

            if (a.q > b.q) {
                return 1;
            } else if (a.q < b.q) {
                return -1;
            }
            return 0;
        });

    let lastStatus = RoadMapItemType.Skiped;

    const result: { year: number; q: number; state: RoadMapItemType }[] = sortedData.map((el) => {
        if (el.year === cy) {
            if (el.q >= cq) {
                if (lastStatus == RoadMapItemType.Skiped) {
                    lastStatus = RoadMapItemType.Current;
                }
            }
        }
        return {
            ...el,
            state: lastStatus,
        };
    });

    return result;
};

const RoadMap = () => {
    return (
        <StyledRoadMap>
            <RoadMapTitle>
                Company Name Roadmap
            </RoadMapTitle>
            <RoadMapItemBase state={RoadMapItemType.Skiped} year={2022}>
                Pre-sale
            </RoadMapItemBase>
            <RoadMapItemBase state={RoadMapItemType.Skiped} q={1} year={2023}>
                Audit Liqudity locked Publick Launch
            </RoadMapItemBase>
            <RoadMapItemBase state={RoadMapItemType.Current} q={2} year={2023}>
                Liqudity lockesd
            </RoadMapItemBase>
            <RoadMapItemBase state={RoadMapItemType.Future} q={3} year={2023}>
                Audit Liqudity locked Publick Launch
            </RoadMapItemBase>
            <RoadMapItemBase state={RoadMapItemType.Future} q={4} year={2023}>
                Liqudity lockesd
            </RoadMapItemBase>
            <ReadLess>Read Less</ReadLess>
        </StyledRoadMap>
    );
};

export default RoadMap;
