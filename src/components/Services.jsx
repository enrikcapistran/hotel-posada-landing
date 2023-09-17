import React from 'react'
import styled from 'styled-components'
import Service1 from "../assets/servicio_paisaje.png"
import Service2 from "../assets/servicio_alberca.png"
import Service3 from "../assets/servicio_rest.png"
import { TitleStyles } from "./ReusableStyles";

export default function Services() {
  return ( 
  <Section id="services">
    <div className="title">
      <h1 className='yellow'>Sobre Nosotros</h1>
      <p>
      Hotel y Spa Posada Mirador está a 15 minutos en auto de Auditorio Telmex y de Catedral de Guadalajara. Consiente tus sentidos con un masaje y prueba la variedad de deliciosas opciones que Restaurant tiene para ti en el desayuno, la comida y la cena. Destacan su sauna, su terraza y su jardín.
      </p>
    </div>
    <div className="services">
      <div className="service">
        <img src={Service2} alt="Service" />
        <p>
        Contamos con alberca, terraza, sauna & spa. <span>En nuestras instalaciones</span>, los esperamos!{" "}
        </p>
        <button>Ver Más</button>
      </div>
      <div className="service yellow">
        <img src={Service1} alt="Service" />
        <p>
        Descanso con vista a la belleza natural de La Barranca de Huentitán, <span>¡un regalo para el alma!</span>{" "}
        </p>
        <button>Ver Más</button>
      </div>
      <div className="service">
        <img src={Service3} alt="Service" />
        <p>
         Restaurante familiar con <span>desayunos, comidas y cenas.</span> ¡Donde cada bocado se combina con la grandeza del paisaje!{" "}
        </p>
        <button>Ver Más</button>
      </div>
    </div>
  </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 1vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        span{
          color: #2390b7;
          font-weight: 600;
        }
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #244a57;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #2390b7;
        }
      }
    }
    .yellow {
      button {
        background-color: #244a57;
        &:hover {
          background-color: #2390b7;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px){
    margin: 2rem;
    .services{
      grid-template-columns: 1fr;
    }
  }
`;