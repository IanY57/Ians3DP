import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import Hero from "./globals/hero"
import Banner from "./globals/Banner"
import { PrimaryBtn } from "./globals/buttons"

import { setColor } from "../styledComponents/styles"

import homeImg from "../images/home.jpg"

const Header = ({ className }) => {
  return (
    <Hero className={className} img={homeImg}>
      <Banner
        greeting="Ian's 3D"
        title="Printing Service"
        text="Using FDM (Fused Deposition Modeling) and PLA (Polylactic Acid) plastics"
      >
        <PrimaryBtn Top="1rem">
          <Link to="/about" className="link">
            Read More about our methods
          </Link>
        </PrimaryBtn>
      </Banner>
    </Hero>
  )
}

export default styled(Header)`
  .link {
    text-decoration: none;
    color: ${setColor.mainBlack};
    &:hover {
      color: ${setColor.mainWhite};
    }
  }
`
