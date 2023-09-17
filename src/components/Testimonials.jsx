import React from "react";
import styled from "styled-components";
import avatar1 from "../assets/avatar1.jpeg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>Encuentre</span> nuestras instalaciones
          </h1>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14925.159689580905!2d-103.3094589!3d20.7390399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b0f528cb4969%3A0x32f4966302ee14ca!2sHotel%20Posada%20Mirador!5e0!3m2!1ses!2smx!4v1694981734298!5m2!1ses!2smx" 
        width="100%" height="100%" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"></iframe>
        
        
      </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 5vw;
  //background: linear-gradient(to right, #244a57, #244a57, #244a57);
  padding: 0.2rem;
  border-radius: 1.5rem;
  height: 800px;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 2vw;
    //background-color: #02A126;
    border-radius: 1rem;
    height: 96%;
    ${TitleStyles};
    .title {
      position: relative;
      top: -1rem;
      padding: 0 1rem;
      background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #02A126;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px){
    .container{
      .title{
        position: initial;
        background-color: transparent;
      }
      .testimonials{
        flex-direction: column;
      }
    }
  }
`;