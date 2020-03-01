import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/'
});

export default {
  get: (url, config) =>
    client.get(url, {
      ...config,
      params: {
        api_key: '2c3de2f043bc4c5e5d0ff450cc650979',
        language: 'en-US',
        ...config.params
      }
    })
};
