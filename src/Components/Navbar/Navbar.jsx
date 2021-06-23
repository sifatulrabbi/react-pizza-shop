import React from "react"
import { Nav, NavLogo, NavMenu, Bars } from "./NavbarElements"

const Navbar = ({ toggle }) => {
   return (
      <Nav>
         <NavLogo to="/">Pizza</NavLogo>

         <NavMenu onClick={toggle}>
            <p>Menu</p>
            <Bars />
         </NavMenu>
      </Nav>
   )
}

export default Navbar
