import React from 'react';
import {
  DARK_TITLE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, SUBTITLE_COLOR, WHITE,
} from '../../../utils/theme';
import { Flex, Text } from '../../ui';
import RibbonCanvas from '../RibbonCanvas';
import SkillLogo from './SkillLogo';

const SkillsSection = () => (
  <Flex column>
    <Flex column py={6} background={SECONDARY_COLOR} style={{ overflow: 'hidden', position: 'relative' }}>
      <RibbonCanvas />
      <Flex pr={7} width={1} justify="flex-end">
        <Text small color={DARK_TITLE_COLOR}>
          1.5 / 6
        </Text>
        <Flex column>
          <Text data-aos="fly-in" extraLarge bold color={PRIMARY_COLOR} letterSpacing={-2.56}>
            Skills.
          </Text>
          <div
            data-aos="slide-left"
            style={{
              opacity: 0.7, height: '5px', width: '100%', backgroundColor: SUBTITLE_COLOR, marginTop: '10px', transform: 'translateX(-20px)',
            }}
          />
        </Flex>
      </Flex>
      <Flex width={1} my={4} px={7} justify="center" column>
        <Flex justify="center" style={{ overflow: 'hidden' }}>
          <SkillLogo delay="800" src="/logos/c-sharp.png" alt="C# logo" />
          <SkillLogo delay="800" src="/logos/unity.png" alt="Unity logo" />
          <SkillLogo delay="800" src="/logos/js.png" alt="Javascript logo" />
          <SkillLogo delay="800" src="/logos/graphql.png" alt="GraphQL logo" />
          <SkillLogo delay="800" src="/logos/react.png" alt="ReactJS logo" />
        </Flex>
        <Flex justify="center" style={{ overflow: 'hidden' }}>
          <SkillLogo delay="800" src="/logos/opengl.png" alt="OpenGL logo" />
          <SkillLogo delay="800" src="/logos/directx.png" alt="DirectX logo" />
          <SkillLogo delay="800" src="/logos/shopify.png" alt="Shopify logo" />
          <SkillLogo delay="800" src="/logos/vue.png" alt="VueJS logo" />
          <SkillLogo delay="800" src="/logos/node.png" alt="NodeJS logo" />
        </Flex>
      </Flex>
    </Flex>
    <Flex>
      <Flex width={0.5} background={WHITE} />
      <Flex width={0.5} background={SECONDARY_COLOR} style={{ position: 'relative' }}>
        <Flex height="200px" mt="-1px">
          <div style={{
            width: '100px',
            height: '4px',
            backgroundColor: PRIMARY_COLOR,
            position: 'absolute',
            left: '-50px',
            top: '100px',
          }}
          />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

SkillsSection.displayName = 'SkillsSection';

SkillsSection.propTypes = {

};

SkillsSection.defaultProps = {

};

export default SkillsSection;
