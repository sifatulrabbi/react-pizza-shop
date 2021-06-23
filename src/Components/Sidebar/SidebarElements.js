import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaTimes } from "react-icons/fa"

export const SidebarContainer = styled.aside`
   position: fixed;
   top: 0;
   z-index: 10;
   width: 350px;
   height: 100%;
   background: #ffc500;
   display: grid;
   align-items: center;
   transition: 300ms ease-in-out;
   right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

   @media screen and (max-width: 450px) {
      width: 100%;
   }
`

export const Icon = styled.button`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   width: max-content;
   height: max-content;
   background: transparent;
   border: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`

export const CloseIcon = styled(FaTimes)`
   color: #000;
   width: 30px;
   height: auto;
`

export const SidebarMenu = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(3, 80px);
   text-align: center;

   @media screen and (max-width: 450px) {
      grid-template-rows: repeat(3, 60px);
   }
`

export const SidebarLink = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-decoration: none;
   transition: 200ms ease-in-out;
   color: #000;
   cursor: pointer;

   &:hover {
      color: #e31837;
   }
`

export const SideBtnWrap = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const SidebarRoute = styled(Link)`
   border: none;
   outline: none;
   color: #fff;
   white-space: nowrap;
   background: #e31837;
   padding: 0.8rem 3rem;
   cursor: pointer;
   font-size: 1.2rem;
   transition: 200ms ease-in-out;
   text-decoration: none;

   &:hover {
      background: #fff;
      color: #010606;
   }
`
