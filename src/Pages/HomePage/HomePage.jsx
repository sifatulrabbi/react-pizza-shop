import React from "react"
import { Hero, Products, Featured } from "../../Components"

const HomePage = ({ productData }) => {
   return (
      <>
         <Hero />
         <Products data={productData.pizza_data} heading="Choose Your Favorites" />
         <Featured data={productData.pizza_of_the_day} heading="Pizza of the Day" />
         <Products data={productData.sweets} heading="Sweet Treats For You" />
      </>
   )
}

export default HomePage
