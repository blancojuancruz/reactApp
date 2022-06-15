import React from "react";
import "./ItemListContainer.css";
import { Counter } from "../ItemCount/ItemCount";

export const ItemDetailContainer = ({
  productName,
  productImg,
  productPrice,
  stock,
  initialValue,
}) => {
  return (
    <div className="productContainer">
      <div className="imgContainer">
        <img src={productImg} alt="Product illustration"></img>
      </div>
      <h3>{productName}</h3>
      <span>Precio por unidad: ${productPrice}</span>
      <p>Stock Disponible: {stock} unidades</p>
      <Counter initialValue={initialValue} stock={stock} />
    </div>
  );
};
