import React from 'react'
import styled from 'styled-components'
import product1 from "../assets/hab1.jpg"
import product2 from "../assets/hab2.jpg"
import product3 from "../assets/hab3.jpg"
import product4 from "../assets/hab4.jpg"
import { imageZoomEffect, TitleStyles } from './ReusableStyles'

export default function Products() {
  const data = [
    {
      image: product1,
      name: "Lorem ipsum",
      price: "$600",
    },
    {
      image: product2,
      name: "Lorem ipsum",
      price: "$380",
    },
    {
      image: product3,
      name: "Lorem ipsum",
      price: "$550",
    },
    {
      image: product4,
      name: "Lorem ipsum",
      price: "$250",
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          Conoce Nuestras<span> Habitaciones</span>
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
            return (
              <div className="product">
                <div className="image">
                  <img src={product.image} alt="Product" />
                </div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, recusandae.</p>
                <button>Ver Más</button>
              </div>
            );
          })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${TitleStyles};
  .products{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product{
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3{
        color: #244a57;
      }
      p{
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0ch.1rem;
      }
      ${imageZoomEffect};
      .image{
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img{
          aspect-ratio: auto;
          height: 20rem;
          width: 15rem;
          border-radius: 1rem;
        }
      }
      button{
        border: none;
        padding: 1rem 4rem;
        color: white;
        font-size: 1.4rem;
        border-radius: 4rem;
        cursor: pointer;
        background: linear-gradient(to right, #5f7f89, #244a57);
        &:hover{
          background: linear-gradient(to left, #244a57, #244a57,#5f7f89);
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 720px){
    .products{
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px){
    .products{
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
