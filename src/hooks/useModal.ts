import React from 'react';

const useModal = () => {
  const [state, setState] = React.useState(null);
  return React.useMemo(() => {
    return [state, setState];
  }, []);
};
export default useModal;
