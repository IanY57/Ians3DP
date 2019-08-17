import React from "react"
import styled from "styled-components"

import { setColor } from "../../styledComponents/styles"

const PageTitle = ({ title, subtitle }) => {
  return (
    <TitleWapper>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TitleWapper>
  )
}

const TitleWapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: ${setColor.mainBlack};
  }
  .title {
    color: ${setColor.primaryColor};
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

export default PageTitle
