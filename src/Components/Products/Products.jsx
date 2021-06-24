import React from "react"
import { Container } from "./ProductsElements"
import ProductCart from "./ProductCart"

const Products = ({ data, heading }) => {
   return (
      <Container>
         <h1>{heading}</h1>
         <div className="wrapper">
            {data &&
               data.map((product, index) => (
                  <ProductCart
                     index={index}
                     img={product.img}
                     alt={product.alt}
                     name={product.name}
                     desc={product.desc}
                     price={product.price}
                     btnTxt={product.button}
                  />
               ))}
         </div>
      </Container>
   )
}

export default Products
