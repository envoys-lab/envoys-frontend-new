import { useModalContent } from 'hooks/useModal';
import React from 'react';
import MyModalPage from './MyModalPage';

const ModalExample = () => {
  const [_, setModalView] = useModalContent();

  const openModalPage = () => {
    // You can put any component or use `setModalView()` to close.
    setModalView(MyModalPage);
  };

  return (
    <div>
      <button onClick={openModalPage}>Open</button>
    </div>
  );
};

export default ModalExample;
