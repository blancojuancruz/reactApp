import React from "react";
import "./Buttons.css";

export const Button = ({
  btnTxt = "Ingresar",
  className = "defaultBtn",
  event,
}) => {
  return (
    <button className={className} onClick={event}>
      {btnTxt}
    </button>
  );
};
