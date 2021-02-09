import { number } from 'prop-types';
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */
/* global window, document */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../utils/theme';

const ribbonValuesX = [0.2461707752910156, 0.9154090178471943, 0.5182379759957672, 0.8479894950563197, 0.1252425278626217, 0.16073292088449875, 0.14310330479239264, 0.8007190342704593, 0.12329133119781566, 0.25134051448695693, 0.6157401541107861, 0.6439466633078399, 0.47046578607259226, 0.24019567061313607, 0.7161202900019144, 0.20777103271517894, 0.1978921546718324, 0.7122523731653643, 0.3037880234036965, 0.9650805444602037, 0.740614306113067, 0.49976414560147564, 0.2510061100446095, 0.005975099674544682, 0.8612613407124512, 0.9840676711166825, 0.1968214068165648, 0.8621208148908959, 0.01817186109340474, 0.4487305554131593, 0.00016891348458214495, 0.4060391667533727];
const ribbonValuesY = [0.7003290734843763, 0.26081298936867015, 0.7292996257505697, 0.020872892687277433, 0.4056003532657957, 0.10586132368216217, 0.22945951586264224, 0.9842130898491004, 0.9247537565009747, 0.7243912534494972, 0.561982144216661, 0.3884734443527089, 0.3909030985597328, 0.16276076055579858, 0.8112613155161552, 0.4426484071654344, 0.46487845516415804, 0.8606986656686992, 0.10923549536310362, 0.8629613792488942, 0.5199634406049172, 0.6091145425879858, 0.6614173556003362, 0.31876087774409156, 0.6091118382105323, 0.2939810537401466, 0.5334609117381144, 0.33249577474292424, 0.08783513388011688, 0.47395446381705053, 0.5023769245871215, 0.8812741876194532];

// const logListToConsole = () => {
//   console.log('X: ', JSON.stringify(ribbonValuesX));
//   console.log('Y: ', JSON.stringify(ribbonValuesY));
// };

const initializeCanvas = () => {
  const c = document.getElementsByTagName('canvas')[0];
  const x = c.getContext('2d');
  const pr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const f = 90;
  let q;
  // const m = Math;
  // const z = (index, isY = false) => {
  //   const val = m.random();
  //   if (isY) {
  //     ribbonValuesY.push(val);
  //   }
  //   else {
  //     ribbonValuesX.push(val);
  //   }
  //   return m.random() - 0.02 > 1.0 ? m.random() : m.random() - 0.02;
  // };
  const lookupX = (index) => ribbonValuesX[index];
  const lookupY = (index) => ribbonValuesY[index];
  c.width = w * pr;
  c.height = h * pr;
  x.scale(pr, pr);
  x.globalAlpha = 0.6;
  function d(i, j, index) {
    x.beginPath();
    x.moveTo(i.x, i.y);
    x.lineTo(j.x, j.y);
    const k = j.x + (lookupY(index) * 2 - 0.25) * f;
    const n = y(j.y, index);
    x.lineTo(k, n);
    x.closePath();
    x.fillStyle = `${PRIMARY_COLOR}`; // `#${(v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)}`;
    x.fill();
    // eslint-disable-next-line prefer-destructuring
    q[0] = q[1];
    q[1] = { x: k, y: n };
  }
  function i() {
    x.clearRect(0, 0, w, h);
    q = [{ x: 0, y: h * 0.7 + f }, { x: 0, y: h * 0.7 - f }];
    let index = 0;
    // for (let idx = 0; idx < ribbonValuesY.length; idx++) {
    //   d(q[0], q[1], idx);
    // }
    while (q[1].x < w + f) {
      d(q[0], q[1], index);
      index += 1;
    }
  }
  function y(p, index) {
    const t = p + (lookupX(index) * 2 - 1.1) * f;
    return (t > h || t < 0) ? y(p) : t;
  }
  i();

  // document.onclick = () => {
  //   i();
  //   logListToConsole();
  //   ribbonValuesX = [];
  //   ribbonValuesY = [];
  // };

  // logListToConsole();
};

const Canvas = styled.canvas.attrs({ id: 'ribbon' })`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: ${[(props) => props.opacity || 0.175]};
  top: 0;
  pointer-events: none;
`;

const RibbonCanvas = ({ opacity }) => {
  useEffect(() => {
    initializeCanvas();
  }, []);

  return <Canvas opacity={opacity} />;
};

RibbonCanvas.displayName = 'RibbonCanvas';

RibbonCanvas.propTypes = {
  opacity: number,
};

RibbonCanvas.defaultProps = {
  opacity: undefined,
};

export default RibbonCanvas;
