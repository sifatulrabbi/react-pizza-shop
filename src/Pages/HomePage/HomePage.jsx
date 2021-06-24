import React from "react"
import { Hero, Products, Featured } from "../../Components"
import { Practice } from "../../Components"

const HomePage = ({ data }) => {
   return (
      <>
         <Hero />
         <Products data={data.pizza_data} heading="Choose Your Favorites" />
         <Featured data={data.pizza_of_the_day} heading="Pizza of the Day" />
         <Products data={data.sweets} heading="Sweet Treats For You" />
         <Practice />
      </>
   )
}

export default HomePage
