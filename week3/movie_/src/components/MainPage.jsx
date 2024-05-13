const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE0OTMyMGY2MWM0ZTljYTY3MjM5ZTA2OGQ4MDI4ZCIsInN1YiI6IjY2MzMyMGI5OTlkNWMzMDEyNjU2OTJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KBYeoId4cpixWOlGWUpsZs48qmPvniJhUsOhlmxL8dg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));