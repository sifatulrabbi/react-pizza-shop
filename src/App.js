import React from "react"
import { Navbar, Sidebar, Footer } from "./Components"
import GlobalStyle from "./globalStyles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { productData } from "./data"
import { HomePage, Pizzas, Desserts } from "./Pages"
import useSidebar from "./Hooks/useSidebar"

function App() {
   const [show, setShow] = useSidebar(false)

   return (
      <Router>
         <GlobalStyle />
         <Navbar toggle={setShow} />
         <Sidebar toggle={setShow} isOpen={show} />
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
