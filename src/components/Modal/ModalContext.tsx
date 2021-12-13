import { useModal } from 'hooks/useModal';
import React from 'react';

interface IModalContext {
  modal: boolean;
  handleModal?: (string) => void;
  modalContent: React.ReactNode;
}
const ModalContext = React.createContext<IModalContext>({ modal: false, modalContent: '' });

export { ModalContext };
