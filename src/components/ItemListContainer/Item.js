import React from "react";
import { Counter } from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

export const Product = ({
  productImg,
  productName,
  productPrice,
  stock,
  initialValue,
}) => {
  return (
    <div className="productContainer">
      <div className="imgDetailContainer">
        <img src={productImg} alt="Product illustration"></img>
      </div>
      <h3>{productName}</h3>
      <span>Precio por unidad: ${productPrice}</span>
      <p>Stock Disponible: {stock} unidades</p>
      <Counter initialValue={initialValue} stock={stock} />
    </div>
  );
};
