import React from 'react';
import styled from 'styled-components';
import {
  breakpoints, mediaQuery, mediaQueryLessThan, PRIMARY_COLOR, SECONDARY_COLOR, WHITE,
} from '../../../utils/theme';
import { Flex } from '../../ui';
import SectionHeading from '../SectionHeading';
import ProductItem from './ProductItem';

const GitBranchVisualization = styled.img`
  height: 80%;
  top: 20%;
  position: absolute;
  left: -150px;
  opacity: 0.05;
  user-select: none;
  z-index: -1;

  @media (max-width: ${breakpoints.desktopSmall}) {
    left: -350px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    height: 37%;
    top: 67%;
    left: -160px;
  }
`;

const WebDevelopmentSection = () => (
  <Flex as="section" id="/web-development" column>
    <Flex pt={6} background={SECONDARY_COLOR} column style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <SectionHeading text="Web Development." position="3 / 6" flip />
      <GitBranchVisualization height="100%" src="/git-branch.svg" />
      <Flex
        mx={mediaQuery('15%', { desktopSmall: '7%', desktopExtraLarge: '25%', desktop4K: '29%' })}
        flexDirection={mediaQueryLessThan('row', 'tablet', 'column')}
      >
        <Flex
          width={mediaQueryLessThan(0.5, 'tablet', 1)}
          mt={6}
          mb={mediaQueryLessThan(6, 'tablet', '0px')}
          column
        >
          <ProductItem
            title="Voton"
            description="Elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget"
            imageUrl="/web-dev/1.png"
          />
          <ProductItem
            title="Voton"
            description="Elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget"
            imageUrl="/web-dev/2.png"
          />
        </Flex>
        <Flex width={mediaQueryLessThan(0.5, 'tablet', 1)} mt={mediaQueryLessThan(7, 'tablet', '0px')} mb={7} column>
          <ProductItem
            title="Wishlist Sync"
            description="Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus"
            imageUrl="/web-dev/3.png"
          />
          <ProductItem
            title="Wishlist Sync"
            description="Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus"
            imageUrl="/web-dev/4.png"
          />
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

WebDevelopmentSection.displayName = 'WebDevelopmentSection';

WebDevelopmentSection.propTypes = {

};

WebDevelopmentSection.defaultProps = {

};

export default WebDevelopmentSection;
