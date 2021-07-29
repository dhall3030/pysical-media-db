import axios from 'axios';

const url = process.env.VUE_APP_API_URL;

export const HTTP = axios.create({
  baseURL: url
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
})