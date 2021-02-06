/* global document, window */
import React, { useEffect } from 'react';
import throttle from 'lodash/fp/throttle';
import styled from 'styled-components';
import { easingFunction } from '../../../utils/theme';
import { getFadeInAnimation } from '../../../utils/animation';

const ImageLayer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: 400px 0px;
  background-repeat: no-repeat;
  opacity: 0.0;
  position: absolute;
  transition: background-position 1s ${easingFunction};
  animation: ${getFadeInAnimation(1.0)} 0.4s 0.5s ${easingFunction};
  animation-fill-mode: forwards;
`;

const HeaderVisualization = () => {
  const parallax = (e) => {
    const elem1 = document.querySelector('#parallax1');
    const elem2 = document.querySelector('#parallax2');
    const elem3 = document.querySelector('#parallax3');
    const w = window.innerWidth / 2;
    const h = window.innerHeight / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const depth1 = `${325 - (mouseX - w) * 0.02}px ${50 - (mouseY - h) * 0.01}px`;
    const depth2 = `${350 - (mouseX - w) * 0.1}px ${50 - (mouseY - h) * 0.2}px`;
    const depth3 = `${325 - (mouseX - w) * 0.05}px ${50 - (mouseY - h) * 0.08}px`;
    const x = `${depth3}`;
    const y = `${depth2}`;
    const z = `${depth1}`;
    if (elem1 && elem1.style) {
      elem1.style.backgroundPosition = x;
      elem2.style.backgroundPosition = y;
      elem3.style.backgroundPosition = z;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', throttle(100, parallax));

    return () => document.removeEventListener('mousemove', parallax);
  }, []);

  return (
    <>
      <ImageLayer src="/scene1.png" id="parallax1" />
      <ImageLayer src="/scene2.png" id="parallax2" />
      <ImageLayer src="/scene3.png" id="parallax3" />
    </>
  );
};

export default HeaderVisualization;
