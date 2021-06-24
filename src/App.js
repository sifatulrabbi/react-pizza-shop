import React, { useState } from "react"
import { Navbar, Sidebar, Hero, Products, Featured, Footer } from "./Components"
import GlobalStyle from "./globalStyles"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { productData } from "./data"
import HomePage from "./Pages/HomePage/HomePage"
import Pizzas from "./Pages/Pizzas/Pizzas"
import Desserts from "./Pages/Desserts/Desserts"

function App() {
   const [showSidebar, setShowSidebar] = useState(false)

   const toggleSidebar = () => {
      setShowSidebar(!showSidebar)
   }

   return (
      <BrowserRouter>
         <GlobalStyle />
         <Navbar toggle={toggleSidebar} />
         <Sidebar toggle={toggleSidebar} isOpen={showSidebar} />
         <Switch>
            <Route exact to="/">
               <HomePage productData={productData} />
            </Route>
            <Route exact to="/pizzas">
               <Pizzas productData={productData} />
            </Route>
            <Route exact to="/desserts">
               <Desserts productData={productData} />
            </Route>
         </Switch>
         <Footer />
      </BrowserRouter>
   )
}

export default App
