import axios from "axios";

const API_KEY = "3e934555e8aa77f0c475abefbfbed548";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
    page: 1,
  },
});

// Lấy danh sách phim theo now_playing
export const getMovies = () => tmdb.get("/movie/now_playing");

// Lấy chi tiết phim
export const getMovieDetails = (movieId) => tmdb.get(`/movie/${movieId}`);
export const getMovieList = () => tmdb.get(`genre/movie/list`);

// getMovies()
//   .then((response) => {
//     console.log("Danh sách phim hiện đang chiếu:", response.data);
//   })
//   .catch((error) => {
//     console.error("Lỗi khi lấy danh sách phim:", error);
//   });

// getMovieDetails(550)
//   .then((response) => {
//     console.log("Chi tiết phim:", response.data);
//   })
//   .catch((error) => {
//     console.error("Lỗi khi lấy chi tiết phim:", error);
//   });

getMovieList()
  .then((response) => {
    console.log("Danh sách :", response.data);
  })
  .catch((error) => {
    console.error("Lỗi khi lấy danh sách phim:", error);
  });
