/**
 * url 'https://api.themoviedb.org/3/movie/76341'
* header Authorization = 'Bearer <<access_token>>'
* header Content-Type = 'application/json;charset=utf-8'
* method get

 */

 import {V3_API_KEY} from './secrets/APIKeys';

 const URL = 'https://api.themoviedb.org/3';

const getMovieUrl = (query) => `https://api.themoviedb.org/3/search/movie?api_key=${V3_API_KEY}&query=${query}&language=en-US&page=1`;