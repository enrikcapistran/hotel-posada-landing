import React from "react";
import styled from "styled-components";
import background from "../assets/hotel_portfolio.jpg";
export default function Portfolio() {
  return (
    <Section id="portfolio" className="porfolio-section">
      <div className="background">
        <img src={background} alt="Porfolio Img" />
      </div>
      <div className="content">
        <h1>Hotel Posada Mirador</h1>
        <h2>
        Disfrute de nuestra vista espectacular hacia la Barranca de Huentitán. 
        ¡Reserve su escapada perfecta ahora y déjese llevar por la belleza natural que nos rodea!
        </h2>
        <button>Reserve Aquí</button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  border-radius: 5rem;
  &:hover {
    .background {
      img {
        transform: scale(1.2);
      }
    }
  }
  .background {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    border-radius: 1rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      border-radius: 1rem;
      transition: 0.8s ease-in-out;
    }
  }
  .content{
    position: absolute;
    top: 25%;
    left:10%;
    color:white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    h1{
      font-size: 3rem;
      width: 60%;
    }
    h2{
      width: 60%;
    }
    button{
      border: none;
      padding: 1rem 4rem;
      font-size: 1.4rem;
      color: white;
      background: linear-gradient(to right, #fc4958, #e85d05);
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      text-transform: uppercase;
      &:hover{
        background: linear-gradient(to left, #fc4958, #e85d05);
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 720px){
    .content{
      h1{
        margin-top: auto;
        width: 90%;
        font-size: 1.5rem;
      }
      h2{
        font-size: 1rem;
        width: 90%;
      }
      button{
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  }
`;