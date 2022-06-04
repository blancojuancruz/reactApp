import React from "react";
import "./Buttons.css";

export const Button = (props) => {
  const { btnTxt = "Ingresar" } = props;
  return <button className="logInButton">{btnTxt}</button>;
};
