import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Rating } from '@mui/material';
import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList'




function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
