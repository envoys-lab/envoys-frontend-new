import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Updaters() {
  return <></>;
}

// function Blocklist({ children }: { children: ReactNode }) {
//   const { account } = useActiveWeb3React()
//   const blocked: boolean = useMemo(() => Boolean(account && BLOCKED_ADDRESSES.indexOf(account) !== -1), [account])
//   if (blocked) {
//     return <div>Blocked address</div>
//   }
//   return <>{children}</>
// }

ReactDOM.render(
  <React.StrictMode>
    <Updaters />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
