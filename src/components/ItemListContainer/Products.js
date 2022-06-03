import React from "react";
import logo from "../../components/images/logo.jpg";

export const Products = ({ name, leadName, softwareUsed }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>
        {leadName} {softwareUsed}
        <br />
        Les damos una calida bienvenida a este nuevo Proyecto.
      </p>
      <img src={`${logo}`} alt="Company Logo"></img>
    </>
  );
};
