import React from 'react';
import styled from 'styled-components';
import hero from "../assets/hotel_hero.jpg";
import heroDesign from "../assets/HeroDesign.png";

export default function Hero() {
  return (
    <Section id='home'>
        <div className="background">
            <img src={hero} alt="Background" />
        </div>
        <div className="content">
            
            <div className="info">
                <h2></h2>
                <em>¡Bienvenidos a Posada Mirador, donde la relajación alcanza nuevas alturas!</em>
                <button>Reserve Ahora</button>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  .background {
    height: 90%;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      border-radius: 1rem;
      transition: 0.8s ease-in-out;
    }
  }&:hover {
    .background {
      img {
        transform: scale(1.2);
      }
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        position: absolute;
        top: 25vh;
        left: 15vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info{
        position: absolute;
        top: 40%;
        right: 10%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;
        h2{
            color: #f9c74f;
            font-size: 4rem;
            letter-spacing: 0.5rem;
        }
        em{
            color: white;
            width: 60%;
            text-align: end;
            font-weight: 700;
            font-size: 1.7rem;
            letter-spacing: 0.1rem;
        }
        button{
            padding: 1rem 2rem;
            font-size: 1.4rem;
            background-color: #5f7f89;
            border: none;
            color: white;
            font-weight: 800;
            letter-spacing: 0.2rem;
            cursor: pointer;
            transition: 0ms.3s ease-in-out;
            &:hover{
                background-color: #244a57;
            }
        }
        
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px){
    .content{
      flex-direction: column;
      .sale{
        display: none;
      }
      .info{
        top: 25%;
        h2{
          font-size: 2rem;
        }
        em{
          width: 90%;
        }
      }
    }
  }
`;
