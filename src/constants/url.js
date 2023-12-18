import { api_key } from "./Apikey";

export const apiBaseUrl =`https://api.themoviedb.org/3`;

export const imageUrl = "https://image.tmdb.org/t/p/original";

export const trending = `trending/all/week?api_key=${api_key}&language=en-US`;

export const action = `discover/movie?api_key=${api_key}&with_genres=28`;

export const originals = `discover/tv?api_key=${api_key}&with_networks=213`;

export const horror = `discover/movie?api_key=${api_key}&with_genres=27`;

export const videoApi = `movie/346698/videos?api_key=${api_key}&language=en-US`;