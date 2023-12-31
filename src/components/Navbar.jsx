import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logoHotel from "../assets/logo_hotel.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  return (
    <>
      <Nav>
        <div className="brand">
          <img className="logo" src={logoHotel} alt="Icon" />
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="#home" className="active">
              Inicio
            </a>
          </li>
          <li>
            <a href="#services">Nuestros Servicios</a>
          </li>
          <li>
            <a href="#portfolio">Agendar</a>
          </li>
          <li>
            <a href="#testimonials">Mapa</a>
          </li>
          <li>
            <a href="#products">Habitaciones</a>
          </li>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setNavbarState(false)}
            >
              Inicio
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              Nuestros Servicios
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setNavbarState(false)}>
              Agendar
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Mapa
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setNavbarState(false)}>
              Habitaciones
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  .logo{
    height: 115px;
    width: 235px;
    padding-bottom: 15px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #244a57;
        font-weight: 600;
        font-size: 1.2rem;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #5f7f89;
        }
      }
      .active {
        color: #0a0a0a;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 1.9 ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #5f7f89;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #244a57;
        }
      }
      &:first-of-type {
        a {
          color: #244a57;
          font-weight: 900;
        }
      }
    }
  }
`;