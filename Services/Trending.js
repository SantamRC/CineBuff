import axios from 'axios';

function Trending() {
  var config = {
    method: 'get',
    url: 'https://api.themoviedb.org/3/trending/movie/day?api_key=4d51e2149ffec1e3fabb84a54d724b76',
    headers: {},
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        resolve(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
        reject();
      });
  });
}

export default Trending;
