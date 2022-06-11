import React from "react";
import "./Spinner.css";

export const Spinner = () => {
  return (
    <div className="loadWrapp">
      <div className="loader">
        <div className="loader loaderInner"></div>
      </div>
    </div>
  );
};
