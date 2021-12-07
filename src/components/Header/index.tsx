import { FC } from 'react';
import { SideBarHiddenButton } from 'components/SideBar/SideBarHidden';
import Input from 'uikit/Input/Input';
import useScreenWidth from 'hooks/useScreenWidth';

const Header: FC<{ active: boolean; setActive: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  active,
  setActive,
}) => {
  const width = useScreenWidth();

  return (
    <div style={{ height: '85px', padding: '21px', display: 'flex', alignItems: 'center' }}>
      {width < 500 && (
        <div>
          <SideBarHiddenButton active={active} setActive={setActive}></SideBarHiddenButton>
        </div>
      )}
      <Input placeholder="Search by account, token, ENS" />
    </div>
  );
};

export default Header;
