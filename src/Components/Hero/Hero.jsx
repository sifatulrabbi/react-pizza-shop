import React, { useState } from "react"
import HeroContainer from "./HeroElements"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

const Hero = () => {
   const [showSidebar, setShowSidebar] = useState(false)

   const toggleSidebar = () => {
      setShowSidebar(!showSidebar)
   }

   return (
      <HeroContainer>
         <Navbar toggle={toggleSidebar} />
         <Sidebar toggle={toggleSidebar} isOpen={showSidebar} />
         <div className="content">
            <ul>
               <h1>Greatest Pizza ever</h1>
               <p>Ready in 60 seconds</p>
               <button type="button">Place Order</button>
            </ul>
         </div>
      </HeroContainer>
   )
}

export default Hero
