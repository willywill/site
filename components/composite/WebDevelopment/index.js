import React from 'react';
import { PRIMARY_COLOR } from '../../../utils/theme';
import { Flex } from '../../ui';
import SectionHeading from '../SectionHeading';

const WebDevelopmentSection = () => (
  <Flex column>
    <Flex pt={6} background={PRIMARY_COLOR} pb="1000px">
      <SectionHeading text="Web Development." position="3 / 6" flip theme="light" />
    </Flex>
  </Flex>
);

WebDevelopmentSection.displayName = 'WebDevelopmentSection';

WebDevelopmentSection.propTypes = {

};

WebDevelopmentSection.defaultProps = {

};

export default WebDevelopmentSection;
