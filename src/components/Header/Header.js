import React from "react";
import "./Header.css";
import logo from "../../components/images/logo.jpg";
import { NavBar } from "./Navbar/NavBar";
import { CartWidget } from "../MyIcons/Icons";
import { Button } from "../Buttons/Buttons";
import {
  FaSearch,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

export const Header = () => {
  return (
    <header className="headerContainer">
      <div className="logoContainer">
        <img src={`${logo}`} alt="Company Logo" className="imgResponsive"></img>
      </div>
      <div className="searchContainer">
        <input type="text" placeholder="Busca tu producto aqui!"></input>
        <span className="searchIcon">
          <FaSearch />
        </span>
      </div>
      <section className="separateSection">
        <div className="socialButton">
          <span>
            <a
              href="https://instagram.com/blancojuanchi"
              target="blank"
              className="instagram"
            >
              <FaInstagram />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/juan-cruz-blanco-221790184/"
              target="blank"
              className="linkedin"
            >
              <FaLinkedin />
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/blancojuanchi"
              target="blank"
              className="twitter"
            >
              <FaTwitter />
            </a>
          </span>
          <span>
            <a
              href="https://www.twitch.tv/juanchibln"
              target="blank"
              className="twitch"
            >
              <FaTwitch />
            </a>
          </span>
        </div>
        <div className="userSection">
          <Button btnTxt="Ingresar" className="logInButton" />
          <span>
            <CartWidget />
          </span>
        </div>
      </section>
      <NavBar />
    </header>
  );
};