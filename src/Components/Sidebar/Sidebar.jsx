import React from "react"
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarContainer isOpen={isOpen}>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>
         <SidebarMenu>
            <SidebarLink onClick={toggle} to="/">
               Pizzas
            </SidebarLink>
            <SidebarLink onClick={toggle} to="/">
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
