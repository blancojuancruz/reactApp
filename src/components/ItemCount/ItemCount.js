import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "../Buttons/Buttons";
import { PlusIcon } from "../MyIcons/Icons";
import { NegativeIcon } from "../MyIcons/Icons";

export const Counter = ({ productName, stock, initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handleCleanCart = () => {
    setCount(initialValue);
  };

  return (
    <div className="counterContainer">
      <h3>{productName}</h3>
      <div className="countSection">
        {count > initialValue ? (
          <NegativeIcon event={() => handleMinus()} />
        ) : (
          <NegativeIcon className="itemOpacity" />
        )}
        <span>{count}</span>
        {count < stock ? (
          <PlusIcon event={() => handlePlus()} />
        ) : (
          <PlusIcon className="itemOpacity" />
        )}
      </div>
      {count > initialValue ? (
        <Button
          btnTxt="Limpiar Carrito"
          className="addToCart hoverEfct"
          event={() => {
            handleCleanCart();
          }}
        />
      ) : (
        <Button btnTxt="Limpiar Carrito" className="addToCart itemOpacity" />
      )}
    </div>
  );
};
