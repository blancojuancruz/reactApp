import React from "react";
import { Products } from "./Products";
import "./ItemListContainer.css";
import "../../App.css";
import { Counter } from "../ItemCount/ItemCount";

export const ItemListContainer = (props) => {
  const {
    name = "HardwareStore©",
    leadName = "Blanco Juan Cruz",
    softwareUsed = "React",
  } = props;

  const companyName = `Bienvenidos a la lista de Productos de ${name}`;
  const teamLead = `${name} es un proyecto liderado por ${leadName}`;
  const software = `con el uso de la tecnologia de ${softwareUsed}`;

  return (
    <section className="itemListContainer">
      <Products
        name={companyName}
        leadName={teamLead}
        softwareUsed={software}
      />

      <Counter productName="Memoria RAM" stock={10} initialValue={0} />
    </section>
  );
};
