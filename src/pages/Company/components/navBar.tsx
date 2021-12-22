import React, { FC } from 'react';
import styled from 'styled-components';

const CompanyNavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 662px;
  margin-top: 35px;
  position: relative;
  //&:after{
  //  position: absolute;
  //  content: '';
  //  width: 662px;
  //  height: 2px;
  //  background: #E6E6E6;
  //  top: 100%;
  //}
`;

const Link = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-right: 43px;
  padding-bottom: 10px;
  color: #133d65;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #f48020;
    position: relative;
    &:after {
      position: absolute;
      content: '';
      width: calc(100% + 15px);
      z-index: 1;
      height: 4px;
      border-radius: 10px;
      background: #f48020;
      top: 98%;
      left: -8px;
    }
  }
`;

const NavBar: FC = () => {
  const navItems = ['ICO Details', 'About', 'Roadmap', 'Activity', 'Team', 'News', 'Comment'];
  return (
    <CompanyNavBar>
      {navItems.map((el, index) => (
        <Link key={index}>{el}</Link>
      ))}
    </CompanyNavBar>
  );
};

export default NavBar;
