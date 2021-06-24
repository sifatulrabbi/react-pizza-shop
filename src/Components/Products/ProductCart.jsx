import React from "react"
import { Cart, Img } from "./ProductsElements"

const ProductCart = ({ index, name, img, desc, price, btnTxt }) => {
   return (
      <Cart key={index}>
         <Img img={img} />
         <div className="info">
            <h2>{name}</h2>
            <p>{desc}</p>
            <h3>{price}</h3>
            <button type="button">{btnTxt}</button>
         </div>
      </Cart>
   )
}

export default ProductCart
