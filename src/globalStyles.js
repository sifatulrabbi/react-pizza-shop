import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.7;
      font-family: 'Roboto', sans-serif;
   }

   body {
      max-width: 100vw;
      overflow-x: none;
      min-height: 100vh;
   }

   h1, h2 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 1.1;
   }
`

export default GlobalStyle
