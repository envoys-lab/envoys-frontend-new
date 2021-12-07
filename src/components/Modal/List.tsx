import SelectTokenModal from './SelectTokenModal';
import React from 'react';

enum ModalList {
  Unknown,
  SelectToken,
}

export const Modals = {
  [ModalList.Unknown]: {
    title: 'Modal',
    view: () => <></>,
  },
  [ModalList.SelectToken]: {
    title: 'Select Token',
    view: SelectTokenModal,
  },
};

export default ModalList;
