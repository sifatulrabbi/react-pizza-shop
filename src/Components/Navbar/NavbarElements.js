import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaPizzaSlice } from "react-icons/fa"

export const Nav = styled.nav`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   background: transparent;
   display: flex;
   justify-content: center;
   font-weight: 700;
   height: 80px;
`
export const NavLogo = styled(Link)`
   text-decoration: none;
   font-size: 2.1rem;
   display: flex;
   align-items: center;
   cursor: pointer;
   color: #fff;
   font-weight: inherit;

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
   color: #fff;
   cursor: pointer;

   p {
      transform: translate(-175%, 100%);
      font-weight: bold;
      font-family: inherit;
      cursor: pointer;
   }
`
export const Bars = styled(FaPizzaSlice)`
   font-size: 2rem;
   transform: translate(-50%, -15%);
   cursor: pointer;
`
