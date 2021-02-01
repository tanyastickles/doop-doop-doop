/**
 * url 'https://api.themoviedb.org/3/movie/76341'
* header Authorization = 'Bearer <<access_token>>'
* header Content-Type = 'application/json;charset=utf-8'
* method get

 */

import { V3_API_KEY } from "./secrets/APIKeys";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = `api_key=${V3_API_KEY}`;
const BASE_LANGUAGE = "&language=en-US";

const searchMovieUrl = (query) =>
  `${BASE_URL}/search/movie?${API_KEY}&query=${query}&language=en-US&page=1&adult=false`;

const movieCreditsUrl = (movieId) =>
  `${BASE_URL}/movie/${movieId}/credits?${API_KEY}&language=en-US`;

const popularPeopleURL = () =>
  `https://api.themoviedb.org/3/person/popular?${API_KEY}&language=en-US&page=1`;

// to build images
const configurationUrl = () =>
  `https://api.themoviedb.org/3/configuration?${API_KEY}`;

export const searchMovies = (query) => {
  return fetch(searchMovieUrl(query)).then((response) => response.json());
};

export const getMovieCast = (movieId) => {
  return fetch(movieCreditsUrl(movieId)).then((response) => response.json());
};
