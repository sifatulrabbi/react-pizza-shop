import React from "react"
import { Container, Info } from "./FeaturedElements"

const Featured = ({ data, heading }) => {
   return (
      <Container img={data && data.img}>
         <Info>
            <h1>{heading}</h1>
            <p>{data.desc}</p>
            <button>{data.button}</button>
         </Info>
      </Container>
   )
}

export default Featured
