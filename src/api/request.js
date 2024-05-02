const requests = {
  fetchNowPlaying: '/movie/now_playing',
  fetchTrending: '/trending/all/week',
  fetchTopRated: '/movie/top_rated',
  fetchActionMovies: '/discover/movie?with_genres=28',
  fetchComedyMovies: '/discover/movie?with_genres=35',
  // fetchHorrorMovies: '/discover/movie?with_genres=27',
  // fetchRomanceMovies: '/discover/movie?with_genres=10749',
  // fetchDocumentaries: '/discover/movie?with_genres=99',
  fetchSearch: '/search/movie?include_adult=false&language=ko-KR&page=1',
  fetchDetail: '/movie',
  fetchImg: 'https://image.tmdb.org/t/p',
};

// fetchSearch: https://api.themoviedb.org/3/search/movie?query=spider&include_adult=false&language=ko-KR&page=1
// fetchDetail: https://api.themoviedb.org/3/movie/557?language=ko-KR
// fetchImg: https://image.tmdb.org/t/p/w300/xTocoWSQrK9YSvHedsa5xSemykC.jpg //w185 w200 w300 w400 w500 w780 original
// original image fetch: https://image.tmdb.org/t/p/original/xTocoWSQrK9YSvHedsa5xSemykC.jpg
export default requests;
