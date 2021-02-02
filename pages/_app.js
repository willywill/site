/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { easingFunction } from '../utils/theme';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'custom-easing',
      once: true,
      offset: 200,
      duration: 400,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
