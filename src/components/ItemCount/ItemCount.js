import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "../Buttons/Buttons";
import { PlusIcon } from "../Buttons/MyIcons/Icons";
import { NegativeIcon } from "../Buttons/MyIcons/Icons";

export const Counter = ({ productName, stock, initialValue }) => {
  const [count, setCount] = useState(parseInt(initialValue));

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
          <NegativeIcon event={handleMinus} />
        ) : (
          <NegativeIcon className="itemOpacity" />
        )}
        <h6>{count}</h6>
        {count < stock ? (
          <PlusIcon event={handlePlus} />
        ) : (
          <PlusIcon className="itemOpacity" />
        )}
      </div>
      <div className="keypadCont">
        <Button btnTxt="Detalle" className="addToCart hoverEfct" />
        {count > initialValue ? (
          <Button
            btnTxt="Limpiar carrito"
            className="addToCart hoverEfct"
            event={handleCleanCart}
          />
        ) : (
          <Button btnTxt="Limpiar carrito" className="addToCart btnDisabled" />
        )}
      </div>
    </div>
  );
};
