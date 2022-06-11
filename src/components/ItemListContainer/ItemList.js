import React, { useState, useEffect } from "react";
import { Product } from "./Item";
import { Spinner } from "../Buttons/MySpinner/Spinner";
import "./ItemListContainer.css";

const myPromise = new Promise((resolve, reject) => {
  const products = [
    {
      id: "1",
      productName: "Mother Gigabyte GA-A320M-S2H Ryzen",
      productPrice: 10.159,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1585334803_gigabyte_a320mh_am4.jpg",
      stock: "11",
    },
    {
      id: "2",
      productName: "Gabinete ASUS ROG STRIX Helios",
      productPrice: 179.319,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1637258874_h350_1.jpg",
      stock: "25",
    },
    {
      id: "3",
      productName: "Mouse Logitech G903 Lightspeed",
      productPrice: 13.199,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1602868547_345345.jpg",
      stock: "18",
    },
    {
      id: "4",
      productName: "Memoria GeiL DDR4 8GB 3000MHz RGB",
      productPrice: 7.475,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1597155903_ddr4xlr8desktoprgb3200mhzfr.jpg",
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
  const [spinner, setSpinner] = useState(false);

  const promiseResolve = () => {
    myPromise.then((products) => {
      setmyProducts(products);
    });
  };

  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
      promiseResolve();
    }, 2000);
  }, []);

  return (
    <>
      {!spinner ? (
        myProducts.map((product) => <Product key={product.id} {...product} />)
      ) : (
        <Spinner />
      )}
    </>
  );
};
