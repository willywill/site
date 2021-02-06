import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { any, shape } from 'prop-types';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      easing: 'custom-easing',
      once: true,
      offset: 200,
      duration: 400,
    });
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

MyApp.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Component: any.isRequired,
  pageProps: shape({}).isRequired,
};

export default MyApp;
