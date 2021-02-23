import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import values from 'lodash/fp/values';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { any, shape } from 'prop-types';
import { breakpoints } from '../utils/theme';

const theme = {
  breakpoints: values(breakpoints),
};

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      easing: 'custom-easing',
      once: true,
      offset: 200,
      duration: 400,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Component: any.isRequired,
  pageProps: shape({}).isRequired,
};

export default MyApp;
