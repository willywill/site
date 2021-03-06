import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" prefix="og: https://ogp.me/ns#">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.webp" />
          <link rel="icon" type="image/webp" sizes="32x32" href="/favicon-32x32.webp" />
          <link rel="apple-touch-icon" sizes="128x128" href="/favicon.webp" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <meta name="twitter:image" content="https://williamgermany.com/about-me/self.jpg" />
          <meta name="twitter:image:alt" content="Self Portrait" />
          <meta name="keywords" content="Portfolio, Engineer, Software, Programming, William, Germany" />
          <meta name="language" content="en" />
          <meta name="owner" content="William Germany" />
          <meta name="url" content="https://www.williamgermany.com" />
          <meta name="category" content="Portfolio" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style>@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap);</style>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  }
  finally {
    sheet.seal();
  }
};
