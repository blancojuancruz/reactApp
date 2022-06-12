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

  const plusIconTest =
    count > initialValue ? (
      <NegativeIcon event={handleMinus} />
    ) : (
      <NegativeIcon className="itemOpacity" />
    );

  const minusIconTest =
    count < stock ? (
      <PlusIcon event={handlePlus} />
    ) : (
      <PlusIcon className="itemOpacity" />
    );

  const trueFalseButton =
    count > initialValue ? (
      <Button
        btnTxt="Limpiar carrito"
        className="addToCart hoverEfct"
        event={handleCleanCart}
      />
    ) : (
      <Button btnTxt="Limpiar carrito" className="addToCart btnDisabled" />
    );

  return (
    <div className="counterContainer">
      <h3>{productName}</h3>
      <div className="countSection">
        {plusIconTest}
        <h6>{count}</h6>
        {minusIconTest}
      </div>
      <div className="keypadCont">
        <Button btnTxt="Detalle" className="addToCart hoverEfct" />
        {trueFalseButton}
      </div>
    </div>
  );
};
