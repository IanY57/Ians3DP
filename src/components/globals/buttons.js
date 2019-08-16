import styled from "styled-components";

import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition
} from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.mainFont};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(3)};
  ${setTransition()}
  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
  ${props =>
    `margin: ${props.Top || 0} ${props.Right || 0} ${props.Bottom ||
      0} ${props.Left || 0}}`};
  text-decoration: none;
  cursor: pointer;
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`;
