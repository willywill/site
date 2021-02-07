import React from 'react';
import { PRIMARY_COLOR, SECONDARY_COLOR, WHITE } from '../../../utils/theme';
import { Flex } from '../../ui';
import SectionHeading from '../SectionHeading';
import ProductItem from './ProductItem';

const WebDevelopmentSection = () => (
  <Flex id="/web-development" column>
    <Flex pt={6} background={SECONDARY_COLOR} column>
      <SectionHeading text="Web Development." position="3 / 6" flip />
      <Flex mx={7}>
        <Flex width={0.5} mt={6} mb={7} column>
          <ProductItem
            title="Voton"
            description="Elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget"
          />
          <ProductItem
            title="Wishlist Sync"
            description="Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus"
          />
        </Flex>
        <Flex width={0.5} mt={7} mb={7} column>
          <ProductItem
            title="Voton"
            description="Elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget"
          />
          <ProductItem
            title="Wishlist Sync"
            description="Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus"
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
