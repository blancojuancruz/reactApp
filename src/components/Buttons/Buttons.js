import React from "react";
import "./Buttons.css";

export const Button = (props) => {
  const { btnTxt = "Ingresar", className = "defaultBtn" } = props;
  return <button className={className}>{btnTxt}</button>;
};
