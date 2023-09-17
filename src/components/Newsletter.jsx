import React from 'react'
import styled from 'styled-components'
import { TitleStyles } from './ReusableStyles'
export default function Newsletter() {
  return (
      
    <div>
      <h1>Ubicación</h1>
      <div className="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14925.159689580905!2d-103.3094589!3d20.7390399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b0f528cb4969%3A0x32f4966302ee14ca!2sHotel%20Posada%20Mirador!5e0!3m2!1ses!2smx!4v1694981734298!5m2!1ses!2smx" 
        width="1200" height="100" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"></iframe>
      </div>
    </div>
      
   
  );
}

const Section = styled.section`
//border: 0.01rem solid black;
//padding: 4rem;
display: flex;
flex-direction: column;
gap: 2rem;
align-items: center;
${TitleStyles};
.container{
  background: linear-gradient(to right, #fc4958, #e85d05, #fc4958);
  padding: 0.3vw;
}
input{
  border: none;
  padding: 1.5rem 8rem 1.5rem 1rem;
  font-size: 1.3rem;
  &:focus{
    outline: none;
  }
}
button{
  padding: 1rem 5rem;
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  transition: 0.3 ease-in-out;
  cursor: pointer;
  &:hover{
    letter-spacing: 0.6rem;
    padding: 1rem 4.7rem;
  }
}
@media screen and (min-width: 260px) and (max-width: 1080px){
  .container{
    padding: 0.8rem;
    border-radius: 0.5rem;
    input{
      width: 75vw;
      padding: 0.5rem;
      border-radius: .5rem;
    }
    button{
      margin-top: 0.5rem;
      width: 100%;
      padding: 0.5rem;
      &:hover{
        padding: 0.5rem 1rem;
      }
    }
  }
}
`;
