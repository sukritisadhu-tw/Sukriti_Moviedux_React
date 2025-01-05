import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toogleWatchlist }) {
  return (
    <div>
      <h1 classname="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              movie={movie}
              key={id}
              toogleWatchlist={toogleWatchlist}
              isWatchlisted={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}
