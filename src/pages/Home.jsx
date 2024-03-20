import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topMoviesURL = `${moviesURL}top_rated?${apiKey}`;

    getTopMovies(topMoviesURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando filmes...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
