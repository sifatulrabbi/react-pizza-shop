import React from "react"
import { Hero } from "./Components"
import GlobalStyle from "./globalStyles"
import { BrowserRouter } from "react-router-dom"

function App() {
   return (
      <BrowserRouter>
         <GlobalStyle />
         <Hero />
      </BrowserRouter>
   )
}

export default App
