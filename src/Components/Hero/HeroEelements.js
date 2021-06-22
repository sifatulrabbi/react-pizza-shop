import styled from "styled-components"
import img from '../../images/pizza-3.jpg'

const HeroContainer = styled.section`
   background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),  url(${img});
   background-blend-mode: multiply;
   background-position: center;
   background-size: cover;
   height: 100vh;

   .content {
      height: calc(100vh - 80px);
      max-height: 100%;
      width: 100vw;
      padding: 0 calc((100vw - 1300px) / 2);

      ul {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: flex-start;
         height: 100vh;
         max-height: 100%;
         padding: 0 2rem;
         width: 650px;
         color: #fff;
         text-transform: uppercase;
         line-height: 1;
         font-weight: bold;

         @media screen and (max-width: 650px) {
            width: 100%;
         }
      }

      h1 {
         font-size: clamp(2.5rem, 10vw, 5rem);
         margin-bottom: 1rem;
         box-shadow: 3px 5px #e9ba23;
         letter-spacing: 3px;
      }

      p {
         font-size: clamp(2rem, 2.5vw, 3rem);
         margin-bottom: 2rem;
      }

      button {
         font-size: 1.4rem;
         padding: 1rem 4rem;
         border: none;
         background: #e31837;
         color: #fff;
         transition: 200ms ease-out;

         &:hover {
            background: #ffc500;
            transition: 200ms ease-out;
            cursor: pointer;
         }
      }
   }
`
export default HeroContainer