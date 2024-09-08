import axios from "axios";

const API_KEY = "3e934555e8aa77f0c475abefbfbed548";
const BASE_URL = "https://api.themoviedb.org/3";

// Lấy danh sách thể loại phim
export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: { api_key: API_KEY, language: "en-US" },
    });
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};

// Lấy danh sách phim theo thể loại
export const fetchMoviesByGenre = async (genreId, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    return { results: [], total_pages: 0 };
  }
};

// Lấy chi tiết của một bộ phim
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

// Hàm tìm kiếm phim theo tên
export const fetchMoviesByName = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: { api_key: API_KEY, query, page },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    return { results: [], total_pages: 0 };
  }
};
fetchGenres()
  .then((response) => {
    console.log("Danh sách :", response);
  })
  .catch((error) => {
    console.error("Lỗi khi lấy danh sách phim:", error);
  });
