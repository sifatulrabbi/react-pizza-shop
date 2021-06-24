import React from "react"
import { Hero, Products, Featured, Footer } from "./Components"
import GlobalStyle from "./globalStyles"
import { BrowserRouter } from "react-router-dom"
import { productData } from "./data"

function App() {
   return (
      <BrowserRouter>
         <GlobalStyle />
         <Hero />
         <Products data={productData.pizza_data} heading="Choose Your Favorites" />
         <Featured data={productData.pizza_of_the_day} heading="Pizza of the Day" />
         <Products data={productData.sweets} heading="Sweet Treats For You" />
         <Footer />
      </BrowserRouter>
   )
}

export default App
