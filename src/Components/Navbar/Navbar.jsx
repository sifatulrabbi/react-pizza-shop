import React from "react"
import { Nav, NavLogo, NavMenu, Bars } from "./NavbarElements"

const Navbar = () => {
   return (
      <Nav>
         <NavLogo to="/">Pizza</NavLogo>

         <NavMenu>
            <p>Menu</p>
            <Bars />
         </NavMenu>
      </Nav>
   )
}

export default Navbar
