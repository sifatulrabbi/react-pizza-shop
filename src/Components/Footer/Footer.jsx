import React from "react"
import { Container, FooterLink } from "./FooterElements"
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

const Footer = () => {
   return (
      <Container>
         <h1>Pizza</h1>
         <nav>
            <IconContext.Provider value={{ style: { color: "inherit", width: "inherit", height: "auto" } }}>
               <FooterLink to="/">
                  <FaFacebookSquare />
               </FooterLink>
               <FooterLink to="/">
                  <FaTwitter />
               </FooterLink>
               <FooterLink to="/">
                  <FaYoutube />
               </FooterLink>
               <FooterLink to="/">
                  <FaInstagram />
               </FooterLink>
            </IconContext.Provider>
         </nav>
      </Container>
   )
}

export default Footer
