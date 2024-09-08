import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { fetchGenres, fetchMoviesByGenre } from "../api";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(28);
  const { searchResults } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Gọi hàm fetchGenres từ api.js
    fetchGenres().then(setGenres);
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchMoviesByGenre(selectedGenre, currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [selectedGenre, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); 
  };

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography variant="h6">Thể loại</Typography>
          <List>
            {genres.map((genre) => (
              <ListItem
                button
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
              >
                <ListItemText primary={genre.name} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">
            {searchResults.length > 0 ? "Kết quả tìm kiếm" : "Danh sách phim"}
          </Typography>
          <Grid container spacing={2}>
            {(searchResults.length > 0 ? searchResults : movies).map(
              (movie) => (
                <Grid item xs={6} sm={3} md={2} key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      style={{ width: "100%" }}
                    />
                    <Typography>{movie.title}</Typography>
                  </Link>
                </Grid>
              )
            )}
          </Grid>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
