import React from 'react';
import {
  mediaQuery,
  PRIMARY_COLOR, SECONDARY_COLOR, WHITE,
} from '../../../utils/theme';
import { Flex } from '../../ui';
import RibbonCanvas from '../RibbonCanvas';
import SectionHeading from '../SectionHeading';
import SkillLogo from './SkillLogo';

const SkillsSection = () => (
  <Flex id="/skills" column>
    <Flex column py={6} background={SECONDARY_COLOR} style={{ overflow: 'hidden', position: 'relative' }}>
      <RibbonCanvas />
      <SectionHeading text="Skills." position="1.5 / 6" flip />
      <Flex width={1} my={4} px={2} justify="center" flexDirection={mediaQuery('column', { tablet: 'row' })}>
        <Flex justify="center" style={{ overflow: 'hidden' }} flexDirection={mediaQuery('row', { tablet: 'column' })}>
          <SkillLogo delay="800" src="/logos/c-sharp.png" alt="C# logo" />
          <SkillLogo delay="800" src="/logos/unity.png" alt="Unity logo" />
          <SkillLogo delay="800" src="/logos/js.png" alt="Javascript logo" />
          <SkillLogo delay="800" src="/logos/graphql.png" alt="GraphQL logo" />
          <SkillLogo delay="800" src="/logos/react.png" alt="ReactJS logo" />
        </Flex>
        <Flex justify="center" style={{ overflow: 'hidden' }} flexDirection={mediaQuery('row', { tablet: 'column' })}>
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

export default SkillsSection;
