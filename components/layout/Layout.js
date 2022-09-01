import React from 'react';
import Head from 'next/head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import useLocale from 'hooks/useLocale';

export default function Layout({ title, children, header = true, footer = true, detachMain= false }) {
  const { dir } = useLocale();

  let styles ={};

  if(detachMain) {
    styles = { 
      top: 0,
      left: 0,
      width: "100%",
      position: 'absolute',
    }
  }

  return (
    <>
      <Head>
        <title>umami{title && ` - ${title}`}</title>
      </Head>

      {header && <Header />}
      <main style={...styles}>{children}</main>
      {footer && <Footer />}
      <div id="__modals" dir={dir} />
    </>
  );
}
