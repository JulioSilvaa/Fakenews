import axios from 'axios';

const api = (baseURL: string) =>
  axios.create({
    baseURL,
    // headers: {
    //   'Content-Type': 'application/json',
    //   authorization: `${process.env.REACT_APP_API_KEY}`,
    // },
  });

export default api;
