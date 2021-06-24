import React, { useState } from "react"
import { Navbar, Sidebar, Footer } from "./Components"
import GlobalStyle from "./globalStyles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
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
      <Router>
         <GlobalStyle />
         <Navbar toggle={toggleSidebar} />
         <Sidebar toggle={toggleSidebar} isOpen={showSidebar} />
         <Switch>
            <Route exact path="/">
               <HomePage data={productData} />
            </Route>
            <Route exact path="/pizzas">
               <Pizzas data={productData.pizza_data} />
            </Route>
            <Route exact path="/desserts">
               <Desserts data={productData.sweets} />
            </Route>
         </Switch>
         <Footer />
      </Router>
   )
}

export default App
