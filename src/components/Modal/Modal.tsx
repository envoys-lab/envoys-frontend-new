import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import useOutsideAlerter from 'hooks/useOutsideAlerter';
import { useModal } from 'hooks/useModal';
import { ModalContext } from './ModalContext';

export const StyledBack = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  height: 100%;
  width: 100%;
  background: rgba(245, 246, 247, 0.2);
  backdrop-filter: blur(4px);
`;

export const StyledModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledModalBox = styled.div`
  max-width: 440px;
  width: 440px;
  max-height: 690px;
  height: 690px;
  background: white;
  padding: 20px;
  margin: 20px;
  border-radius: 28px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
`;

const StyledModalHeader = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Modal: FC = () => {
  const wrapperRef = useRef(null);
  const { modalContent, handleModal, modal } = React.useContext(ModalContext);

  useOutsideAlerter(wrapperRef, () => handleModal(undefined));
  const context = useModal();

  const view = (
    <StyledBack>
      <StyledModalWrapper>
        <StyledModalBox ref={wrapperRef}>{modalContent}</StyledModalBox>
      </StyledModalWrapper>
    </StyledBack>
  );
  return modal ? view : <input type="hidden" value="hidden-modal-page-here" />;
};

export default Modal;
