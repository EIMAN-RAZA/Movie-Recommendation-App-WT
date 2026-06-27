import React from 'react';


const MovieCard = ({ movie, onAddToWatchlist }) => {
  return (
    <div className="movie-card">
      <img 
        src={movie.image} 
        alt={movie.title} 
        className="movie-poster"
      />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-genre">Genre: {movie.genre}</p>
      <p className="movie-rating">Rating: ⭐ {movie.rating}/10</p>
      <button className="watchlist-btn" onClick={() => onAddToWatchlist(movie)}>
        Add to Watchlist
      </button>
    </div>
  );
};


export default MovieCard;