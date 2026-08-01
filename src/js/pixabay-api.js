import axios from 'axios';
export function getImagesByQuery(query) {
  //api key: 53619914-87b740f2b3a0dec47a2b3fec9
  return axios({
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      key: '53619914-87b740f2b3a0dec47a2b3fec9',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      lang: 'ua',
      // page: '',
      per_page: 9,
    },
    // headers: {
    //   Accept: "text/json",
    //   Content-Type: "application/json",
    // },
  }).then(response => {
    console.log(response.data.hits);
    return response.data.hits;
  });
}
//http functions
