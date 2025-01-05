import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toogleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genre");
  const [rating, setRating] = useState("All");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const matcheGenre = (movie, genre) => {
    return (
      genre === "All Genre" || movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const matcheRating = (movie, rating) => {
    switch (rating) {
      case "Good":
        return movie.rating > 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return true;
    }
  };
  const matcheSearchTearm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
  const filteredMovies = movies.filter(
    (movie) =>
      matcheGenre(movie, genre) &&
      matcheRating(movie, rating) &&
      matcheSearchTearm(movie, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="search your movies..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenre}
          >
            <option>All Genre</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Action</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRating}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toogleWatchlist={toogleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}
