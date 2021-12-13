import React from 'react';
import styled from 'styled-components';
import exitArrow from '../icons/exit-icon.svg';
import metamaskIcon from '../icons/metamask-icon.svg';
import walletConnectIcon from '../icons/walletConnect.svg';
import trustWallet from '../icons/trustWallet.svg';
import dots from '../icons/dots.svg';

interface PopUpProps {
  open?: boolean;
  children?: React.ReactChild | React.ReactNode;
  setOpenWalletsPopUp?: React.Dispatch<React.SetStateAction<any>>;
}

const StyledPopUpWrapper = styled.div<PopUpProps>`
  position: absolute;
  background-color: rgba(245, 246, 247, 0.57);
  backdrop-filter: blur(20px);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.open ? '1' : '0')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: opacity 0.3s;
`;

const StyledPopUpCard = styled.div<PopUpProps>`
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  padding: 15px 30px 0;
  transform: ${(props) => (props.open ? 'scale(1)' : 'scale(0)')};
  transition: all 0.5s;
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(15, 43, 70, 1);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 65px;
  }
  .walletsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 80px;
    color: #0f2b46;
    font-size: 12px;
    font-weight: 500;
    margin: 0 50px 80px;
  }
`;

const ExitBtn = styled.div<PopUpProps>`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WalletCard = styled.div<PopUpProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #f9f9f9;
  border-radius: 14px;
  padding: 16px 25px 25px;
  cursor: pointer;
  span {
    margin-top: 20px;
  }
  img {
    min-width: 40px;
  }
`;

const PopUpCardFooter = styled.div<PopUpProps>`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  color: #2261da;
  font-size: 16px;
  font-weight: 500;
  border-top: 1px solid #e6e6e6;
`;
const FarmPopUp: React.FC<PopUpProps> = ({ open, setOpenWalletsPopUp }) => {
  return (
    <StyledPopUpWrapper open={open}>
      <StyledPopUpCard open={open}>
        <div className="row">
          <span>Connect Wallet</span>
          <ExitBtn onClick={() => setOpenWalletsPopUp(false)}>
            <img src={exitArrow} alt="" />
          </ExitBtn>
        </div>
        <div className="walletsWrapper">
          <WalletCard>
            <img src={metamaskIcon} alt="" />
            <span>Metamask</span>
          </WalletCard>
          <WalletCard>
            <img src={walletConnectIcon} alt="" />
            <span>WalletConnect</span>
          </WalletCard>
          <WalletCard>
            <img src={trustWallet} alt="" />
            <span>TrustWallet</span>
          </WalletCard>
          <WalletCard>
            <img src={dots} alt="" />
            <span>Other</span>
          </WalletCard>
        </div>
        <PopUpCardFooter>
          <a href="#">How to Connect</a>
        </PopUpCardFooter>
      </StyledPopUpCard>
    </StyledPopUpWrapper>
  );
};

export default FarmPopUp;
