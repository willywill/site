import React from 'react';
import {
  PRIMARY_COLOR, DARK_TITLE_COLOR, SUBTITLE_COLOR, SECONDARY_COLOR,
  WHITE,
} from '../../../utils/theme';
import { Flex, Box, Text } from '../../ui';
import ContactItem from './ContactItem';

const ContactSection = () => (
  <Flex id="/contact" width={1} background={WHITE}>
    <Box width={0.5}>
      <a href="https://www.google.com/maps/place/Cincinnati,+OH/">
        <img width="100%" height="100%" src="/cincinnati.png" alt="Map" />
      </a>
    </Box>
    <Flex width={0.5} column>
      <Box width={1} mb={5} background={SECONDARY_COLOR} height="25%" />
      <Flex width={1} pl={5} mt={6} column>
        <Text data-aos="fly-in" extraLarge color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
          {'Hello'}
        </Text>
        <Box style={{ overflow: 'hidden' }} mt={4}>
          <Text data-aos="fly-in" data-aos-delay="800" large color={DARK_TITLE_COLOR} weight={700} letterSpacing={-2.56}>
            {'Let\'s touch base.'}
          </Text>
        </Box>
        <Flex mt={48} column>
          <Box>
            <Text thin uppercase color={SUBTITLE_COLOR}>
              {'Will Germany'}
            </Text>
          </Box>
          <Box mt={4}>
            <ContactItem text="Cincinnati, Ohio" href="https://www.google.com/maps/place/Cincinnati,+OH/" />
          </Box>
          <Box mt={3}>
            <ContactItem text="me@williamgermany.com" href="mailto:me@williamgermany.com" />
          </Box>
          <Box mt={3}>
            <ContactItem text="https://linkedin.com/in/williamgermany" href="https://linkedin.com/in/williamgermany" />
          </Box>
          <Flex mt={4}>
            <Text color={SUBTITLE_COLOR} thin>
              {'See more details below'}
            </Text>
            <Box ml={2} style={{ color: DARK_TITLE_COLOR }}>
              <i className="fa fa-angle-down" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

ContactSection.displayName = 'ContactSection';

ContactSection.propTypes = {

};

ContactSection.defaultProps = {

};

export default ContactSection;
