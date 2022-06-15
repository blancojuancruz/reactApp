import React from "react";
import { Counter } from "../ItemCount/ItemCount";
import { Button } from "../Buttons/Buttons";
import "./ItemDetailContainer.css";

export const ItemDetail = ({ productDetail }) => {
  return (
    <section className="productDetailContainer">
      <figure>
        <img src={productDetail.productImg} alt="Product illustration"></img>
        <figcaption>
          ¡La mejor Notebook del mercado! ¿Te la vas a perder?
        </figcaption>
      </figure>
      <div className="descriptionContainer">
        <h2>{productDetail.productName}</h2>
        <span>Precio por unidad: ${productDetail.productPrice}</span>
        <p>Stock Disponible: {productDetail.stock} unidades</p>
        <Counter
          initialValue={productDetail.initialValue}
          stock={productDetail.stock}
        />
        <Button btnTxt="Comprar" className="buyButton" />
      </div>
    </section>
  );
};
