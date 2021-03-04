import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 20px;
  font-size: 112.5%;
  font-family: sans-serif;
}
input,
button {
  font-size: 90%;
  padding: 5px 20px;
}
`
