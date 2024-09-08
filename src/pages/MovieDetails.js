import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { fetchMovieDetails } from "../api";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Gọi hàm fetchMovieDetails từ api.js
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <Box p={2}>
      <Typography variant="h4">{movie.title}</Typography>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px" }}
      />
      <Typography variant="body1">{movie.overview}</Typography>
      <Typography variant="body2">
        Release Date: {movie.release_date}
      </Typography>
      <Typography variant="body2">Rating: {movie.vote_average}/10</Typography>
    </Box>
  );
};

export default MovieDetail;
