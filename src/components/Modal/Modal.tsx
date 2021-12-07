import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { modalCloseAction } from '../../store/modal/reducer';
import ModalList, { Modals } from './List';
import useOutsideAlerter from 'hooks/useOutsideAlerter';

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
  const dispatch = useDispatch<AppDispatch>();
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, () => dispatch(modalCloseAction()));

  const info = useSelector<RootState, number>((state) => state.modal.view);
  const CurrentPage = Modals[info].view;

  const view = (
    <StyledBack>
      <StyledModalWrapper>
        <StyledModalBox ref={wrapperRef}>
          <StyledModalHeader style={{ fontSize: '16px' }}>{Modals[info].title}</StyledModalHeader>
          <CurrentPage />
        </StyledModalBox>
      </StyledModalWrapper>
    </StyledBack>
  );
  return info !== ModalList.Unknown || false ? view : <input type="hidden" value="hidden-modal-page-here" />;
};

export default Modal;
