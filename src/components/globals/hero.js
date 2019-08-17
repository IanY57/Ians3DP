import styled from "styled-components"

import { setFlex, setBackground } from "../../styledComponents/styles"

const Hero = styled.header`
  min-height: 100vh;
  ${props =>
    setBackground({
      img: props.img,
      color: "rgba(228, 213, 182, 0.5)",
      color2: "rgba(0, 0, 0, 0.7)",
    })}
  ${setFlex()}
`

export default Hero
