import axios from 'axios'

export const getProducts = () => {
  return axios
    .get('https://radiant-river-14751.herokuapp.com/api/products')
    .then((products) => {
      const { data } = products
      return data
    })
}
