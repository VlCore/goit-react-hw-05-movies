import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '1341786bc60f44b196daebc2c18e4f41';

export const fetchSearchMovie = async query => {
  return await axios.get(`/search/movie`, {
    params: {
      query,
      api_key: key,
    },
  });
};

export const fetchCredits = async id => {
  return await axios.get(`/movie/${id}/credits?api_key=${key}`);
};

export const fetchTrendingMovie = async () => {
  return await axios.get(`/trending/movie/day?api_key=${key}`);
};

export const fetchMovieById = async id => {
  return await axios.get(`/movie/${id}?api_key=${key}`);
};

export const fetchMovieReview = async id => {
  return await axios.get(`/movie/${id}/reviews?api_key=${key}`);
};