import styled from "styled-components"

export const Container = styled.div`
   width: 100%;
   max-width: 100vw;
   text-align: center;
   padding: 4rem 0;
   background: #010606;
   color: #fff;
   padding: 5rem calc((100vw - 1300px) / 2);

   h1 {
      margin-bottom: 2rem;
   }

   .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
   }

   @media screen and (max-width: 450px) {
      padding: 5rem 20px;
   }
`

export const Cart = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 300px;
   height: max-content;
   margin: 2rem;

   h2 {
      margin: 10px 0;
   }

   p {
      font-size: 1rem;
      line-height: 1.6;
      letter-spacing: 1px;
      margin-bottom: 20px;
   }

   h3 {
      margin: 10px;
      font-size: 1.6rem;
      font-weight: 700;
   }

   button {
      font-size: 1.1rem;
      background-color: red;
      outline: none;
      border: none;
      width: 10rem;
      height: 3.5rem;
      text-align: center;
      color: #fff;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
         transform: translate(-5px, -5px);
         box-shadow: 5px 5px #ffc500;
      }
   }
`

export const Img = styled.div`
   background-image: url(${({ img }) => img});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   width: 300px;
   height: 300px;
   box-shadow: 5px 5px #ffc500;
   margin-bottom: 2rem;
`
