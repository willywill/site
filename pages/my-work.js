import React from 'react';
import FlyUpText from '../components/composite/FlyUpText';
import { Flex } from '../components/ui';
import Header from '../components/ui/Header';
import Navbar from '../components/ui/Navbar';
import { PRIMARY_COLOR } from '../utils/theme';

const MyWorkPage = () => {
  const text = 'My work';

  return (
    <>
      <Header />
      <Navbar />
      <Flex width={1} height="calc(100vh - 62px)" align="center" justify="center">
        <FlyUpText center extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
          {text}
        </FlyUpText>
      </Flex>
    </>
  );
};

MyWorkPage.displayName = 'MyWorkPage';

MyWorkPage.propTypes = {

};

MyWorkPage.defaultProps = {

};

export default MyWorkPage;
