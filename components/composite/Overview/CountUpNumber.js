/* global document */
import React, { useEffect } from 'react';
import { number, oneOfType, string } from 'prop-types';
import { useCountUp } from 'react-countup';
import { PRIMARY_COLOR } from '../../../utils/theme';
import { Text } from '../../ui';

const CountUpNumber = ({ end }) => {
  const { countUp, reset, start } = useCountUp({ end, useEasing: true, duration: 3 });

  const handleAnimateInEvent = ({ detail }) => {
    if (detail?.id === 'count-up') {
      reset();
      start();
    }
  };

  useEffect(() => {
    document.addEventListener('aos:in', handleAnimateInEvent);
    return () => {
      document.removeEventListener('aos:in', handleAnimateInEvent);
    };
  }, []);

  return (
    <Text extraLarge bold color={PRIMARY_COLOR}>
      {countUp}
    </Text>
  );
};

CountUpNumber.displayName = 'CountUpNumber';

CountUpNumber.propTypes = {
  end: oneOfType([number, string]).isRequired, // Desired number to count to, starting from 0
};

export default CountUpNumber;
