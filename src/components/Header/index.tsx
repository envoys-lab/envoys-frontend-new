import React, { FC, Dispatch, SetStateAction } from 'react';
import { SideBarHiddenButton } from 'components/SideBar/SideBarHidden';
import useScreenWidth from 'hooks/useScreenWidth';
import Input from 'uikit/Input/Input';

interface Props {
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<any>>;
  activeSearchBtn?: number;
  setActiveSearchBtn?: React.Dispatch<React.SetStateAction<any>>;
}
const Header: FC<Props> = ({ active, setActive, activeSearchBtn, setActiveSearchBtn }) => {
  const width = useScreenWidth();

  return (
    <div style={{ height: '85px', padding: '21px', display: 'flex', alignItems: 'center' }}>
      {width < 500 && (
        <div>
          <SideBarHiddenButton active={active} setActive={setActive}></SideBarHiddenButton>
        </div>
      )}
      <Input activeSearchBtn={activeSearchBtn} setActiveSearchBtn={setActiveSearchBtn} />
    </div>
  );
};

export default Header;
