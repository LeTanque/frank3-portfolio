import { AppProps } from 'next/app';
import React from 'react';
import '../styles.scss';

const PortfolioApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default PortfolioApp;