import React, { startTransition } from 'react';
import movies from './movies';
import ReviewForm from './ReviewForm';
import { useState, useEffect } from 'react';
import '../index.css';
import ReviewList from './ReviewList';



const fetchMovies = () => {
    return movies;
  };
  const MovieList = () => {
    console.log(fetchMovies());
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const movies = fetchMovies();
        setMovies(movies);
      }, []);


    return(
        <div className="movie-container">
        <h2>List of Movies</h2>
        <ul className ="movie-list">
          {movies.map(movie => (
            <li key={movie.id} className="movie">
                <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} />
                <p>{movie.synopsis}</p> Released on {movie.year}
              <p>Rating: {movie.rating}</p><br></br>
              <ReviewList />
             
            </li>
          ))} 
        </ul>

  
      </div> 
    );
  };
  export default MovieList;