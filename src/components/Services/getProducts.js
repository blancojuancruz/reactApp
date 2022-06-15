import axios from "axios";

export const getProducts = () => {
  return axios
    .get("https://radiant-river-14751.herokuapp.com/api/products")
    .then((products) => {
      const { data } = products;
      return data;
    });
};

export const getProductById = () => {
  return axios
    .get(
      "https://radiant-river-14751.herokuapp.com/api/products/62a8f40e5bb4899cd6327063"
    )
    .then((product) => {
      const { data } = product;
      return data;
    });
};
