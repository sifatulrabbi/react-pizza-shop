import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaPizzaSlice } from "react-icons/fa"

export const Nav = styled.nav`
   background: #aa1111;
   display: flex;
   justify-content: center;
   font-weight: 700;
   height: 80px;
`
export const NavLogo = styled(Link)`
   text-decoration: none;
   font-size: 2rem;
   display: flex;
   align-items: center;
   cursor: pointer;
   color: #fff;

   @media screen and (max-width: 400px) {
      position: absolute;
      top: 10px;
      left: 25px;
   }
`

export const NavMenu = styled.div`
   display: block;
   position: absolute;
   top: 0;
   right: 0;
   cursor: pointer;
   color: #fff;

   p {
      transform: translate(-175%, 100%);
      font-weight: bold;
   }
`
export const Bars = styled(FaPizzaSlice)`
   font-size: 2rem;
   transform: translate(-50%, -15%);
`
