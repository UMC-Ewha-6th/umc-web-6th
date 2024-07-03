import axios from 'axios';

const API_KEY = '23129335d4e72895e00b227873f60824';
const API_URL = 'https://api.themoviedb.org/3/';

//nowPlayingList api
export const getNowPlayingList = async (page = 1) => {
  const response = await axios.get(`${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`);
  return response.data;
};

//popularList api
export const getPopularList = async page => {
  const response = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=ko-US&page=${page}`);
  return response.data;
};

//topRatedList api
export const getTopRatedList = async page => {
  const response = await axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-US&page=${page}`);
  return response.data;
};

//upComingList api
export const getUpComingList = async page => {
  const response = await axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-US&page=${page}`);
  return response.data;
};

//searchList api
export const getMovieList = async title => {
  const response = await axios.get(`${API_URL}/search/movie?query=${title}&api_key=${API_KEY}&language=ko-US&page=1`);
  return response.data;
};

//staffList api
export const getStaffList = async id => {
  const response = await axios.get(`${API_URL}/movie/${id}/credits?&api_key=${API_KEY}&language=ko-US&page=1`);
  return response.data;
};
