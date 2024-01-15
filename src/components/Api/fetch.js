import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40831158-570978b10e9a43fe0d856b395';

export async function getFetch(q, page) {
  const instance = axios.create({
    baseURL: BASE_URL,
    params: {
      q,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  const { data } = await instance.get();
  return data;
}

// fetch(URL)
// .then(r => {
//   if (!r.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return r.json();
// })
// .then(data => console.log(data.hits))
// .catch(error => {
//   console.error('Error during fetch:', error.message);
// });
