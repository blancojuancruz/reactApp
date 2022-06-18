import axios from 'axios'

export const getProducts = () => {
  return axios
    .get('https://629003ea665ea71fe12bfae1.mockapi.io/api/v1/hsProducts')
    .then((products) => {
      const { data } = products
      return data
    })
}
