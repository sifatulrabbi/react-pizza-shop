import product1 from "./images/product-1.jpg"
import product2 from "./images/product-2.jpg"
import product3 from "./images/product-3.jpg"
import sweetImg1 from "./images/sweet-2.jpg"
import sweetImg2 from "./images/sweet-1.jpg"
import sweetImg3 from "./images/sweet-3.jpg"
import pizzaImg from "./images/featured3.jpg"

export const productData = {
   pizza_data: [
      {
         img: product1,
         alt: "Pizza",
         name: "Supreme Pizza",
         desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
         price: "$19.99",
         button: "Add to Cart",
      },
      {
         img: product2,
         alt: "Pizza",
         name: "Hawaiian Paradise",
         desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
         price: "$16.99",
         button: "Add to Cart",
      },
      {
         img: product3,
         alt: "Pizza",
         name: "Veggie Overload",
         desc: "Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
         price: "$14.99",
         button: "Add to Cart",
      },
   ],

   pizza_of_the_day: {
      img: pizzaImg,
      desc: "This is the best pizza for today with a great deal",
      button: "Grab One Now!",
   },

   sweets: [
      {
         img: sweetImg1,
         alt: "Sweet",
         name: "Chocolate Donut",
         desc: "Chocolate, Eggs, Bananas, Milk powder, sugar, potato",
         price: "$1.99",
         button: "Add to Cart",
      },
      {
         img: sweetImg2,
         alt: "Sweet",
         name: "Swedish Ice-cream",
         desc: "Chocolate, Eggs, Bananas, Milk powder, sugar, potato",
         price: "$3.99",
         button: "Add to Cart",
      },
      {
         img: sweetImg3,
         alt: "Sweet",
         name: "Sugar less Cake",
         desc: "Chocolate, Eggs, Bananas, Milk powder, sugar-free, potato",
         price: "$2.99",
         button: "Add to Cart",
      },
   ],
}
