import React from "react";
import { Products } from "./Products";
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  const {
    name = "HardwareStore©",
    leadName = "Blanco Juan Cruz",
    softwareUsed = "React",
  } = props;

  return (
    <section className="itemListContainer">
      <Products name={name} leadName={leadName} softwareUsed={softwareUsed} />
    </section>
  );
};
