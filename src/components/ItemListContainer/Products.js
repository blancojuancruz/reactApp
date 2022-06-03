import React from "react";
import logo from "../../components/images/logo.jpg";

export const Products = ({ name, leadName, softwareUsed }) => {
  return (
    <>
      <h1>Bienvenidos a la lista de Productos de {name}</h1>
      <p>
        {name} es un proyecto liderado por {leadName} con el uso de la
        tecnologia de <strong>{softwareUsed}</strong>
        <br />
        Les damos una calida bienvenida a este nuevo Proyecto.
      </p>
      <img src={`${logo}`} alt="Company Logo"></img>
    </>
  );
};
