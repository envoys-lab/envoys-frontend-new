import useActiveWeb3React from 'hooks/useActiveWeb3React';
import React from 'react';
import useAuth, { connectors } from '../../hooks/useAuth';

const ConnectWallet: React.FC = () => {
  const { login } = useAuth();
  const { library } = useActiveWeb3React();
  const connect = () => {
    login(connectors.injected);
  };

  React.useEffect(() => {
    library.listAccounts().then((l) => {
      console.log(l);
    });
  }, [library]);

  return <button onClick={connect}>Connect wallet</button>;
};

export default ConnectWallet;
