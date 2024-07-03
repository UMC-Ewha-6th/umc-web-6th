import axios from 'axios';

export const getMusic = async (list) => {
  const response = await axios.get('http://localhost:8080/musics');
  return response.data;
};
