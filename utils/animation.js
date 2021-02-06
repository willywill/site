import { keyframes } from 'styled-components';

export const getFadeInAnimation = (fadeTo = 1.0) => keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: ${fadeTo};
  }
`;

export default {};
