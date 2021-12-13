import { ModalContext } from 'components/Modal/ModalContext';
import React from 'react';

const useModal = (): [boolean, (content?: React.ReactNode) => void, React.ReactNode] => {
  const [modal, setModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState<React.ReactNode>(undefined);
  const handleModal = (content?: React.ReactNode) => {
    if (content) {
      setModal(true);
      setModalContent(content);
    } else {
      setModal(false);
      setModalContent(undefined);
    }
  };

  return [modal, handleModal, modalContent];
};

const useModalContent = (): [React.ReactNode, (content?: React.ReactNode) => void] => {
  const context = React.useContext(ModalContext);
  return [context.modalContent, context.handleModal];
};

export { useModalContent, useModal };
