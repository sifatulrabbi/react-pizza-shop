import React, { useState } from "react"
import HeroContainer from "./HeroElements"

const Hero = () => {
   return (
      <HeroContainer>
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
