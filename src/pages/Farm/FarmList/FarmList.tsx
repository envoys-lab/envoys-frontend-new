import React from 'react';
import List from './components/FarmList/List';

type Props = {
  view: boolean;
  switched: boolean;
  secondSwitched: boolean;
  sort: boolean;
};

const FarmList: React.FC<Props> = (props) => {
  return <List view={props.view} sort={props.sort} switched={props.switched} secondSwitched={props.secondSwitched} />;
};

export default FarmList;
