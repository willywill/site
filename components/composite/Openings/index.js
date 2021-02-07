import React from 'react';
import { EXTRA_DARK, WHITE, DARK_TITLE_COLOR } from '../../../utils/theme';
import { Flex, Box, Text } from '../../ui';
import AccentBar from '../../ui/AccentBar';
import OutlineButton from '../../ui/OutlineButton';

const OpeningsSection = () => (
  <Flex id="/openings" column background={EXTRA_DARK} py="250px" align="center">
    <Box pr="25%">
      <AccentBar color={WHITE} />
    </Box>
    <Box mt={6}>
      <Text data-aos="fly-in" center fontSize="5rem" color={DARK_TITLE_COLOR} weight={700} letterSpacing={-2.56}>
        {'Openings'}
      </Text>
    </Box>
    <Box style={{ overflow: 'hidden' }} mt={4}>
      <Text data-aos="fly-in" data-aos-delay="800" fontSize="3rem" color={WHITE} weight={700} letterSpacing={-2.56}>
        {'I\'m available for work.'}
      </Text>
    </Box>
    <Box width={1} maxWidth="1280px" mt={4} px={7}>
      <Text data-aos="fly-in" data-aos-delay="1200" center fontSize="1.1rem" color={WHITE} letterSpacing={-0.3} thin>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt adipisci cupiditate corrupti impedit quos nemo asperiores magnam <strong style={{ fontWeight: 'bolder' }}>tempora ab consequatur</strong> ipsam saepe repellat nisi, reiciendis quidem quia molestias doloremque dolorum soluta eos molestiae corporis! Laboriosam totam consectetur quos modi eius?
      </Text>
      <br />
      <Text data-aos="fly-in" data-aos-delay="1600" center fontSize="1.1rem" color={WHITE} letterSpacing={-0.3} thin>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong style={{ fontWeight: 'bolder' }}>Necessitatibus</strong> ex sint quia quasi, vitae consequatur dicta. Adipisci omnis molestias vero, praesentium natus autem ex voluptatibus accusamus animi itaque beatae pariatur distinctio mollitia qui vitae ut.
      </Text>
    </Box>
    <Box mt={5} mb={6}>
      <Flex style={{ position: 'relative' }}>
        <OutlineButton width="200" height="70">
          <rect width="200" height="70" style={{ fill: 'rgba(0, 0, 0, 0)', strokeWidth: 2, stroke: 'rgb(255, 255, 255)' }} />
        </OutlineButton>
        <Text color={WHITE} thin uppercase>
          {'Get in touch'}
        </Text>
      </Flex>
    </Box>
    <Box pl="25%">
      <AccentBar reversed color={WHITE} />
    </Box>
  </Flex>
);

OpeningsSection.displayName = 'OpeningsSection';

OpeningsSection.propTypes = {

};

OpeningsSection.defaultProps = {

};

export default OpeningsSection;
