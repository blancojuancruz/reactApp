import React from "react";
import "./ItemListContainer.css";
import { ItemDetailContainer } from "./ItemDetailContainer";

export const Product = ({ productImg, productName, productPrice, stock }) => {
  return (
    <ItemDetailContainer
      productImg={productImg}
      productName={productName}
      productPrice={productPrice}
      stock={stock}
    />
  );
};
