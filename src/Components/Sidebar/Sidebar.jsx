import React from "react"
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarContainer isOpen={isOpen}>
         <Icon onClick={() => toggle(false)}>
            <CloseIcon />
         </Icon>
         <SidebarMenu>
            <SidebarLink onClick={toggle} to="/pizzas">
               Pizzas
            </SidebarLink>
            <SidebarLink onClick={toggle} to="/desserts">
               Desserts
            </SidebarLink>
            <SidebarLink onClick={toggle} to="/">
               Full Menu
            </SidebarLink>
         </SidebarMenu>
         <SideBtnWrap>
            <SidebarRoute onClick={toggle} to="/">
               Order Now
            </SidebarRoute>
         </SideBtnWrap>
      </SidebarContainer>
   )
}

export default Sidebar
