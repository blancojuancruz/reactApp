import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { getProductById } from "../Services/getProducts";
import { Spinner } from "../Buttons/MySpinner/Spinner";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getProductById().then((detail) => {
        setIsLoading(false);
        setProductDetail(detail);
      });
    }, 3000);
  }, []);

  return isLoading ? <Spinner /> : <ItemDetail productDetail={productDetail} />;
};
