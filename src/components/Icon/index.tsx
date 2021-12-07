import React from 'react';

const Icon: React.FC<{ content: string }> = ({ content }) => {
  return <i className={content} style={{ marginRight: '10px' }} />;
};

export default Icon;
