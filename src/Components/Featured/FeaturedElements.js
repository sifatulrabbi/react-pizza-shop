import styled from "styled-components"

export const Container = styled.section`
   background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${({ img }) => img});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   width: 100%;
   max-width: 100vw;
   padding: 3rem calc((100vw - 1300px) / 2);

   @media screen and (max-width: 500px) {
      padding: 3rem 20px;
   }
`

export const Info = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #fff;
   text-align: center;
   height: 100%;
   width: 100%;
   min-height: 550px;

   h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
   }

   p {
      font-size: 1.5rem;
      line-height: 1.6;
   }

   button {
      font-size: 1.2rem;
      background-color: red;
      outline: none;
      border: none;
      width: 14rem;
      height: 4rem;
      text-align: center;
      color: #fff;
      cursor: pointer;
      transition: 200ms ease-in-out;
      margin: 3rem 0;
      margin-bottom: 0;

      &:hover {
         transform: translate(-5px, -5px);
         box-shadow: 5px 5px #ffc500;
      }
   }
`
