import React from "react"
import styled from "styled-components"
import img from "../images/home.jpg"

const simpleHero = ({ className, children }) => {
  return (
    <div className={className}>
      <header className="defaultHero">{children}</header>
    </div>
  )
}

export default styled(simpleHero)`
  .defaultHero {
    min-height: calc(100vh - 100px);
    background: linear-gradient(rgba(228, 213, 182, 0.5), rgba(0, 0, 0, 0.5)),
      url(${img}) center/cover fixed no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
