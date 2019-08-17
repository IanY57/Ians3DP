import { createGlobalStyle } from "styled-components"

// font-family: 'Quicksand', sans-serif;
// font-family: 'Satisfy', cursive;

import { setColor, setFont } from "../styledComponents/styles"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Merriweather:400,700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 100%;
  color:${setColor.mainBlack};
  background: ${setColor.backgroundColor}; 
  ${setFont.mainFont}
}

h1{
  font-size:3em;
  line-height:1.2;
  margin-bottom: 0.65em;
}

h2{
  font-size:2.5em;
  line-height:1.2;
  margin-bottom: 0.65em;
}

h3{
  font-size:2em;
  line-height:1;
  margin-bottom: 0.65em;
}

h4{
  font-size:1.5em;
  font-weight: bold;
  line-height:0.8;
  margin-bottom: 0.65em;
}

h5{
  font-size:1em;
  font-weight: bold;
  line-height:0.8;
  margin-bottom: 0.65em;
}

h6{
  font-size:0.8em;
  font-weight: bold;
  line-height:0.8;
  margin-bottom: 0.65em;
}

p{
  line-height: 1.5rem;
  margin: 0 0 1.5rem 0;
}

`

export default GlobalStyles
