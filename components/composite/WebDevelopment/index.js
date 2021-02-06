import React from 'react';
import { PRIMARY_COLOR, WHITE } from '../../../utils/theme';
import { Flex, Text } from '../../ui';

const WebDevelopmentSection = () => (
  <Flex column>
    <Flex pt={6} background={PRIMARY_COLOR} pb="1000px">
      <Flex pb={7} mx={7} width={1} mt={6} justify="flex-end">
        <Text small color={WHITE}>
          {'3 / 6'}
        </Text>
        <Flex ml={1} column>
          <Text data-aos="fly-in" extraLarge bold color={WHITE} letterSpacing={-2.56}>
            {'Web Development.'}
          </Text>
          <div
            data-aos="slide-left"
            style={{
              opacity: 0.7, height: '5px', width: '100%', backgroundColor: WHITE, marginTop: '10px', transform: 'translateX(20px)',
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

WebDevelopmentSection.displayName = 'WebDevelopmentSection';

WebDevelopmentSection.propTypes = {

};

WebDevelopmentSection.defaultProps = {

};

export default WebDevelopmentSection;
