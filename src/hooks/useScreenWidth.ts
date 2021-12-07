import React from 'react';

const useScreenWidth = () => {
  const [width, setWidth] = React.useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};

export default useScreenWidth;
