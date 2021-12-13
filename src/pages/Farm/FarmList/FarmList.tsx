import React from 'react';
import List from './components/FarmList/List';
interface Props {
  setOpenWalletsPopUp?: React.Dispatch<React.SetStateAction<any>>;
}
const FarmList: React.FC<Props> = ({ setOpenWalletsPopUp }) => {
  return <List setOpenWalletsPopUp={setOpenWalletsPopUp} />;
};

export default FarmList;
