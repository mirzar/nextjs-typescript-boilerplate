import {css} from 'styled-components';

const baseSpacing = 8;
const setSpacing = (num: number): number => num * baseSpacing;

const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const utils = {
  absoluteCenter,
  setSpacing,
};
