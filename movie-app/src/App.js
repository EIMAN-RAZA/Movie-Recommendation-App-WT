import React, { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';


const App = () => {
  const movies = [
    { 
      id: 1, 
      title: 'The Day After Tomorrow', 
      genre: 'Sci-Fi / Disaster', 
      rating: 6.5,
      image: 'https://m.media-amazon.com/images/M/MV5BOGZmNDYyNmMtNDQyNy00OTkzLTg1OGUtYWJiNmQ5Y2Q5ZGU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpgg' 
    },
    { 
      id: 2, 
      title: 'The Maze Runner', 
      genre: 'Action / Sci-Fi', 
      rating: 6.8,
      image: 'https://w0.peakpx.com/wallpaper/817/577/HD-wallpaper-maze-runner-the-maze-runner-thomas-thumbnail.jpg'
    },
    { 
      id: 3, 
      title: 'Inception', 
      genre: 'Sci-Fi / Thriller', 
      rating: 8.8,
      image: 'https://wallpapercat.com/w/full/9/6/1/304867-1536x2732-iphone-hd-inception-background-image.jpg'
    },
    { 
      id: 4, 
      title: 'The Chronicles of Narnia', 
      genre: 'Fantasy / Adventure', 
      rating: 6.9,
      image: 'https://lh4.googleusercontent.com/proxy/jw02vOCz74RbySmghNUoEKaxsR-_gF5ca29vxemYz0cuzctkG-F87k1yhL-ejr0YGok1V4v_MLe_ltwpsKQ0igpIyNr6ThpqOF9HejcO34rs7WqeMJmKU84LPjLwkRKBw8XjrXOsL8q_I-xujFVLEZw-xVXq7LZyRfE'
    },
    { 
      id: 5, 
      title: 'Maleficent', 
      genre: 'Fantasy', 
      rating: 6.9,
      image: 'https://wallpapercat.com/w/full/7/4/1/364946-2048x2048-samsung-hd-maleficent-movie-wallpaper-image.jpg'
    },
  ];


  const [watchlist, setWatchlist] = useState([]);

  // Function to add movie to watchlist (if not already added)
  const addToWatchlist = (movie) => {
    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    } else {
      alert(`${movie.title} is already in your watchlist!`);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎬 Movie Recommendation Interface</h1>
        <div className="watchlist-info">
          📋 My Watchlist: <span className="watchlist-count">{watchlist.length}</span> movies
        </div>
      </header>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAddToWatchlist={addToWatchlist}
          />
        ))}
      </div>


      {watchlist.length > 0 && (
        <div className="watchlist-preview">
          <h2>⭐ Watchlist Summary</h2>
          <ul>
            {watchlist.map((movie) => (
              <li key={movie.id}>{movie.title} ({movie.genre})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default App;