import React from 'react';
import { NavLink } from 'react-router-dom';
import arrowDown from './icons/arrow-down.svg';
import {
  StyledFarmBtn,
  StyledPoolBtn,
  StyledStakeSpan,
  StyledViewListIcon,
  StyledViewBlockIcon,
  StyledSwitcher,
  StyledSecondSwitcher,
  StyledSort,
  StyledSortList,
  StyledSortListItem,
  StyledFarmFlex1,
  StyledFarmFlex2,
  StyledFarmFlex3,
  StyledFarmFlex4,
  StyledFarmFlex5,
  StyledFarmFlex6,
  StyledFarmFlex7,
} from './FarmMenu/StyledComponents';
import ViewBlockIcon from './FarmMenu/ViewBlockIcon';
import ViewListIcon from './FarmMenu/ViewListIcon';
import FarmList from './FarmList/FarmList';
import FarmPopUp from './FramPopUp/FarmPopUp';

const Farm: React.FC = () => {
  const [selectedBtn, setSelectedBtn] = React.useState<boolean>(false);
  const [view, setView] = React.useState<boolean>(false);
  const [switched, setSwitched] = React.useState<boolean>(false);
  const [secondSwitched, setSecondSwitched] = React.useState<boolean>(false);
  const [sort, setSort] = React.useState<boolean>(false);
  const [openWalletsPopUp, setOpenWalletsPopUp] = React.useState<boolean>(false);
  const sortItems = ['ARP', 'Multiplier', 'Earned', 'Liquiduty'];
  return (
    <StyledFarmFlex1>
      <StyledFarmFlex2>
        <StyledFarmBtn onClick={() => setSelectedBtn(false)} selected={selectedBtn}>
          Farm
        </StyledFarmBtn>
        <StyledPoolBtn onClick={() => setSelectedBtn(true)} selected={selectedBtn}>
          Pool
        </StyledPoolBtn>
      </StyledFarmFlex2>
      <StyledFarmFlex3>
        <StyledFarmFlex4>
          <StyledStakeSpan>Stake LP tokens to earn</StyledStakeSpan>
          <NavLink to="/auction">Community Auctions →</NavLink>
        </StyledFarmFlex4>
        <StyledFarmFlex5>
          <StyledFarmFlex6>
            <StyledViewListIcon onClick={() => setView(false)} view={view}>
              <ViewListIcon />
            </StyledViewListIcon>
            <StyledViewBlockIcon onClick={() => setView(true)} view={view}>
              <ViewBlockIcon />
            </StyledViewBlockIcon>
          </StyledFarmFlex6>
          <StyledFarmFlex7>
            <StyledSwitcher type="checkbox" onClick={() => setSwitched(!switched)} switched={switched} />
            Stake only
          </StyledFarmFlex7>
          <StyledSecondSwitcher onClick={() => setSecondSwitched(!secondSwitched)} secondSwitched={secondSwitched}>
            <span>Live</span>
            <span>Finished</span>
          </StyledSecondSwitcher>
          <StyledSort
            onClick={(e) => {
              setSort(!sort);
              e.stopPropagation();
            }}
            sort={sort}
          >
            <span>Sort by:</span>
            <span>Hot</span>
            <img src={arrowDown} alt="" />
            {sort && (
              <StyledSortList onClick={(e) => e.stopPropagation()}>
                {sortItems.map((item, index) => (
                  <StyledSortListItem key={index}>{item}</StyledSortListItem>
                ))}
              </StyledSortList>
            )}
          </StyledSort>
        </StyledFarmFlex5>
      </StyledFarmFlex3>
      <FarmList setOpenWalletsPopUp={setOpenWalletsPopUp} />
      <FarmPopUp open={openWalletsPopUp} setOpenWalletsPopUp={setOpenWalletsPopUp} />
    </StyledFarmFlex1>
  );
};

export default Farm;
