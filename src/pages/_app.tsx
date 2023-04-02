import Head from "next/head";
import type { AppProps } from "next/app";

import "src/styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>portal</title>
        <meta name="description" content="portal" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Component {...pageProps} />
      </>
    </>
  );
};

export default MyApp;
