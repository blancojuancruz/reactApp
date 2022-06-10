import React, { useState, useEffect } from "react";
import { Product } from "./Item";
import "./ItemListContainer.css";

const myPromise = new Promise((resolve, reject) => {
  const products = [
    {
      id: "1",
      productName: "Mother Gigabyte GA-A320M-S2H Ryzen",
      productPrice: 10.159,
      productImg:
        "https://http2.mlstatic.com/D_NQ_NP_826329-MLA47526290999_092021-O.webp",
      stock: "11",
    },
    {
      id: "2",
      productName: "Gabinete ASUS ROG STRIX Helios Aluminum Black",
      productPrice: 179.319,
      productImg:
        "https://http2.mlstatic.com/D_NQ_NP_783889-MLA49816166061_042022-O.webp",
      stock: "25",
    },
    {
      id: "3",
      productName: "Mouse Logitech G903 Lightspeed Wireless",
      productPrice: 13.199,
      productImg:
        "https://http2.mlstatic.com/D_NQ_NP_974506-MLA32148386648_092019-O.webp",
      stock: "18",
    },
    {
      id: "4",
      productName: "Memoria GeiL DDR4 8GB 3000MHz RGB",
      productPrice: 7.475,
      productImg:
        "https://http2.mlstatic.com/D_NQ_NP_787427-MLA49971771721_052022-O.webp",
      stock: "3",
    },
  ];

  const error = "Lo sentimos la pagina no esta disponible";

  if (products.length > 0) {
    resolve(products);
  } else {
    reject(error);
  }
});

export const ItemList = () => {
  const [myProducts, setmyProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      promiseResolve();
    }, 2000);
  }, [myProducts]);

  const promiseResolve = () => {
    myPromise.then((products) => {
      setmyProducts(products);
    });
  };

  return (
    <>
      {myProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </>
  );
};
