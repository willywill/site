/* global document */
import { css, keyframes } from 'styled-components';
import { easingFunction } from './theme';

export const animateOnScrollAddOns = css`
  [data-aos] {
  body[data-aos-easing="custom-easing"] &,
    &[data-aos][data-aos-easing="custom-easing"] {
      transition-timing-function: ${easingFunction};
    }
  }

  [data-aos="fly-in"] {
    opacity: 0;
    transform: translateY(100px);
    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
      transform: translateY(0);
    }
  }

  [data-aos="fly-in-far"] {
    opacity: 0;
    transform: translateY(250px);
    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
      transform: translateY(0);
    }
  }

  [data-aos="slide-right"] {
    opacity: 0;
    transform: translateX(-100px);
    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  [data-aos="slide-left"] {
    opacity: 0;
    transform: translateX(100px);
    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const getFadeInAnimation = (fadeTo = 1.0) => keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: ${fadeTo};
  }
`;

export const scrollIntoView = (elementId, options = { block: 'center' }) => () => {
  if (typeof document === 'undefined') return;

  const sectionElement = document.getElementById(elementId);
  sectionElement?.scrollIntoView({ ...options, behavior: 'smooth' });
};
