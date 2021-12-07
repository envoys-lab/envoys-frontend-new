import SelectTokenModal from './SelectTokenModal'

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
}

export default ModalList
