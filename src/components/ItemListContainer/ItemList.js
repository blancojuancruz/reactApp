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
      rebate: true,
    },
    {
      id: "2",
      productName: "Gabinete ASUS ROG STRIX Helios",
      productPrice: 179.319,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1637258874_h350_1.jpg",
      stock: "25",
      rebate: false,
    },
    {
      id: "3",
      productName: "Mouse Logitech G903 Lightspeed",
      productPrice: 13.199,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1602868547_345345.jpg",
      stock: "18",
      rebate: true,
    },
    {
      id: "4",
      productName: "Memoria GeiL DDR4 8GB 3000MHz RGB",
      productPrice: 7.475,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1597155903_ddr4xlr8desktoprgb3200mhzfr.jpg",
      stock: "3",
      rebate: false,
    },
    {
      id: "5",
      productName: "Memoria GeiL DDR4 8GB 3000MHz RGB",
      productPrice: 7.475,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1597155903_ddr4xlr8desktoprgb3200mhzfr.jpg",
      stock: "3",
      rebate: true,
    },
    {
      id: "6",
      productName: "Procesador AMD Ryzen 7 5700g 4.6",
      productPrice: 47950,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1635508558_5700g.jpg",
      stock: "10",
      rebate: false,
    },
    {
      id: "7",
      productName: "Disco Duro HDD 1Tb Seagate Barracuda Sata III",
      productPrice: 5819,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1586464173_disc1.jpg",
      stock: "3",
      rebate: true,
    },
    {
      id: "8",
      productName: "Disco Solido SSD 250Gb Adata M2 Nvme Swordfish 1800Mb/s",
      productPrice: 5095,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1610112262_productgallery7457.jpg",
      stock: "3",
      rebate: false,
    },
    {
      id: "9",
      productName:
        "Placa De Video Palit Nvidia GeForce RTX 3070 Ti GameRock 8Gb",
      productPrice: 149999,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1628607955_placa-de-video-palit-nvidia-geforce-rtx-3070-ti-gamerock-8gb-gddr6-lhr.jpg",
      stock: "3",
      rebate: true,
    },
    {
      id: "10",
      productName: "Fuente Cooler Master 750W V2 80+ Bronze MWE",
      productPrice: 18990,
      productImg:
        "https://www.venex.com.ar/products_images/thumb/1585773713_fuente_coolermaster_750w_80_bronze.jpg",
      stock: "3",
      rebate: true,
    },
  ];
  resolve(products);

  const error = "404 Error: Page not Found";
  if (!products) {
    reject(error);
  }
});

export const ItemList = () => {
  const [myProducts, setmyProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const promiseResolve = () => {
    myPromise.then((products) => {
      setmyProducts(products);
    });
  };

  useEffect(() => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      promiseResolve();
    }, 2000);
  }, []);

  const showRebateProduct = myProducts
    .filter((product) => product.rebate)
    .map((product) => <Product key={product.id} {...product} />);

  const noRebateProduct = myProducts
    .filter((product) => product.rebate === false)
    .map((product) => <Product key={product.id} {...product} />);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <h2>¡Aprovecha nuestros productos con descuento!</h2>
      <div className="itemListContainer">{showRebateProduct}</div>
      <h2>Productos sin descuento</h2>
      <div className="itemListContainer">{noRebateProduct}</div>
    </>
  );
};
