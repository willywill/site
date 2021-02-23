import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { breakpoints, easingFunction } from '../../../utils/theme';
import { Box } from '../../ui';

const Logo = styled.img`
  width: 150px;
  margin: 25px;
  opacity: 0.6;
  filter: none;
  cursor: pointer;
  /* transition: filter 0.5s ${easingFunction}; */

  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 100px;
  }

  &:hover {
    opacity: 1.0;
    filter: invert(35%) sepia(81%) saturate(1846%) hue-rotate(202deg) brightness(105%) contrast(101%);
  }
`;

const SkillLogo = ({ src, alt, delay }) => (
  <Box style={{ overflowY: 'hidden' }}>
    <Logo
      data-aos="fly-in-far"
      data-aos-delay={delay}
      src={src}
      alt={alt}
    />
  </Box>
);

SkillLogo.displayName = 'SkillLogo';

SkillLogo.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  delay: string,
};

SkillLogo.defaultProps = {
  delay: '800',
};

export default SkillLogo;
