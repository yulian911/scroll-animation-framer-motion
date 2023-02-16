import axios from 'axios';

const options = {
  params: {
    page: '2',
    size: '30',
    // search: 'Fullmetal',
    // genres: 'Fantasy,Drama',
    sortBy: 'ranking',
    sortOrder: 'asc',
  },
  headers: {
    'X-RapidAPI-Key': 'ee2bbceb26msh0682e3acf9eb3dfp1cf202jsnced4f099bf87',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
  },
};

// export const api = axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export function getGame() {
  return axios.get('https://rawg-video-games-database.p.rapidapi.com/games', {
    headers: {
      Authorization: 'ee2bbceb26msh0682e3acf9eb3dfp1cf202jsnced4f099bf87',
      '': 'rawg-video-games-database.p.rapidapi.com',
    },
  });
}

export const getMovie = async () => {
  try {
    const res = await axios.get('https://anime-db.p.rapidapi.com/anime', options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
