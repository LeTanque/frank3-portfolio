import Head from 'next/head';
import React from 'react';

import { App } from '../src/components/App';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frank3</title>
        <link rel="icon" href="https://raw.githubusercontent.com/LeTanque/frank3-portfolio/main/public/favicon.ico" />
      </Head>
      <App />
    </>
  );
}