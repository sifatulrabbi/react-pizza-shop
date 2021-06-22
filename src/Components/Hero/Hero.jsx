import React from "react"
import HeroContainer from './HeroEelements'
import Navbar from "../Navbar/Navbar"

const Hero = () => {
   return (
      <HeroContainer>
         <Navbar />
         <div className='content'>
            <ul>
               <h1>Greatest Pizza ever</h1>
               <p>Ready in 60 seconds</p>
               <button type='button'>Place Order</button>
            </ul>
         </div>
      </HeroContainer>
   )
}

export default Hero
