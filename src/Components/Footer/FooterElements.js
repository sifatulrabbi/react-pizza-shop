import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.section`
   background: #010606;
   color: #fff;
   width: 100%;
   max-width: 100vw;
   padding: 2rem calc((100vw - 1300px) / 2);
   margin-top: -1px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media screen and (max-width: 500px) {
      padding: 2rem 20px;
   }

   h1 {
      font-size: 1.5rem;
   }

   nav {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`

export const FooterLink = styled(Link)`
   margin: 10px;
   color: white;
   height: 1.3rem;
   width: 1.3rem;
`
