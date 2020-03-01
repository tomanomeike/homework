import client from './client';

export const getMovies = title =>
  client.get(`/3/search/movie`, { params: { query: title } });