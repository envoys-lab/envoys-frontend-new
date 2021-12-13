import React from 'react';
import List from './components/FarmList/List';

type Props = {
  view: boolean;
  switched: boolean;
  secondSwitched: boolean;
  sort: boolean;
  setOpenWalletsPopUp: React.Dispatch<React.SetStateAction<any>>;
};

const FarmList: React.FC<Props> = (props) => {
  return (
    <List
      view={props.view}
      sort={props.sort}
      switched={props.switched}
      secondSwitched={props.secondSwitched}
      setOpenWalletsPopUp={props.setOpenWalletsPopUp}
    />
  );
};

export default FarmList;
