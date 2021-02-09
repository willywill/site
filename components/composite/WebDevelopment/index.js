import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } from '../../../utils/theme';
import { Flex } from '../../ui';
import SectionHeading from '../SectionHeading';
import ProductItem from './ProductItem';

const GitBranchVisualization = styled.img`
  height: 80%;
  top: 20%;
  position: absolute;
  left: -150px;
  opacity: 0.4;
  user-select: none;
`;

const WebDevelopmentSection = () => (
  <Flex id="/web-development" column>
    <Flex pt={6} background={SECONDARY_COLOR} column style={{ position: 'relative', overflow: 'hidden' }}>
      <SectionHeading text="Web Development." position="3 / 6" flip />
      <GitBranchVisualization height="100%" src="/git-branch.svg" />
      <Flex mx={7}>
        <Flex width={0.5} mt={6} mb={7} column>
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
        <Flex width={0.5} mt={7} mb={7} column>
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
