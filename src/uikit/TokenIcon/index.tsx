import React, { useEffect, useState } from 'react';
import Token from '../../core/Token';

interface TokenIconAttributes extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  token: Token;
}

function existsLocal(name: string) {
  return existsUrl(`/icons/tokens/${name}.svg`);
}

function existsUrl(url: string) {
  const http = new XMLHttpRequest();

  http.open('HEAD', url, false);
  http.send();

  return http.status != 404;
}

const TokenIcon = (props: TokenIconAttributes) => {
  const { token, size = 30 } = props;
  const [tokenUrl, setTokenUrl] = useState(`/assets/svg/undefined_token.svg`);
  useEffect(() => {
    setImmediate(async () => {
      if (token.icon && existsUrl(token.icon)) {
        setTokenUrl(token.icon);
      } else if (existsLocal(token.contract)) {
        setTokenUrl(token.icon);
      }
    });
  }, []);

  return <img src={tokenUrl} {...props} height={size} width={size}></img>;
};

export default TokenIcon;
